const fs = require('fs')
const path = require('path')
const exec = require('child_process').execSync

const filesToCopyFromSrcRoot = [
  'main.scss',
  'mixins.scss',
  'variables.scss',
  'package.json'
]

filesToCopyFromSrcRoot.forEach(fileName => {
  fs.copyFile(
    path.resolve(__dirname, '..', 'src', fileName),
    path.resolve(__dirname, '..', 'lib-build', fileName),
    err => {
      if (err) throw err
      console.log(`👍 ${fileName} was copied into build`)
    }
  )
})
