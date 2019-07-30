const app = require('./app');

app.listen(process.env.APP_PORT, () => {
  console.info(`Server running on port ${process.env.APP_PORT}`);
});
