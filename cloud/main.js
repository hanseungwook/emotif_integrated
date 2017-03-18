//=================Cloud Functions=================//
//=================================================//
// Test stripe key for dev, change stripe key for live
var stripe = require('stripe')(process.env.STRIPEAPIKEY);
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

// Setting ACL setings for UserProfile class before saving
Parse.Cloud.beforeSave("UserProfile", function(req, res) {
    var acl = new Parse.ACL();
    acl.setReadAccess(req.user, true);
    acl.setWriteAccess(req.user, true);
    req.object.setACL(acl);
    res.success();
});

// Signup
Parse.Cloud.define("signUp", function(req, res) {
    var user = new Parse.User();
    user.set("email", req.body.email);
    user.set("password", req.body.password);
    user.set("username", req.body.email);

    user.signUp(null, {
        success: function(user) {
            Parse.Cloud.run("logIn", {username: req.body.email, password: req.body.password}, {
                success: function(result) {
                    console.log("Logged in after signing up");
                },
                error: function(err) {
                    console.log(err);
                }
            });
        },
        error: function(err) {
            alert("Error: " + err.code + err.message);
        }
    });
});

// Login
Parse.Cloud.define("logIn", function(req, res) {
    Parse.User.logIn(req.body.email, req.body.password, {
        success: function(user) {
            req.session.user = user;
            req.session.token = user.getSessionToken();
            res.redirect('/');
        },
        error: function(err) {
            res.error("Error: " + err.code + err.message);
        }

    });

});

// Unclear if necessary
Parse.Cloud.define("getUser", function(req, res) {

});

// Creating stripe customer account
Parse.Cloud.define("createStripeCustomer", function(req, res) {
    var custEmail = req.body.email;
    var token = req.body.stripeToken;

 //   var User = Parse.Object.extend('_User');
    var query = new Parse.Query(Parse.User);
    query.equalTo("email", custEmail);
    query.first({
        success: function(user) {
            alert("Successfully retrieved " + user.email);
            if (!user.get("stripeId")) {
                stripe.customers.create({
                    email: custEmail,
                    source: token
                }, function(err, stripeCustomer) {
                    if(err) {
                        res.error("Could not create stripe customer account");
                    }
                    user.set("stripeId", stripeCustomer.id);
                    res.success();
                });

            }
            else {
                res.error("Could not find user")
            }
        }
    }, {
        error: function(err) {
            res.error("Error " + err.code + " " + err.message);
        }
    }, { useMasterKey: true }
    );
});

Parse.Cloud.define("createTransaction", function(req, res) {
    var custEmail = req.body.email;
    var query = new Parse.Query(Parse.User);
    query.equalTo("email", custEmail);
    query.first({
        success: function(user) {
            stripe.customers.retrieve({
                user.get("stripeId"),
                function(err, stripeCustomer) {
                    if (err) {
                        res.error("Error retrieving stripe customer");
                    }
                    stripe.charges.create({
                        amount: req.body.amount,
                        currency: "usd",
                        source: stripeCustomer.default_source
                        description: "Test charge for " + custEmail
                    }, function(err, charge) {
                        if(err) {
                            res.error(err);
                        }
                        res.success(JSON.stringify(charge));
                    });
                }
            });
        }
    }, {
        error: function(err) {
            res.error("Error" + err.code + " " + err.message);
        }
    }, { useMasterKey: true }
    );
});


