const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
const port = 9991

app.get('/', (req, res) => {
  const dirPath = path.join(process.cwd(), 'tailwind-lib')
  const fileNames = fs.readdirSync(dirPath)

  const data = fileNames.filter(fileName => {
    return !!fileName.match(/\.html$/g);
  }).map(fileName => {
    return fs.readFileSync(path.join(dirPath, fileName)).toString()
  })

  res.send(data)
})

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
