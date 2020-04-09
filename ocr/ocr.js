var http = require('follow-redirects').http;
var fs = require('fs');

var access_token = fs.readFileSync('access_token');

var request = require('request');
var fs = require('fs');
var options = {
  'method': 'POST',
  'url': 'http://staging-app.zestmoney.in/zest-ai/api/ocr',
  'headers': {
    'Authorization': ['Bearer ' + access_token]
  },
  formData: {
    'pan': {
      'value': fs.createReadStream('0ed57798-38a3-4049-952b-b23cdf271ae0_poi.jpg'),
      'options': {
        'filename': '0ed57798-38a3-4049-952b-b23cdf271ae0_poi.jpg',
        'contentType': null
      }
    }
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
