const fs = require("fs-extra");
const G = require('git-rev-sync')
function arrange(cb) {
  fs.readdir("./answer", function (err, files) {
    if (err) throw err;
    files.forEach((i) => {
      return fs.copy(`./leetcode-temp/test-${process.argv[3].split('--')[1]}`, `./answer/${i}/test-${process.argv[3].split('--')[1]}`);
    });
    cb()
  });
}
function git(cb) {
    // console.log(G.branch());
    // console.log(G.count());
    // console.log(G.date());
    // console.log(G.hasUnstagedChanges());
    // console.log(G.isDirty());
    // console.log(G.isTagDirty());
    console.log(G.log());
    // console.log(G.long());
    // console.log(G.message());
    // console.log(G.remoteUrl());
    // console.log(G.short());
    // console.log(G.tag());
    // console.log(G.tagFirstParent());
  cb()
}

exports.arrange = arrange;
exports.git = git;

// (async () => {
//     const paths = await globby(['*', '!cake']);

//     console.log(paths);
//     //=> ['unicorn', 'rainbow']
// })();
