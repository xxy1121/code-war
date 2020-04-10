const fs = require("fs-extra");
const git = require('git-rev-sync')
function arrange(cb) {
  fs.readdir("./answer", function (err, files) {
    if (err) throw err;
    files.forEach((i) => {
      return fs.copy(`./leetcode-temp/test-${process.argv[3].split('--')[1]}`, `./answer/${i}/test-${process.argv[3].split('--')[1]}`);
    });
    cb()
  });
}
function gitG(cb) {
    console.log(git.short());
console.log(git.long());
console.log(git.branch());
  cb()
}


exports.arrange = arrange;
exports.gitG = gitG;

// (async () => {
//     const paths = await globby(['*', '!cake']);

//     console.log(paths);
//     //=> ['unicorn', 'rainbow']
// })();
