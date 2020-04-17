var request = require('request');

var options = {
  method: 'POST',
  headers: {
    Authorization: [
      'Bearer ' +
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkEwRWVYbXAxNl9YSnRGUW85WGZjVFNHV3BkTSIsImtpZCI6IkEwRWVYbXAxNl9YSnRGUW85WGZjVFNHV3BkTSJ9.eyJpc3MiOiJodHRwOi8vc3RhZ2luZy56ZXN0bW9uZXkuaW4iLCJhdWQiOiJodHRwOi8vc3RhZ2luZy56ZXN0bW9uZXkuaW4vcmVzb3VyY2VzIiwiZXhwIjoxNTg3MDE0OTE2LCJuYmYiOjE1ODcwMTEzMTYsImNsaWVudF9pZCI6Ijg0ODAyZTNmLTdmZGUtNGVlYS05MTRlLWI5ZTcwYmRmYzI2ZiIsInNjb3BlIjoiaW50ZXJuYWxfc2VydmljZXMifQ.aL92uTp9Qz-G-rVsWDxZKAoR5LZJxQ_ywHClrMem2VJABWh6sU55M2FnFZJY8Ud1doCRXWmWLWv1kp5RSNiqPVMGF90x6Dd5NpLRElgo24y0jYP9ZM-bkRcnghd-2P1vTPwFC2-nWU_a5_o2UIb7aj0ebTx9uV5Y-3JfcZ09UHS1GVP3arF2TVBE2MwAln5k3P63dO_RDMKkVEteXF8AzSy-LeFA0Q7DabzvGu-GFCDHsy1_Ak_5vDq0NYXXSAwDeTt6yfy6N5eVPQo-DhljZZd8V4aKrz28rJBzvnGM20c8JMc04EjQ6II_3pH7PwJb3r0AYSFxhJ5Um8wwJLBnqQ',
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
