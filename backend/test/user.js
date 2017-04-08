var chai = require('chai'),
    chaiHttp = require('chai-http'),
    server = require('../server'),
    should = chai.should();

const uuidV1 = require('uuid/v1');

chai.use(chaiHttp);

// Successful registration test
describe('/POST /classes/_User', () => {
    it('it should create a new user', (done) => {
        let newEmail = uuidV1().concat('@gmail.com');
        let user = {
            username: newEmail,
            email: newEmail,
            password: 'test'
        }
        chai.request(server)
            .post('/parse/classes/_User')
            .set('X-Parse-Application-Id', 'emotifAppId',
                 'X-Parse-REST-API-Key', 'emotifRestKey',
                 'Content-Type', 'application/x-www-form-urlencoded')
            .send(user)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                res.body.should.have.property('objectId');
                res.body.should.have.property('createdAt');
                res.body.should.have.property('sessionToken');
                done();
            });
    });
});

// Duplicate registration
describe('/POST /classes/_User', () => {
    it('it should give an error for duplicate user', (done) => {
        let user = {
            username: 'josh1@gmail.com',
            email: 'josh1@gmail.com',
            password: 'test'
        }
        chai.request(server)
            .post('/parse/classes/_User')
            .set('X-Parse-Application-Id', 'emotifAppId',
                 'X-Parse-REST-API-Key', 'emotifRestKey',
                 'Content-Type', 'application/x-www-form-urlencoded')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('code').eql(202);
                res.body.should.have.property('error').eql('Account already exists for this username.')
                done();
            });
    });
});


/*
// Successful user authentication
describe('/GET /login', () => {
    it('it should give successfully login user', (done) => {
        let user = {
            username: 'josh1@gmail.com',
            email: 'josh1@gmail.com',
            password: 'test'
        }
        chai.request(server)
            .get('/parse/login')
            .set('X-Parse-Application-Id', 'emotifAppId',
                 'X-Parse-REST-API-Key', 'emotifRestKey',
                 'Content-Type', 'application/x-www-form-urlencoded')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('code').eql(202);
                res.body.should.have.property('error').eql('Account already exists for this username.')
                done();
            });
    });
});
*/

// Successful waitlist
describe('/POST /classes/waitlist', () => {
    it('it should successfully create a waitlist', (done) => {
        let waitlist = {
            email: 'test@emotif.com'
        };
        chai.request(server)
            .post('/parse/classes/waitlist')
            .set('X-Parse-Application-Id', 'emotifAppId',
                 'X-Parse-REST-API-Key', 'emotifRestKey',
                 'Content-Type', 'application/json')
            .send(waitlist)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                res.body.should.have.property('objectId');
                res.body.should.have.property('createdAt');
                done();
            });
    });
});


// Successful createStripetoken
describe('/POST /functions/createStripeToken', () => {
    it('it should successfully create a waitlist', (done) => {
        let card = {
            email: 'test5@emotif.com',
            number: 4242424242424242,
            exp_month: 08,
            exp_year: 2018,
            cvc: 294
        };
        chai.request(server)
            .post('/parse/functions/createStripeToken')
            .set('X-Parse-Application-Id', 'emotifAppId',
                 'X-Parse-REST-API-Key', 'emotifRestKey',
                 'Content-Type', 'application/json')
            .send(card)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('result');
                res.body.result.should.have.property('id');
                res.body.result.should.have.property('object').eql('token');
                res.body.result.should.have.property('card');
                done();
            });
    });
});

// Successful createStripeCustomer
describe('/POST /functions/createStripeCustomer', () => {
    it('it should successfully create a stripe customer', (done) => {
        let card = {
            email: 'josh1@gmail.com',
            number: 4242424242424242,
            exp_month: 08,
            exp_year: 2018,
            cvc: 294
        };
        chai.request(server)
            .post('/parse/functions/createStripeToken')
            .set('X-Parse-Application-Id', 'emotifAppId',
                 'X-Parse-REST-API-Key', 'emotifRestKey',
                 'Content-Type', 'application/json')
            .send(card)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('result');
                done();
            });
    });
});

// Error: Trying to create stripe customer for someone who already has one
describe('/POST /functions/createStripeCustomer', () => {
    it('it should successfully create a stripe customer', (done) => {
        let card = {
            email: 'test5@gmail.com',
            number: 4242424242424242,
            exp_month: 08,
            exp_year: 2018,
            cvc: 294
        };
        chai.request(server)
            .post('/parse/functions/createStripeToken')
            .set('X-Parse-Application-Id', 'emotifAppId',
                 'X-Parse-REST-API-Key', 'emotifRestKey',
                 'Content-Type', 'application/json')
            .send(card)
            .end((err, res) => {
                res.should.have.status(202);
                res.body.should.be.a('object');
                res.body.should.have.property('result');
                res.body.result.should.have.property('stripeId');
                done();
            });
    });
});

// Error: Creating stripe transaction for customer without stripe account
describe('/POST /functions/createTransaction', () => {
    it('it should give an error that there is no stripe token', (done) => {
        let transaction = {
            email: 'josh1@gmail.com',
            amount: 500
        }
        chai.request(server)
            .post('/parse/functions/createTransaction')
            .set('X-Parse-Application-Id', 'emotifAppId',
                 'X-Parse-REST-API-Key', 'emotifRestKey',
                 'Content-Type', 'application/json')
            .send(transaction)
            .end((err, res) => {
                res.should.have.status(202);
                res.body.should.be.a('object');
                res.body.should.have.property('result');
                done();
            });
    });
});
