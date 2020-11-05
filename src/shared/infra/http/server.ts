import server from './app';

server.listen(process.env.SERVER_PORT, () => {
  console.log('Server is running');
});
