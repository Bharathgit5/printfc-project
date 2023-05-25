const sdk = require("node-appwrite");
module.exports = async function (req, res) {
  const client = new sdk.Client();
  if (
      !req.variables['INSTA_API_KEY'] ||
      !req.variables['INSTA_AUTH_KEY'] ||
      !req.variables['INSTA_REDIRECT_URI'] ||
      !req.variables['APPWRITE_FUNCTION_ENDPOINT'] ||
      !req.variables['APPWRITE_FUNCTION_API_KEY']
  ) {
      console.warn("Environment variables are not set. Function cannot use Appwrite SDK.");
  } else {
      client
          .setEndpoint(req.variables['APPWRITE_FUNCTION_ENDPOINT'])
          .setProject(req.variables['APPWRITE_FUNCTION_PROJECT_ID'])
          .setKey(req.variables['APPWRITE_FUNCTION_API_KEY'])
          .setSelfSigned(true);
  }

  const API_KEY      = req.variables['INSTA_API_KEY'] ?? '';
  const AUTH_KEY     = req.variables['INSTA_AUTH_KEY'] ?? '';
  const REDIRECT_URL = req.variables['INSTA_REDIRECT_URI'] ?? '';

  try {
      const form = JSON.parse(req.variables.APPWRITE_FUNCTION_DATA ?? '{}');
      
      let name   = form.name ?? '';
      let email  = form.email ?? '';
      let amount = form.amount ?? '';

      let data = new Insta.PaymentData();

      data.setRedirectUrl(REDIRECT_URL);
      data.send_email = "True";
      data.purpose    = "printfc";
      data.amount     = amount;
      data.name       = name;
      data.email      = email;

      Insta.createPayment(data, function (error, response) {
          if (error) {
              res.json({success: false, message: error});
          } else {
             // TODO: Here you can add any Appwrite logic code if needed. 
             res.json({success: true, message: 'please check email'});
             
          }
      });

  } catch (e) {
      res.json({success: false, message: e});
  }
};
