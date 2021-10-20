import express from "express";
import CalculateHandler from "../api/v2/calculate/CalculateHandler";
function calculateHandlerV2(params: any) {
    return new CalculateHandler().handle(params)
}

const RouterV1 = express.Router();
RouterV1.get( "/calc", ( req, res ) => {
    const result = calculateHandlerV2(req.query);
    // render the index template
    res.json({result});
} );

export = RouterV1;
