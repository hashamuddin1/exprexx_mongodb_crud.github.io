const express = require("express");
const router = new express.Router();
const Collection_class_detail = require("../models/schema");
const { allstd, delstd, updstd, spestd, addstudent, sortstd } = require("../controllers/student_controller")

//create student
router.post("/class", addstudent)

//GET STUDENTS
router.get("/class", allstd)

//GET STUDENTS IN ASCENDING ORDER FROM RANKING
router.get("/classsort", sortstd)

//GET STUDENTS OF A PARTICULAR PERSON
router.get("/class/:id", spestd)


//Update by ID
router.patch("/class/:id", updstd)

//DELETE
router.delete("/class/:id", delstd)

module.exports = router;