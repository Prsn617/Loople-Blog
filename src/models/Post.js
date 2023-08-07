import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    pTitle: {
      type: String,
      required: true,
    },
    pDescs: {
      type: String,
    },
    img: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
    },
    isFeatured: {
      type: Boolean,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);
// export default mongoose.model("Post", postSchema);
