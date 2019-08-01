import app from './app';

const port = process.env.APP_PORT || 6666;

app.listen(port, () => {
  console.info(`Server running on port ${port}`);
});
