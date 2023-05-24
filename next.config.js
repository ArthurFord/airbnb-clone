module.exports = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
            port: '',
            pathname: '/wikipedia/commons/thumb/6/69/**',
          },
          {
            protocol: 'https',
            hostname: 'a0.muscache.com',
            port: '',
            pathname: '/im/pictures/**',
          },
          {
            protocol: 'https',
            hostname: 'i.dummyjson.com',
            port: '',
            pathname: '/data/**',
          },
          {
            protocol: 'https',
            hostname: 'robohash.org',
            port: '',
            pathname: '**',
          },
        ],
      },
};