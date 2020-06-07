const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
const port = 9991

const dirPath = path.join(process.cwd(), 'tailwind-lib')
const metadata = require(dirPath);

metadata.components = metadata.components.map(({ name, path: filePath }) => {
  return {
    name,
    content: fs.readFileSync(path.join(dirPath, filePath)).toString(),
  }
})

app.get('/', (req, res) => {
  res.send(metadata)
})

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
