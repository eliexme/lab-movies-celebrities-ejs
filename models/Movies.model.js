
const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const movieSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  genre:{
    type: String
  },
  plot:{
    type: String
  },
  cast: [{
    type: Schema.Types.ObjectId,
    ref: 'Celeb'
  }]
},
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Movie = model("Movie", movieSchema);
module.exports = Movie;