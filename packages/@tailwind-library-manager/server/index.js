const express = require('express')
const path = require('path')
const fs = require('fs')
const request = require('request')

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

app.get('/styles.css', (req, res) => {
  const customFilePath = path.join(process.cwd(), 'public', 'tailwind.css');
  fs.existsSync(customFilePath)
    ? res.sendFile(customFilePath)
    : request('https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css').pipe(res);
})

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
