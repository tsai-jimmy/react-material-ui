## Introduction

You can take a look at my github-pages.Click this [github-page](https://tsai-jimmy.github.io/react-material-ui/dist/App.html)

My Blog : http://tsai-jimmy.logdown.com/

Or git clone by follwing steps

## Setup

First step  setup the package.

```
npm install --global gulp
```
Second step build jsx to js.

```
gulp build
```

or To watch file any changes after you save the JSX file.

```
gulp watch
```

Third step Browser live reload.

```
gulp browser
```

And you need to add url "localhost:3000/App.html"



## Usage

Edit ```src/App.jsx``` file and run ```gulp build```, the compiled file is at ```dist/App.js```. Please run ```gulp browser``` to load ```dist/App.html``` for resutls.
