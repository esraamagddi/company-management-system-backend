const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: { type: String },
    
    description: { type: String },
    
    projectStatus: {
      type: String,
      enum: ["untracked", "working", "declined", "done"],
      default: "untracked",
    },

    type: {
      type: String,
      enum: ["villa", "residential", "administrative", "commercial", "other"],
      default: "villa",
    },    
    
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    
    participatingDepartment: {
       type: mongoose.Schema.Types.ObjectId, 
       ref: "Department" 
    },

  },
  {
    timestamps: true,
  }
);


const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
