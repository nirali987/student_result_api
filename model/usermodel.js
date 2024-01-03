var mongoose = require('mongoose');

var studentschema = new mongoose.Schema({
    rollno:{
        type:String
    },
    name:{
        type:String
    },
    phy:{
        type:Number
    },
    chem:{
        type:Number
    },
    maths:{
        type:Number
    },
    total:{
        type:Number
    }
})

module.exports = mongoose.model("result",studentschema);