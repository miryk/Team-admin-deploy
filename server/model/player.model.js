const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: [2, "Name requires 2 characters or more"],
      required: [true, "Name is required"]
    }, 
    preferredPosition: {
      type: String
    },
    status: {
      type: String,
      enum: ["Playing", "Not Playing", "Undecided", "null"]
    }
  }, {
    timestamps: true
  }
)

module.exports.Player = mongoose.model("Player", PlayerSchema)
