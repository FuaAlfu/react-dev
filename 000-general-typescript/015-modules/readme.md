---
stack: js - typeScript
pack: all
---

## using modules system in typescript
GoTo tscconfing.json ,then cnange the module from commonjs to "module": "es2015" to target modern browsers, and you will be ready to go.

## add this to html file
once you decided to use modules.
```
<script type="module" src="app.js"></script>
```

## use tsc in terminal to compile all files 
```
tsc
```
---