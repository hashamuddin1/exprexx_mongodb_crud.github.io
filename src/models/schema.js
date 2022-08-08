const express = require("express");
const mongoose = require("mongoose");


//creating schema
const class_schema = new mongoose.Schema({
    student_name: {
        type: String,
        allowNull: false,
        trim: true
    },
    age: {
        type: Number,
        allowNull: false,
        trim: true
    },
    DOB: {
        type: Date,
        allowNull: false,
        trim: true
    },
    marks: {
        type: Number,
        allowNull: false,
        trim: true
    },
    ranking: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    schoolname: {
        type: String,
        trim: true,
        default: "Usman Public School"
    }

})

//creating collection
const Collection_class_detail = new mongoose.model('Collection_class_detail', class_schema)

//export collection
module.exports = Collection_class_detail;