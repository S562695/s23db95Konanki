const mongoose = require("mongoose")
const earthSchema = mongoose.Schema({
continents: {type: String,required: [true, 'continents of the earth cannot be empty']},
continentnum: {type: String,required: [true, 'Number of the earth cannot be empty']},
country: String
})
module.exports = mongoose.model("earth",
earthSchema)
