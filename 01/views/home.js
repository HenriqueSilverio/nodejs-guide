const home = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>NodeJS Complete Guide</title>
  </head>
  <body>
    <h1>Welcome!</h1>
    <form method="POST" action="/create-user">
      <label for="username">
        Username:
      </label>
      <input 
        id="username" 
        name="username" 
        type="text" 
        value="" 
        placeholder="Ex: John Doe"
      >
      <button type="submit">
        Save
      </button>
    </form>
  </body>
  </html>
`

module.exports = home