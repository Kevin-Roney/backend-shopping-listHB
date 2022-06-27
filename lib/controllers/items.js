const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const Item = require('../models/Item');
const authorizeItem = require('../middleware/authorizeItem')

module.exports = Router()

// TO DO - implement items CRUD
  .get('/', authenticate, async (req, res, next) => {
    try{
      const user_id = req.user.id;
      const items = await Item.getAll(user_id);
      res.json(items);
    } catch(err){
      next(err);
    }
  })
  .post('/', authenticate, async (req, res, next) => {
    try{
      const user_id = req.user.id;
      const item = await Item.insert({ ...req.body, user_id });
      res.json(item);
    } catch(err){
      next(err);
    }
  })
  .put('/:id', authenticate, authorizeItem, async (req, res, next) => {
    try{
      const item = await Item.updateById(req.params.id, req.body);
      res.json(item);
    } catch(err){
      next(err);
    }
  });
