![Logo]

# Markdown Link Validator

> A lib that reads a markdown file and looks for hyperlinks in it, returning a list of them and their respective HTTP status.

> [![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url][![Downloads Stats][npm-downloads]][npm-url]

Lib that allows to read and analyze files in markdown format, and then check whether or not there are links. Return a list containing each link found and validate the HTTP status of them.

## Install

Before installing, <a href="https://nodejs.org/en/download/">download and install Node.js</a>. Node.js 6.0.0 or higher is required.

If this is a brand new project, make sure to create a package.json first with the command:

```sh
npm init
```

Installation is done using the npm install command:

```sh
npm install -g link-md
```

## Demo

For instance, if you have in your markdown file like this:

```markdown
## Title example

<p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, velit reiciendis? Repellendus corrupti perspiciatis libero, fuga officia mollitia cupiditate in quia ipsa accusantium dicta quo perferendis doloremque, voluptatum enim ipsum?
</p>

[Link to Status 200 Test](https://httpstat.us/200)

[Link to Status 404 Test](https://httpstat.us/404)
```

And run:

```sh
link-md ./"filePath"/"file.md"
```

It will return on you terminal:

```sh
Job done!
Links list: [
  { 'Link to Status 200 Test': 'https://httpstat.us/200' },
  { 'Link to Status 404 Test': 'https://httpstat.us/404' }
]
```

If you add "validate" at the end, like this:

```sh
link-md ./"filePath"/"file.md" validate
```

It will return on you terminal the links followed by its HTTP status:

```sh
Job done!
 Valaidated links [
{ 'Link to Status 200 Test': 'https://httpstat.us/200', status: 200 },
{ 'Link to Status 404 Test': 'https://httpstat.us/404', status: 404 }
]
```

## Configuration for Development

1. Clone the repo
   ```sh
   git clone https://github.com/acn3to/link-md.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Use:

   ```sh
   npm run cli ./files/text1.md
   ```

   To get links list:

   ```sr
   Job done!
   Links list: [
   { 'Link to Status 200 Test': 'https://httpstat.us/200' },
   { 'Link to Status 404 Test': 'https://httpstat.us/404' },
   { 'Link to Status 300 Test': 'https://httpstat.us/300' },
   { 'Link to Status 500 Test': 'https://httpstat.us/500' },
   { 'Link to Status 201 Test': 'https://httpstat.us/201' }
   ]
   ```

   Or:

   ```sh
   npm run cli ./files/text1.md validate
   ```

   To get links already validated:

   ```sh
   Job done!
   Valaidated links [
   { 'Link to Status 200 Test': 'https://httpstat.us/200', status: 200 },
   { 'Link to Status 404 Test': 'https://httpstat.us/404', status: 404 },
   { 'Link to Status 300 Test': 'https://httpstat.us/300', status: 300 },
   { 'Link to Status 500 Test': 'https://httpstat.us/500', status: 500 },
   { 'Link to Status 201 Test': 'https://httpstat.us/201', status: 201 }
   ]
   ```

4. Run unit tests:
   ```sh
   npm test
   ```

## Dependencies and Structure

- Node-fetch (to make the requests)

- Chalk (to color the terminal output)

  Dev:

  - Jest (to unit tests)

```sh
├── files
│   └──text1.md
├── tests
│   ├── files
│   │   ├── text1.md
│   │   └── text2.md
│   └── index.test.js
├── babel.config.json
├── cli.js
├── http-validation.js
├── index.js
├── package.json
├── package-lock.json
├── README.md
```

## Meta

[Arnaldo Neto](https://github.com/acn3to)

Distributed under the 'ISC' license. See `LICENSE` for more information.

## Contributing

1. _fork_ the project (<https://github.com/acn3to/link-md>)
2. Create a _branch_ for your changes (`git checkout -b feature/fooBar`)
3. Do the _commit_ (`git commit -am 'Add some fooBar'`)
4. _Push_ (`git push origin feature/fooBar`)
5. Create a new _Pull Request_

[npm-image]: https://img.shields.io/npm/v/link-md-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/link-md-metrics
[npm-downloads]: https://img.shields.io/npm/dm/link-md-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-link-md-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-link-md-metrics
[logo]: files/logo.png
