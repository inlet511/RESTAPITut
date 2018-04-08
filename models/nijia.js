const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create nijia Schema & model
const NijiaSchema = new Schema({
    name:{
        type:String,
        require:[true,'Name field is required']
    },
    rank:{
        type:String
    },
    available:{
        type: Boolean,
        default:false
    }

    //add in geo location

});

const Nijia = mongoose.model('nijia',NijiaSchema);

module.exports = Nijia;