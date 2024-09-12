module.exports = {
    setupFilesAfterEnv: ['./jest.setup.js'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
    },
    testMatch: ['**/tests/jest/**/*.test.js'],
};  