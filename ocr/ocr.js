var http = require('follow-redirects').http;
var fs = require('fs');

var access_token = fs.readFileSync('access_token');

var options = {
  'method': 'POST',
  'hostname': 'staging-app.zestmoney.in',
  'path': '/zest-ai/api/ocr',
  'headers': {
    'Authorization': 'Bearer ' + access_token,
    'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
  },
  'maxRedirects': 20
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"pan\"; filename=\"0ed57798-38a3-4049-952b-b23cdf271ae0_poi.jpg\"\r\nContent-Type: \"{Insert_File_Content_Type}\"\r\n\r\n" + fs.readFileSync('0ed57798-38a3-4049-952b-b23cdf271ae0_poi.jpg') + "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";

req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

req.write(postData);

req.end();

