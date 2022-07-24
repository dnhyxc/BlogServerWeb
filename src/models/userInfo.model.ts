import mongoose from "mongoose";

const userInfoSchema = new mongoose.Schema({
  userId: String,
  likeCommentId: String,
  isLike: Boolean,
  likeComments: {
    userId: String,
    commentIds: [],
  },
});

const UserInfo = mongoose.model("userInfo", userInfoSchema);

export default UserInfo;
