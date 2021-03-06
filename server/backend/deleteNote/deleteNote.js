const express = require( 'express' );
const router = express.Router();
const Delete = require( './deleteNote.js' );

router.get( '/notelist', ( req, res ) =>
{
    // const { title, body } = req.body;

    Note.find()
        .then( notes =>
        {
            res.json( notes );
        } )
        .catch( err =>
        {
            res.send( { err: 'no notes to display' } )
        } );
} );

router.post( '/createnote', ( req, res ) =>
{
    const { title, body } = req.body;
    Note.create( { title, body } )
        .then( note =>
        {
            res.json( note );
        } )
        .catch( err =>
        {
            res.status( 500 ).json( { error: err.message } );
        } );
} );

router.delete( '/:id', ( req, res ) =>
{
    Note.remove()
        .then( deletedNote =>
        {
            res.json( { note: deletedNote, message: 'Your note has been deleted' } );
        } )
        .catch( err =>
        {
            res.status( 500 ).json( { error: err.message } );
        } )
} );


module.exports = router;
