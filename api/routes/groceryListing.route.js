import express from 'express';
import {
    creategroceryListing,
    getgroceryListing,
    updategroceryListing,
    deletegroceryListing,
    getgroceryListings,
} from '../controllers/groceryListing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();


router.post('/create', verifyToken, creategroceryListing);
router.delete('/delete/:id', verifyToken, deletegroceryListing);
router.post('/update/:id', verifyToken, updategroceryListing);
router.get('/get/:id', getgroceryListing);
router.get('/get', getgroceryListings);

export default router;
