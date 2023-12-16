import express from "express"
import CoronaModel from "../models/SurveyTable.js";
import { v4 as uuidv4 } from 'uuid';
import { postCoronoSurvey } from "../controller/surveyController.js";
let router = express.Router()

router.get("/", (req, res) => {
    res.status(200).send("Survey route reached")
})

router.post("/form", postCoronoSurvey )


export default router 