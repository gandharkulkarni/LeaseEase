import { Router } from "express";
import ListingController from "./listing.controller";


const router = Router();

router.post("/addListing", ListingController.addListing);

export default router;