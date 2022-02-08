const jwt = require('jsonwebtoken');

function signJwtTokenAsync (data, { secret, expiresIn })  {
    return new Promise((resolve, reject) => {
    //console.log(data);
      const options = {
        expiresIn
      }
      jwt.sign(data, secret, options, (err, token) => {
        if (err) return reject(creatError.InternalServerError())
        resolve(token)
      })
    })
  }
exports.GetToken = async (req, res, next) => {
    try{
      const token = await signJwtTokenAsync(req.body.fill, {
          secret: req.body.secret,
          expiresIn: req.body.exp_Sec //nanti diganti 7d
      });
      res.send(token);
    }catch(err)
    {
      console.error("GetToken : "+err);
      res.send("Failed Get Token");
    }
}
exports.accessTokenValidator= async (req, res, next) => {
    try {
      let token = null;
      
      token = req.headers.authorization;
      console.log(token);
      if(!token) {
        throw creatError.Unauthorized()
      }
        //token = token.split(' ')[1];
      req.payload = await verifyJwtTokenAsync({ token,secret:'test'});
      //console.log(req.payload);
      next();
    } catch (error) {
        console.errror(error);
        res.send("Token is Not Authorized");
    }
  }