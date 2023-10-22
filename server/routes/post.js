const postRoute = require("express").Router();
const PostController = require("../controllers/PostController");

postRoute.get("/", PostController.getPosts);
postRoute.post("/addpost", PostController.addPost);
postRoute.put("/editpost/:id", PostController.editPost);
postRoute.delete("/deletepost/:id", PostController.delPost);
postRoute.get("/detail/:id", PostController.getOnePost);
postRoute.get("/user/:id", PostController.getPostByUser);

module.exports = postRoute;
