module.exports = {
    all: {
        options: {
            files: ['package.json'],
            updateConfigs: [],
            commit: true,
            commitMessage: 'Release v%VERSION%',
            commitFiles: ['package.json', 'config.json'],
            createTag: false,
            push: false
        }
    }
};