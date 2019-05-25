---
templateKey: hyperterm
title: 'Useful Hyper info'
path: '/useful-hyper-info'
createdDate: '2018-07-05'
updatedDate: '2018-07-05'
excerpt: ''
---

# Useful hyper info

## use Git bash

Windows user? Want to use commands like `ls` and `pwd` in the hyper
terminal?

https://github.com/zeit/hyper/issues/1252

```javascript
// the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
// if left empty, your system's login shell will be used by default
shell: 'C:\\Program Files\\Git\\git-cmd.exe',

// for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
// by default ['--login'] will be used
shellArgs: ['--command=usr/bin/bash.exe', '-l', '-i'],
```