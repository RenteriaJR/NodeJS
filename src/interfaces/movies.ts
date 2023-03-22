import mongoose, { Schema } from "mongoose";
import { Movie } from "../models/movies";

const MovieSchema: Schema = new Schema({
    title: { 
        type: String, 
        required: true
    },
    year: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: false,
    }},{
        timestamps: false
    }

);

export default mongoose.model<Movie>('movies', MovieSchema)
