var compiler;
try {
    compiler = require('coffee-script');
} catch(e) {
    process.stderr.write(e.message);
    return;
}

var args = process.argv,
    result;

try {
    result = compiler.compile(args[2])
} catch(e) {
    process.stderr.write(e.message);
    return;
}

process.stdout.write(result);
