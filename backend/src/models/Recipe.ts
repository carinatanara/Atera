import mongoose, { Schema, Document } from "mongoose";

export interface IRecipe extends Document {
    title: string;
    cuisine: string;
    prepTime: number;
    cookTime: number;
    difficulty: string;
    ingredients: string[];
    instructions: string[];
    videoUrl?: string;
    thumbnailUrl?: string;
    createdAt: Date;
    updatedAt: Date;
}

const RecipeSchema = new Schema({
  title: { 
    type: String, 
    required: true 
  },
  cuisine: { 
    type: String, 
    required: true 
  },
  prepTime: { 
    type: Number, 
    required: true 
  },
  cookTime: { 
    type: Number, 
    required: true 
  },
  difficulty: { 
    type: String, 
    required: true,
    enum: ['Easy', 'Medium', 'Hard']
  },
  ingredients: [{ 
    type: String, 
    required: true 
  }],
  instructions: [{ 
    type: String, 
    required: true 
  }],
  videoUrl: { 
    type: String 
  },
  thumbnailUrl: { 
    type: String 
  }
}, { 
  timestamps: true 
});

export default mongoose.model<IRecipe>('Recipe', RecipeSchema);
