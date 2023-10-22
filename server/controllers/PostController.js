const { posts, users } = require("../models");

class PostController {
  static async getPosts(req, res) {
    try {
      let result = await posts.findAll();
      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Error " + error);
    }
  }

  static async getPosted(req, res) {
    try {
      let result = await posts.findAll({ where: { status: 1 } });
      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Error " + error);
    }
  }

  static async addPost(req, res) {
    try {
      const { title, content, userId, status } = req.body;
      let result = await posts.create({
        title,
        content,
        userId,
        status,
      });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json("Error " + error);
    }
  }

  static async editPost(req, res) {
    try {
      const { title, content, userId, status } = req.body;
      let id = +req.params.id;
      let result = await posts.update(
        { title, content, userId, status },
        { where: { id: id } }
      );
      result[0] === 1
        ? res.status(200).json({
            message: `Post id: ${id} has been updated.`,
          })
        : res.status(400).json({
            message: `Post id: ${id} has not been updated.`,
          });
    } catch (error) {
      res.status(500).json("Error " + error);
    }
  }

  static async delPost(req, res) {
    try {
      let id = +req.params.id;
      let result = await posts.destroy({
        where: { id: id },
      });
      result === 1
        ? res.status(200).json({
            message: `Post id: ${id} has been deleted.`,
          })
        : res.status(400).json({
            message: `Post id: ${id} has not been deleted.`,
          });
    } catch (error) {
      res.status(500).json("Error " + error);
    }
  }

  static async getOnePost(req, res) {
    try {
      let id = +req.params.id;

      const result = await posts.findByPk(id, { include: [{ model: users }] });

      result
        ? res.status(200).json(result)
        : res.status(404).json({
            message: `Post id: ${id} not found`,
          });
    } catch (error) {
      res.status(500).json("Error " + error);
    }
  }

  static async getPostByUser(req, res) {
    try {
      let id = +req.params.id;
      let result = await posts.findAll({ where: { userId: id } });
      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Error " + error);
    }
  }
}

module.exports = PostController;
