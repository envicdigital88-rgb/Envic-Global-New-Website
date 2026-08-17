const https = require('https');

https.get('https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode', (res) => {
  console.log('Status:', res.statusCode);
  res.on('data', (d) => process.stdout.write('data received... '));
}).on('error', (e) => {
  console.error(e);
});
