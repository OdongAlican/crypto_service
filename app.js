const express = require( "express" );
const bodyParser = require( "body-parser" );
const rp = require('request-promise');
const cors = require('cors');

const app = express();
app.use(cors());

// app.use( bodyParser.urlencoded( { "extended": true } ) );
// app.use( bodyParser.json() );

app.use('/coin',(req, res) => {
  rp( {
    method: 'GET',
    uri: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${req.query.coin}`,
    headers: {'X-CMC_PRO_API_KEY': 'a49208f7-5bcd-4701-b921-61d3b98c7872'},
    json: true,
    gzip: true
  }).then(response => res.json(response)).catch((err) => res.json(err.message));
})

const PORT = process.env.PORT || 3000;

app.listen( PORT, () => {
    console.log( `App running on port ${PORT}` );
});
