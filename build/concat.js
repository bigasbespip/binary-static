module.exports = {
    all: {
        options: {
            separator: ';',
        },
        files: [
            {
                dest: global.dist + '/js/binary.js',
                src: [
                    'src/javascript/lib/jquery.js',
                    'src/javascript/lib/highstock/highstock.js',
                    'src/javascript/lib/highstock/highstock-exporting.js',
                    'src/javascript/lib/moment/moment.js',
                    'src/javascript/lib/**/*.js',
                    'src/javascript/autogenerated/idd_codes.js',
                    'src/javascript/autogenerated/texts.js',
                    'src/javascript/autogenerated/*.js',
                    'src/javascript/config.js',
                    'src/javascript/binary/base/*.js',
                    'src/javascript/binary/**/*.js',
                    'src/javascript/binary_japan/**/*.js',
                    '!src/javascript/binary/**/__tests__/*.js'
                ]
            }
        ]
    }
};
