"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var carerSchema = new mongoose.Schema({
    names: String,
    surname: String,
    phoneNumber: String,
    email: String,
    gender: {
        type: String,
        enum: ['M', 'F', 'O']
    },
    dob: Date,
    // appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }],
    address: String,
    userName: String
});
var Carer = mongoose.model('Carer', carerSchema);
exports.default = Carer;
//# sourceMappingURL=carer.js.map