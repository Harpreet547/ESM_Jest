const esModules = ['@harpreet547/esm_jest_library'].join('|');

module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/config/jest.setup.js'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],

    transformIgnorePatterns: [
        `/node_modules/(?!${esModules})`, // Ignore modules that are not ES modules
    ],
}