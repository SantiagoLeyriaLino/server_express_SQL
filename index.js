const server = require('./src/app.js');
const { conn } = require('./src/db/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  const port = process.env.port || 3001;
  server.listen(port, () => {
    console.log('%s listening at', port); // eslint-disable-line no-console
  });
}).catch((error)=>console.log(error.message));