const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const Item = require('../models/Item');
const User

module.exports = Router()

// TO DO - implement items CRUD
  .get('/', authenticate, async (req, res, next) => {
    try{
      const user_id = req.user.id;
      console.log('users id', user_id);
      const items = await Item.getAll(user_id);
      res.json(items);
    } catch(err){
      next(err);
    }
  });
