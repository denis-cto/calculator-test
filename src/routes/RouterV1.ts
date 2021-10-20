import express from "express";
import CalculateHandler from "../api/v1/calculate/CalculateHandler";
function calculateHandlerV1(params: any) {
    return new CalculateHandler().handle(params)
}

const RouterV1 = express.Router();
RouterV1.get( "/calc", ( req, res ) => {
    const result = calculateHandlerV1(req.query);
    // render the index template
    res.json({result});
} );

export = RouterV1;
