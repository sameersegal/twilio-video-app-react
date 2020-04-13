var https = require('follow-redirects').https;
var fs = require('fs');

var qs = require('querystring');

var options = {
  method: 'POST',
  hostname: 'staging-auth.zestmoney.in',
  path: '/connect/token?vid=null',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  maxRedirects: 20,
};

var req = https.request(options, function(res) {
  var chunks = [];

  res.on('data', function(chunk) {
    chunks.push(chunk);
  });

  res.on('end', function(chunk) {
    var body = JSON.parse(Buffer.concat(chunks).toString());
    fs.writeFileSync('access_token', body['access_token']);
    console.log(body['access_token']);
  });

  res.on('error', function(error) {
    console.error(error);
  });
});

var postData = qs.stringify({
  client_id: '84802e3f-7fde-4eea-914e-b9e70bdfc26f',
  client_secret: 'PoToY%DwGY7Bh{U[t6]M',
  grant_type: 'client_credentials',
  scope: 'internal_services',
});

req.write(postData);

req.end();
