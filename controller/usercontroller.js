var usermodel = require('../model/usermodel');

exports.insert = async (req,res) => {
    var data = await usermodel.create(req.body);
  
    var phy = Number(req.body.phy);
    var chem = Number(req.body.chem);
    var maths = Number(req.body.maths);
    
    var total = phy+chem+maths;

    var rollno = req.body.rollno;
    var data2 = await usermodel.findOneAndUpdate({rollno : rollno},{total : total});

    res.status(200).json({
        status:"success",
        data,
        data2,
        total
    })
}

exports.select_data = async (req,res) => {
    var data = await usermodel.find();
    res.status(200).json({
        status:"success",
        data,
    })
}

exports.delete_data = async (req,res) => {
    var id = req.params.id;
    var data = await usermodel.findByIdAndDelete(id);

    res.status(200).json({
        status:"data deleted",
    })
}
exports.update_data = async (req,res) => {
    var id = req.params.id;
    var data = await usermodel.findByIdAndUpdate(id,req.body);
    
    var phy = Number(req.body.phy);
    var chem = Number(req.body.chem);
    var maths = Number(req.body.maths);
    
    var total = phy+chem+maths;

    var rollno = req.body.rollno;
    var data2 = await usermodel.findOneAndUpdate({rollno : rollno},{total : total});
    res.status(200).json({
        status:"data updated",
        data,
        data2,
        total
    })
}

exports.five = async (req,res) => {
    var data = await usermodel.find().sort({total :-1}).limit(5);
    res.status(200).json({
        status:"top five student",
        data
    })
}

exports.ten = async (req,res) => {
    var mysort = {total : -1}
    var data = await usermodel.find().sort(mysort).limit(10);
    res.status(200).json({
        status:"top ten student",
        data
    })
}