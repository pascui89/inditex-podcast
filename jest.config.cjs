module.exports = {
  moduleDirectories: ['./node_modules', 'src'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'jest-esbuild',
  },
  testEnvironment: 'jsdom',
};
