module.exports = {
  collectCoverageFrom: ['{adapters,src}/*'],
  coveragePathIgnorePatterns: ['node_modules'],
  coverageReporters: ['text', 'html'],
  testPathIgnorePatterns: ['node_modules', 'dist'],
  moduleNameMapper: {
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/__mocks__/fileMock.js',
    '^.+\\.(css|less|sass|scss)$': '<rootDir>/test/__mocks__/styleMock.js'
  },
  globals: {
    NODE_ENV: 'test'
  }
};
