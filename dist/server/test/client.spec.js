"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var chaiHttp = require("chai-http");
process.env.NODE_ENV = 'test';
var app_1 = require("../app");
var client_1 = require("../models/client");
var should = chai.use(chaiHttp).should();
describe('Clients', function () {
    beforeEach(function (done) {
        client_1.default.remove({}, function (err) {
            done();
        });
    });
    describe('Backend tests for clients', function () {
        it('should get all the clients', function (done) {
            chai.request(app_1.app)
                .get('/api/clients')
                .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
        });
        it('should get client count', function (done) {
            chai.request(app_1.app)
                .get('/api/clients/count')
                .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('number');
                res.body.should.be.eql(0);
                done();
            });
        });
        it('should create new client', function (done) {
            var client = { names: 'Dave', surname: 'David', gender: 'M', dob: '14 June 1949',
                weight: 56, address: '141 NorthWood Way, London, HA6 1RF', userName: 'davedavid',
                conditions: 'Eye Sight Problem', additionalServices: 'In need of carrying',
                contacts: [{ name: 'Dave Chapel', phone: '5555554445454', address: '' }],
                medicines: [{ name: 'Prozac', dose: 'Every 8 hours after meal' }] };
            chai.request(app_1.app)
                .post('/api/client')
                .send(client)
                .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.a.property('names');
                res.body.should.have.a.property('surname');
                res.body.should.have.a.property('gender');
                done();
            });
        });
        it('should get a user by its id', function (done) {
            var client = new client_1.default({ names: 'Dave', surname: 'David', gender: 'M', dob: '14 June 1949',
                weight: 56, email: 'cokahraman@hotmail.com', address: '141 NorthWood Way, London, HA6 1RF', userName: 'davedavid',
                conditions: 'Eye Sight Problem', additionalServices: 'In need of carrying',
                contacts: [{ name: 'Dave Chapel', phone: '5555554445454', address: '' }],
                medicines: [{ name: 'Prozac', dose: 'Every 8 hours after meal' }] });
            client.save(function (error, newClient) {
                chai.request(app_1.app)
                    .get("/api/client/" + newClient.id)
                    .end(function (err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('userName');
                    res.body.should.have.property('email');
                    res.body.should.have.property('address');
                    res.body.should.have.property('_id').eql(newClient.id);
                    done();
                });
            });
        });
        it('should update a user by its id', function (done) {
            var client = new client_1.default({ names: 'Dave', surname: 'David', gender: 'M', dob: '14 June 1949',
                weight: 56, email: 'cokahraman@hotmail.com', address: '141 NorthWood Way, London, HA6 1RF', userName: 'davedavid',
                conditions: 'Eye Sight Problem', additionalServices: 'In need of carrying',
                contacts: [{ name: 'Dave Chapel', phone: '5555554445454', address: '' }],
                medicines: [{ name: 'Prozac', dose: 'Every 8 hours after meal' }] });
            client.save(function (error, newClient) {
                chai.request(app_1.app)
                    .put("/api/client/" + newClient.id)
                    .send({ username: 'User 2' })
                    .end(function (err, res) {
                    res.should.have.status(200);
                    done();
                });
            });
        });
        it('should add users temperature', function (done) {
            var client = new client_1.default({ names: 'Dave', surname: 'David', gender: 'M', dob: '14 June 1949',
                email: 'cokahraman@hotmail.com', address: '141 NorthWood Way, London, HA6 1RF', userName: 'davedavid' });
            client.save(function (error, newClient) {
                chai.request(app_1.app)
                    .put("/api/client/" + newClient.id)
                    .send({ temperatures: [{ date: new Date(), weight: 50 }] })
                    .end(function (err, res) {
                    res.should.have.status(200);
                    done();
                });
            });
        });
        it('should delete a user by its id', function (done) {
            var client = new client_1.default({ userName: 'User', email: 'user@example.com' });
            client.save(function (error, newClient) {
                chai.request(app_1.app)
                    .delete("/api/client/" + newClient.id)
                    .end(function (err, res) {
                    res.should.have.status(200);
                    done();
                });
            });
        });
    });
});
//# sourceMappingURL=client.spec.js.map