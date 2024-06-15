// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'marcespana',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000', // Cambia el puerto si es necesario
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
