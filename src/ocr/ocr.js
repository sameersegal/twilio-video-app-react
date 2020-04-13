var request = require('request');
var options = {
  method: 'POST',
  headers: {
    Authorization: [
      'Bearer ' +
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkEwRWVYbXAxNl9YSnRGUW85WGZjVFNHV3BkTSIsImtpZCI6IkEwRWVYbXAxNl9YSnRGUW85WGZjVFNHV3BkTSJ9.eyJpc3MiOiJodHRwOi8vc3RhZ2luZy56ZXN0bW9uZXkuaW4iLCJhdWQiOiJodHRwOi8vc3RhZ2luZy56ZXN0bW9uZXkuaW4vcmVzb3VyY2VzIiwiZXhwIjoxNTg2NzY5NTkwLCJuYmYiOjE1ODY3NjU5OTAsImNsaWVudF9pZCI6Ijg0ODAyZTNmLTdmZGUtNGVlYS05MTRlLWI5ZTcwYmRmYzI2ZiIsInNjb3BlIjoiaW50ZXJuYWxfc2VydmljZXMifQ.uY2icBopM9gpt5NZ2yNv6CZZ9WYpJusIaTl_0tOdKKcElPZXMSi1cNypJrKJh401REJ9oit8DDOI-GDKqDdIJ0BP-hRZNhLUTuv3eUL8PtNetma5AfywJyoT4tErZPSYPf9ubfMhOsGUR8GXReeZ-0E6zoOsj0KPBwYFnRABIJte7gi5N8ykzyZ58YACTsw2RjGA6wDQXoiIFri4yGfSHjMhe4qaBMTWKUc8L684QkcsCpEbatLgRi4WxVsEvaLzkY6s-JnfuneVb1uo2LhzOTNOaOJw0Vp6k9ZMNJRyHeg1peXjQl_MIcXMjCkoiYbEBOdOA89fX0rBm0jfMBRL7Q',
    ],
  },
};
export default async function requestOcr(formData) {
  options.body = formData;
  let response = await fetch('http://staging-app.zestmoney.in/zest-ai/api/ocr', options);
  var resp = await response.json();
  var panData = resp.data.tags;
  return (
    'PAN no: ' +
    panData.pan_number.value +
    ' Name : ' +
    panData.name.value +
    ' Fathers Name: ' +
    panData.fathers_name.value +
    ' DOB: ' +
    panData.dob.value
  );
}
