'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var AppointmentSchema = new mongoose.Schema({
    title: String,
    start: Date,
    end: Date,
    allDay: Boolean,
    dow: String,
    rate: Number,
    carer: String,
    client: String
});
var Appointment = mongoose.model('Appointment', AppointmentSchema);
exports.default = Appointment;
//# sourceMappingURL=appointment.js.map