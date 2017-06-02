const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  response.sendFile('index.html');
});

app.listen(app.get('port'), () => {
  console.log(`Spotify app running on port ${app.get('port')}`);
});