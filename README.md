# COVID19 API Wrapper (Node.js)

API wrapper for [COVID19 API](https://covid19api.com/).

*Data is sourced from Johns Hopkins University.*

## Quick start

```bash
npm i -s jhu-covid19-api
```

```js
// Initialize COVID19 API.
const covid = require('jhu-covid19-api');

(async () => {

    // Retrieve summary.
    const summary = await covid.summary();

    console.log('Summary:', summary);

})();
```

### Documentation

Generate docs:

```bash
npm run docs
```

Start HTTP server serving docs:

```bash
npm run http-docs
```

---

#### To do list:

- [x] API documentation
- [ ] Routes extension
