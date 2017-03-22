//=================Cloud Functions=================//
//=================================================//
// Test stripe key for dev, change stripe key for live
var stripe = require('stripe')(process.env.STRIPEAPIKEY),
    mongoose = require('mongoose'),
    request = require('request');

// mongoose.connect(process.env.MONGODB_URI);

// Test hello function
Parse.Cloud.define("hello", function(req, res) {
    res.success('hi');
});

// Setting ACL setings for UserProfile class before saving
Parse.Cloud.beforeSave("UserProfile", function(req, res) {
    var acl = new Parse.ACL();
    acl.setReadAccess(req.user, true);
    acl.setWriteAccess(req.user, true);
    req.object.setACL(acl);
    res.success();
});

Parse.Cloud.define("createStripeToken", function(req, res) {
    stripe.tokens.create({
        card: {
            "number": req.params.number,
            "exp_month": req.params.exp_month,
            "exp_year": req.params.exp_year,
            "cvc": req.params.cvc
        }
    }, function(err, token) {
        if (err) {
            res.error(err);
        }
        else {
            return res.success(token);
        }
    });
});

// Creating stripe customer account
Parse.Cloud.define("createStripeCustomer", function(req, res) {
    var custEmail = req.params.email;
    var User = Parse.Object.extend("_User");
    var query = new Parse.Query(User);
    query.equalTo("email", custEmail);
    query.first({
        success: function(user) {
            if (!user.get("stripeId")) {
                stripe.customers.create({
                    email: custEmail,
                    // source: token
                }, function(err, stripeCustomer) {
                    if(err) {
                        res.error("Could not create stripe customer account");
                    }
                    var newStripeId = stripeCustomer.id
                    user.set("stripeId", newStripeId);
                    user.save(null, { useMasterKey: true});
                    // res.success(JSON.parse('{ "stripeCustomerId": stripeCustomer.id}'));
                    res.success(newStripeId);
                });

            }
            else {
                res.error("Already has stripe account");
            }
        },
        error: function(err) {
            res.error("Error " + err.code + " " + err.message);
        }
    });
});

Parse.Cloud.define("createTransaction", function(req, res) {
    var custEmail = req.params.email;
    res.success("working");
    var query = new Parse.Query(Parse.User);
    query.equalTo("email", custEmail);
    query.first({ useMasterKey: true }, {
        success: function(user) {
            var custStripeId = user.get("stripeId");
            if (!custStripeId) {
                Parse.Cloud.run("createStripeCustomer", {email: req.body.email, token: req.body.stripeToken}, {
                    success: function(result) {
                        stripe.charges.create({
                            amount: req.body.amount,
                            currency: "usd",
                            customer: result.stripeCustomerId
                        }, function(err, charge) {
                            if (err) {
                                res.error(err);
                            }
                            res.success(JSON.stringify(charge));
                        });
                    },
                    error: function(err) {
                        res.error("Error in creating stripe account");
                    }
                });
            }
            else {
                stripe.charges.create({
                    amount: req.body.amount,
                    currency: "usd",
                    customer: result.stripeCustomerId
                    }, function(err, charge) {
                        if (err) {
                            res.error(err);
                        }
                        res.success(JSON.stringify(charge));
                });
            }
        },
        error: function(err) {
            res.error("Error" + err.code + " " + err.message);
        }
    });
});


