const coursModel = require('../models/cours-model')


module.exports = {
    get : (req,res) => {
        coursModel.selectAll((result)=>{res.json(result)})
    },
    getById : (req,res)=>{
        coursModel.selectById(req.params.id, result =>{res.json(result)})
    },
    post : (req,res) => {
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        coursModel.insert(req.body, message =>{res.json({success : true, message})})
    },
    put : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        coursModel.update(req.params.id,req.body, result =>{res.json({success : true, result})})
    },
    delete : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        coursModel.delete(req.params.id, result =>{res.json({success : true, result})})
    }
}