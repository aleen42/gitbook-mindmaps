## gitbook-mindmaps

A GitBook plugin for generating mindmaps with markdown

![npm](https://aleen42.github.io/badges/src/npm.svg) ![javascript](https://aleen42.github.io/badges/src/javascript.svg) ![gitbook](https://aleen42.github.io/badges/src/gitbook_1.svg) ![gitbook](https://aleen42.github.io/badges/src/gitbook_2.svg)

![](https://img.shields.io/badge/%20%20JavaScript-%20%20%20%2020,233L-f1e05a.svg) ![](https://img.shields.io/badge/%20%20CSS-%20%20%20%2029L-563d7c.svg) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/aleen42/gitbook-mindmaps/master/LICENSE) [![npm](https://img.shields.io/npm/dt/gitbook-plugin-mind-maps.svg)](https://www.npmjs.com/package/gitbook-plugin-mind-maps)

![mind-maps](./preview.png)

### Installation

Add the following plugins to your `book.json` and run the command `gitbook install`

```json
{
	"plugins": ["mind-maps"]
}
```

### Usage

Generate mind maps with Markdown headings syntax:

````markdown
```mind:height=300,title=a mind map of something,color
# 1
## 1.1
### 1.1.1
## 1.2
# 2
# 3
```
````

- **height** (optional): to specify the map height
- **title** (optional): to specify a title for this map
- **color** (optional): to generate a colorful map

### TODO

- [ ] Use unlimited headings for generating mind maps

### Release History

* ==================== **1.0.0 Initial release** ====================
 	* 1.0.4 bug fix
 	* 1.0.5 fix empty line
 	* 1.0.8 style enhancement

### :fuelpump: How to contribute

Have an idea? Found a bug? See [how to contribute](https://aleen42.github.io/PersonalWiki/contribution.html).

### :scroll: License

[MIT](https://aleen42.github.io/PersonalWiki/MIT.html) © aleen42

