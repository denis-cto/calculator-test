import express from "express";
import CalculateHandler from "../api/v2/calculate/CalculateHandler";
function calculateHandlerV2(params: any) {
    return new CalculateHandler().handle(params)
}

const RouterV2 = express.Router();
RouterV2.get( "/calc", ( req, res ) => {
    const result = calculateHandlerV2(req.query);
    // render the index template
    res.json({result});
} );

export = RouterV2;
