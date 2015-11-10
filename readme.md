# sublime-build-js

Sublime text builder for *.js files.

- Support ES6 syntax
- Support ES6 modules
- Seamless integration of unit tests

## Installation

- Install globally via npm : `npm i sublime-build-js`
- Make npm create the .cmd file : `cd node_modules/sublime-build-js & npm link`
- Locate the cmd file : windows `where sublime-build-js`, linux `which sublime-build-js`
- Create a file named `buildjs.sublime-build` with the following content

```json
{
	"cmd": ["sublime-build-js.cmd", "$file"],
	"selector": "source.js"
}
```

- Replace `system-build-js.cmd` by the location of the cmd file.
- Move the file `buildjs.sublime-build` in Sublime Text User Packages folder : `C:/Users/Damien/AppData/Roaming/Sublime Text 3/Packages/User` (you can also click Sublime Text `Tools>Build System>New Build System...`)

Now you can hit ctrl+B from any *.js file and get the result in the console.