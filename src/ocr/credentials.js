var options = {
  method: 'POST',
  hostname: 'staging-auth.zestmoney.in',
  path: '/connect/token?vid=null',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body:
    'client_id=84802e3f-7fde-4eea-914e-b9e70bdfc26f&grant_type=client_credentials&scope=internal_services&client_secret=PoToY%25DwGY7Bh%7BU%5Bt6%5DM',
};

export default async function getAccessToken() {
  let resp = await fetch('https://staging-auth.zestmoney.in/connect/token/', options);
  let respJson = await resp.json();
  return respJson.access_token;
}
