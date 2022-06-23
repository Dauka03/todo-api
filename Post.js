import mongoose from "mongoose"
const Post = new mongoose.Schema({
    content: {type: String, required: true},
    completed: {type: String, required: true},
    important: {type: String, required: true},
    // priority: {type: Number, required: false}
})

export default mongoose.model('Post', Post)
