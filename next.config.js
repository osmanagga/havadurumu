module.exports = {
  async rewrites() {
    return [
      {
        source: '/:city',
        destination: '/[city]',
      },
    ];
  },
};

