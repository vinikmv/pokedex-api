import server from './app';

server.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${8080}`);
});
