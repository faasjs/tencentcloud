// eslint-disable-next-line @typescript-eslint/no-var-requires
const cosSdk = require('cos-nodejs-sdk-v5');

export default function cosUploadFile (SecretId: string, SecretKey: string, params: any) {
  const client = new cosSdk({
    SecretId,
    SecretKey,
  });

  return new Promise((resolve, reject) => {
    client.sliceUploadFile(params, function (err: any, data: any) {
      if (err) {
        console.error(err);
        reject(err);
      }
      resolve(data);
    });
  });
}
