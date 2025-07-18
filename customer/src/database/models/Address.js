const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    type: {
        type: String,
        enum: ['restaurant', 'hotel', 'cafe', 'other'],
        required: true
    },
    completeAddress: {
        type: String,
        required: true
    },
    latitude : {
        type:Number,
        required:true
    },
    longitude : {
        type: Number,
        required:true
    },
    isStored: {
        type: Boolean,
        default: true
    }
});

module.exports =  mongoose.model('address', AddressSchema);