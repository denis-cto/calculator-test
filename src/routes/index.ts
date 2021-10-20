import * as express from "express";

export const register = ( app: express.Application ) => {
    const oidc = app.locals.oidc;

    app.get( "/", ( req: any, res ) => {
        res.render( "index" );
    } );

};
