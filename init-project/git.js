let cmd = require('node-cmd')

let createBranch = (branchName) => {
    cmd.get(`git branch ${branchName}`);
};

let createDevBranch = () => {
    createBranch('develop');
}

let createChapterBranches = (start, end) => {
    for (let i = start; i <= end; i++) {
        createBranch(`feature/chapter${i}`);
    }
};

let initGitBranches = () => {
    createDevBranch();
    createChapterBranches(3, 18);
};

let main = () => {
    initGitBranches();
}

if (require.main === module) {
    main();
}
