import path from 'path';

const nextConfig = {
  webpack: (config, { isServer }) => {
    output: "export", // Agrega esta línea para habilitar la exportación estática
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            publicPath: `/_next/static/files/`,
            outputPath: `${isServer ? '../' : ''}static/files/`,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
