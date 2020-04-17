import getAccessToken from './credentials';

var options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};
export default async function docUpolad(imageBase64) {
  let accessToken = await getAccessToken();
  options.headers['Authorization'] = `Bearer ${accessToken}`;
  options.body = {
    documentCategory: 'DoorstepProofOfId',
    fileExtension: 'png',
    documentContent: imageBase64,
    documentLabel: 'PanCard',
    isAdditionalDocument: false,
    merchantIdSource: null,
    applicationContext: null,
    isClicked: false,
    documentPage: 'selfie',
    documentRelationId: '00000000-0000-0000-0000-000000000000',
  };
  let response = await fetch(
    'http://staging-app.zestmoney.in/documents/api/v2/customers/63962e41-dbe7-4c75-9577-a0ce4212954c/document',
    options
  );
  return response.status;
}
