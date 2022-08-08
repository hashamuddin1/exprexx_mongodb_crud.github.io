const Collection_class_detail = require("../models/schema");
const express = require("express");

//View all students
const allstd = async(req, res) => {
    try {
        const getstd = await Collection_class_detail.find({})
        res.status(201).send(getstd) //koi bhi data insert krne k liye
            //status uska 201 hona chahye
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

//create student

const addstudent = async(req, res) => {
    try {
        const addstd = new Collection_class_detail(req.body)
        console.log(addstd);
        let insertstd = await addstd.save();
        res.status(201).send(insertstd) //koi bhi data insert krne k liye
            //status uska 201 hona chahye
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

//Create Users in ascending order according to ranking

const sortstd = async(req, res) => {
    try {
        const getstdr = await Collection_class_detail.find({}).sort({ "ranking": 1 })
        res.status(201).send(getstdr) //koi bhi data insert krne k liye
            //status uska 201 hona chahye
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

//GET STUDENTS OF A PARTICULAR PERSON

const spestd = async(req, res) => {
    try {
        const _id = req.params.id;
        const getstd = await Collection_class_detail.findById({ _id: _id })
            //({_id:_id})phela wala id database say uth karaye gay
            //aur dosra wala ham khud dege
            //params.id aur class/id means k dono ka name same id hona chahye
        res.status(201).send(getstd) //koi bhi data insert krne k liye
            //status uska 201 hona chahye
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

//Update by ID

const updstd = async(req, res) => {
    try {
        const _id = req.params.id;
        const getstdspe = await Collection_class_detail.findByIdAndUpdate(_id, req.body, {
            new: true //new updated value usi waqt mil jae uskay liye kia hay

        })

        res.status(201).send(getstdspe)
    } catch (e) {
        console.log(e)
        res.status(500).send(e) //server say jo error ata hay uskay liye
            //500 port hogi OR update krtay waqt 500 port hogi
    }
}

//DELETE THROUGH ID

const delstd = async(req, res) => {
    try {
        const getstdspe = await Collection_class_detail.findByIdAndDelete(req.params.id)

        res.send("Delete Successfully")
    } catch (e) {
        console.log(e)
        res.status(500).send(e) //server say jo error ata hay uskay liye
            //500 port hogi OR update krtay waqt 500 port hogi
    }
}

module.exports = { allstd, delstd, updstd, spestd, addstudent, sortstd }

//export { allstd } //aese bhi export krsaktay hay