const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser: true});

const fruitSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter the name"]
    },
    rating:{
        type:Number,
        min:1,
        max:10
    },
    review: String
});

const Fruit=mongoose.model("Fruit",fruitSchema);
const fruit= new Fruit({
    name:"Peaches",
    rating:4,
    review:"Pretty solid fruit"
});
fruit.save();
const personSchema=mongoose.Schema({
    name: String,
    age: Number
});
const Person=mongoose.model("Person",personSchema);
const person =new Person({
    name:"Badri",
    age:21
});
//person.save();

// const orange= new Fruit({
//     name:"orange",
//     score:4,
//     review:"sour"
// });
// const kiwi= new Fruit({
//     name:"kiwi",
//     rating:3,
//     review:"weird"
// });

// Fruit.insertMany([kiwi,orange],function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfully saved all data");
//     }
// });

Fruit.find(function(err,fruits){
    if(err){
        console.log(err);
    }else{
        mongoose.connection.close();
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        })
    }
});

Fruit.updateOne({_id: "612fd373f44e3b687360480f"},{name:"Peach"},function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully updated");
    }
});