import express from "express"
import {
    getAllCustomers,
    getSingleCustomer,
    registerCustomer,
    removeCustomer,
    updateCustomer
} from "../controllers/customers.controller.js"

const router = express.Router()

router.get("/", getAllCustomers)

router.get("/:id", getSingleCustomer)

router.post("/register", registerCustomer)

router.put("/update/:id", updateCustomer)

router.delete("/delete/:id", removeCustomer)

export default router
