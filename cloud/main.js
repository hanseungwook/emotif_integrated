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
                    // Create a stripe token using cloud function with req parameters
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
    var User = Parse.Object.extend("_User");
    var query = new Parse.Query(User);
    query.equalTo("email", custEmail);
    query.first({
        success: function(user) {
            var custStripeId = user.get("stripeId");
            if (!custStripeId) {
                Parse.Cloud.run("createStripeCustomer", {email: req.body.email}, {
                    success: function(result) {
                        alert("Stripe Customer registration success!");
                    },
                    error: function(err) {
                        res.error("Error in creating new stripe account");
                    }
                });
            }
            stripe.charges.create({
                amount: req.params.amount,
                currency: "usd",
                customer: custStripeId
                }, function(err, charge) {
                    if (err) {
                        res.error(err);
                    }
                    res.success(charge);
            });
        },
        error: function(err) {
            res.error("Error" + err.code + " " + err.message);
        }
    });
});


