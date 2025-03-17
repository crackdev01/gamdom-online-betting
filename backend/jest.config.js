module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '^services/(.*)$': '<rootDir>/src/services/$1',
    '^services$': '<rootDir>/src/services',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^utils$': '<rootDir>/src/utils',
    '^types/(.*)$': '<rootDir>/src/types/$1',
    '^types$': '<rootDir>/src/types',
    '^controllers/(.*)$': '<rootDir>/src/controllers/$1',
    '^controllers$': '<rootDir>/src/controllers',
    '^routes/(.*)$': '<rootDir>/src/routes/$1',
    '^routes$': '<rootDir>/src/routes'
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
};
