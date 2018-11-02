const home = require('./views/home')
const users = require('./views/users')

const router = (request, response) => {
  const url = request.url
  const method = request.method

  if ('/' === url) {
    response.write(home)
    return response.end()
  }

  if ('/users' === url) {
    response.write(users)
    return response.end()
  }

  if ('/create-user' === url && 'POST' === method) {
    const body = []

    request.on('data', (chunk) => body.push(chunk))

    request.on('end', () => {
      const username = Buffer.concat(body).toString().split('=')[1]
      console.log(username)
    })

    response.statusCode = 302
    response.setHeader('Location', '/')

    return response.end();
  }
}

module.exports = router