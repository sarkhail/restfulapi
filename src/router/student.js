const express = require("express");
const router = new express.Router();
const Student = require("../models/students");
/*router.get("/", (req,res) => {
    res.send("Hellow from the Main Page")
})*/

/*router.post("/students", (req,res) => {
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }). catch((e)=>{
        res.status(400).send(e);
    })
})*/

router.post("/students", async(req,res) => {
   try{
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
      }catch(e){
    res.status(400).send(e);
               }
   
})

router.get("/students", async(req,res) => {
   try{
    const studentsData = await Student.find()
    res.send(studentsData);
      }catch(e) {
        res.send(e);
      }
    });

    router.get("/students/:id", async(req,res) => {
        try{
         const studentData = await Student.findById(req.params.id);
         if(!studentData){
            res.status(500).send();
         }else{
          res.send(studentData);
         }
           }catch(e) {
             res.send(e);
           }
         })
    
    router.patch("/students/:id", async(req,res) => {
          try{
           const _id = req.params.id;
           const studentUpdate = await Student.findByIdAndUpdate(_id, req.body, { new: true});
           if(!studentUpdate){
              res.status(500).send();
           }else{
            res.send(studentUpdate)}
             }catch(e) {
               res.send(e)
             }
           })

    router.delete("/students/:id", async(req,res) => {
            try{
             const studentDelete = await Student.findByIdAndDelete(req.params.id);
             res.send(studentDelete);
              }catch(e) {
                 res.send(e)
               }
             })
  module.exports = router;