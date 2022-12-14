# HTML to JSON

This library is capable to convert HTML string/element to JSON/JS Object.

#### From
```html
    <div class="container">
      <ul>
          <li>Hello <strong>World</strong></li>
      </ul>
    </div>
```

#### To
```json
    {
      "type": "div",
      "attributes": {
        "class": "container"
      },
      "content": [
        {
          "type": "ul",
          "content": [
            {
              "type": "li",
              "content": [
                "Hello ",
                {
                  "type": "strong",
                  "content": [
                    "World"
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
```

## Installation

Install html-to-json-parser with npm/yarn

```bash
  npm install html-to-json-parser // npm
  yarn add html-to-json-parser // yarn
```

## Usage/Examples

#### Import

```javascript
import HTMLParser from 'html-to-json-parser'; // ES6
const HTMLParser = require('html-to-json-parser'); // CommonJS
```

#### Data

```javascript
const element = '<div><ul><li>Hello <strong>World</strong></li></ul></div>'; // HTML string
const element = document.querySelector('div'); // HTML element
```

#### Usage

```javascript
let result = await HTMLParser(element, true); // Default: false - true: return JSON, false: return JS Object
```

## Contributing

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request :D

## Author

**html-to-json-parser** © [Yousuf](https://github.com/yousufkalim)  
Authored and maintained by Yousuf Kalim.

> GitHub [@yousufkalim](https://github.com/yousufkalim) · LinkedIn [@yousufkalim](https://www.linkedin.com/in/yousufkalim/)
## License

[MIT](https://choosealicense.com/licenses/mit/)