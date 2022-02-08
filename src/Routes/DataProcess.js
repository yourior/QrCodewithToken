exports.GetTokenData = async (req, res) => {
    if(req.body.qrdata != null)
    {
        //THIS IS WHERE QR DATA WILL BE PROCESSED, UP TO USER
        var result = req.body.qrdata;
        res.send(result);
    }else{
        console.warn("qrdata is empty");
        res.send("qrdata cariable must be filled");
    }
}