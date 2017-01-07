```javascript
const def = require('nobrac')

let util = {}
def (util).roll = () => Math.random()
util.roll // 0.6585894937683738
util.roll // 0.7191551475584681
```
