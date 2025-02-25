import GroceryListing from '../models/groceryListing.model.js';
import { errorHandler } from '../utils/error.js';

export const creategroceryListing = async (req, res, next) => {
    try {
      const grocerylisting = await GroceryListing.create(req.body);
      return res.status(201).json(grocerylisting);
    } catch (error) {
      next(error);
    }
  };
  
  export const deletegroceryListing = async (req, res, next) => {
    const grocerylisting = await GroceryListing.findById(req.params.id);
  
    if (!grocerylisting) {
      return next(errorHandler(404, 'grocery not found!'));
    }
  
    if (req.user.id !== grocerylisting.userRef) {
      return next(errorHandler(401, 'You can only delete your own listings!'));
    }
  
    try {
      await GroceryListing.findByIdAndDelete(req.params.id);
      res.status(200).json('Listing has been deleted!');
    } catch (error) {
      next(error);
    }
  };
  
  export const updategroceryListing = async (req, res, next) => {
    const grocerylisting = await GroceryListing.findById(req.params.id);
    if (!grocerylisting) {
      return next(errorHandler(404, 'Listing not found!'));
    }
    if (req.user.id !== grocerylisting.userRef) {
      return next(errorHandler(401, 'You can only update your own listings!'));
    }
  
    try {
      const updategroceryListing = await GroceryListing.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updategroceryListing);
    } catch (error) {
      next(error);
    }
  };
  
  export const getgroceryListing = async (req, res, next) => {
    try {
      const grocerylisting = await GroceryListing.findById(req.params.id);
      if (!grocerylisting) {
        return next(errorHandler(404, 'grocery not found!'));
      }
      res.status(200).json(grocerylisting);
    } catch (error) {
      next(error);
    }
  };
  
  export const getgroceryListings = async (req, res, next) => {
    try {
      const limit = parseInt(req.query.limit) || 9;
      const startIndex = parseInt(req.query.startIndex) || 0;
      let offer = req.query.offer;
  
      if (offer === undefined || offer === 'false') {
        offer = { $in: [false, true] };
      }
  
      let furnished = req.query.furnished;
  
      if (furnished === undefined || furnished === 'false') {
        furnished = { $in: [false, true] };
      }
  
      let parking = req.query.parking;
  
      if (parking === undefined || parking === 'false') {
        parking = { $in: [false, true] };
      }
  
      let type = req.query.type;
  
      if (type === undefined || type === 'all') {
        type = { $in: ['sale', 'rent'] };
      }
  
      const searchTerm = req.query.searchTerm || '';
  
      const sort = req.query.sort || 'createdAt';
  
      const order = req.query.order || 'desc';
  
      const grocerylisting = await GroceryListing.find({
        name: { $regex: searchTerm, $options: 'i' },
        offer,
        furnished,
        parking,
        type,
      })
        .sort({ [sort]: order })
        .limit(limit)
        .skip(startIndex);
  
      return res.status(200).json(grocerylisting);
    } catch (error) {
      next(error);
    }
  };
 
