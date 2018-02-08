"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var chaiHttp = require("chai-http");
process.env.NODE_ENV = 'test';
var app_1 = require("../app");
var appointment_1 = require("../models/appointment");
var should = chai.use(chaiHttp).should();
describe('Appointments', function () {
    beforeEach(function (done) {
        appointment_1.default.remove({}, function (err) {
            done();
        });
    });
    describe('Backend tests for appointments', function () {
        it('should get all the appointments', function (done) {
            chai.request(app_1.app)
                .get('/api/appointments')
                .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
        });
        it('should get appointment count', function (done) {
            chai.request(app_1.app)
                .get('/api/appointments/count')
                .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('number');
                res.body.should.be.eql(0);
                done();
            });
        });
        it('should create new appointment', function (done) {
            var appointment = new appointment_1.default({ title: 'joe', start: new Date(), end: new Date(), dow: 'joe', client: 'joe', carer: 'joe' });
            chai.request(app_1.app)
                .post('/api/appointment')
                .send(appointment)
                .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.a.property('title');
                res.body.should.have.a.property('start');
                res.body.should.have.a.property('end');
                res.body.should.have.a.property('dow');
                done();
            });
        });
        it('should get a appointment by its id', function (done) {
            var appointment = new appointment_1.default({ title: 'joe' });
            appointment.save(function (error, newAppointment) {
                chai.request(app_1.app)
                    .get("/api/appointment/" + newAppointment.id)
                    .end(function (err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('title');
                    res.body.should.have.property('_id').eql(newAppointment.id);
                    done();
                });
            });
        });
        it('should update a appointment by its id', function (done) {
            var appointment = new appointment_1.default({ title: 'joe' });
            appointment.save(function (error, newAppointment) {
                chai.request(app_1.app)
                    .put("/api/appointment/" + newAppointment.id)
                    .send({ start: new Date() })
                    .end(function (err, res) {
                    res.should.have.status(200);
                    done();
                });
            });
        });
        it('should delete a appointment by its id', function (done) {
            var appointment = new appointment_1.default({ title: 'joe' });
            appointment.save(function (error, newAppointment) {
                chai.request(app_1.app)
                    .delete("/api/appointment/" + newAppointment.id)
                    .end(function (err, res) {
                    res.should.have.status(200);
                    done();
                });
            });
        });
    });
    it('should return appointments by carers', function (done) {
        var appointment1 = new appointment_1.default({ title: 'joe', carer: 'joe' });
        var appointment2 = new appointment_1.default({ title: 'joe2', carer: 'joe' });
        appointment1.save(function (error, newAppointment1) {
            appointment2.save(function (error2, newAppointment2) {
                chai.request(app_1.app)
                    .get("/api/appointment/carer/" + newAppointment2.carer)
                    .end(function (err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(2);
                    console.log(res.body);
                    done();
                });
            });
        });
    });
});
//# sourceMappingURL=appointment.spec.js.map