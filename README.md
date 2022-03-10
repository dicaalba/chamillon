# chamillon

# Setting config options for the init command

`npm set init.author.email "example-user@example.com"`

```js
npm set init.author.name "example_user"
```

`npm set init.license "MIT"`

# Publish your package to npm:

For private packages and unscoped packages, use
`npm publish`

For scoped public packages, use
`npm publish --access public`

# On the command line, create a new test directory outside of your project directory.

`mkdir test-directory`

# Switch to the new directory:

`cd /path/to/test-directory`

# In the test directory, install your module:

`npm install chamillon`

# In the test directory, create a test.js file which requires your module and calls your module as a method.

On the command line, run `node test.js`. The message sent to the console.log should appear.

# Para github

Actualizar en el package.json `"name": "chamillon",` a `"name": "@dicaalba/chamillon",`

Agregar en `.npmrc` la linea `//npm.pkg.github.com/:_authToken=TOKEN_DE_GITHUB`

Adicional, loguearse en la terminal:

`npm login --scope=@dicaalba --registry=https://npm.pkg.github.com`

`Username: USERNAME`

`Password: TOKEN`

`Email: PUBLIC-EMAIL-ADDRESS`

# Publicar el paquete

`npm publish`
