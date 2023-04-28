const mongoose = require("mongoose")
const earthSchema = mongoose.Schema({
continents: {type: String,
    required: [true, 'continents of the earth cannot be empty'],
        minlength:3},
continentnum: {
    type: Number,
    min:0,
    max:7
},
country: String
})
module.exports = mongoose.model("earth",
earthSchema)
