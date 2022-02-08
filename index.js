
const express = require("express");
const app = express();
const BodyParser = require("body-parser");
const TokenProcessor = require("./src/MiddleWares/TokenAuth");
const Data = require("./src/Routes/Dataprocess");
app.use(express.urlencoded( { extended:true } ) );
//app.use(cookieparser());
app.use(BodyParser.json());

app.get("/", (req, res, next) => {
  //return res.send('<meta name="zalo-platform-site-verification" content="SeEEB8ES51jdZCu-hOfK5MQ3rGwAyW9ICpW" />');

  return res.send('This is Home');
});

app.get("/RegisterToken",TokenProcessor.GetToken());

app.get("/GetTokenData",TokenProcessor.accessTokenValidator,Data.GetTokenData)