const express = require("express");
const ticketRouter = express.Router();
<<<<<<< HEAD
const { ticketRecords, createTicket ,specificTicket, lastComplaintId,ticketStatus} = require("../controllers/ticket.controller.js")
=======
const { ticketRecords, createTicket ,specificTicket, lastComplaintId , ticketStatus} = require("../controllers/ticket.controller.js")
>>>>>>> b58fea8cbc27f04510e894b568772afa2a0fc906


ticketRouter.get("/get", ticketRecords);
ticketRouter.post("/specific",specificTicket);
ticketRouter.post("/create", createTicket);
ticketRouter.get("/last", lastComplaintId);
ticketRouter.put("/status", ticketStatus);


module.exports = ticketRouter;
