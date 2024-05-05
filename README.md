# Tagged

> Minimal Javascript UI Library

This is an experimental composable ui library that takes ideas from Elm Architecture, but without the doctrine - this is Javascript!

## Features
- No Virtual Dom
- No Build System
- No Over Engineering
- ~100 lines of code
- Totally inefficient rendering (at scale)

## Overview

the `app` builder takes an `opts` object that expects it to include:

- `data` as initial data `{object}`
- `methods` as `{object}` with functions definitions
- `view` as `{function}` that returns valid dom

and a querySelector compatible `selector` to mount the ui.

`app` returns:

-  a object that returns a `state` object that you can use to update in other components
- `methods` you can call outside the app component

### Example

```html
    <script type="module">
        import {app, h} from "./tagged.js";

        const myapp = app({
            data: {name: "[Your Name Here]", job: "Developer"},
            view(state, methods) {
                return h("main", [
                    h("strong", `Greeting from ${state.name}`),
                    h("div", `Your local ${state.job}`),
                    h("div", {id: "test"}, [
                        h("h1", "Hello Tagged"),
                        h("p", 21),
                        h("hr")
                    ])
                ]);
            }
        }, "#main");
    </script>

    <main id="app"></main>
```

### Inspired By

- hyperapp
- mithril
- Elm Architecture

## Todo

- Methods
- Update API: state, actions

> WORK-IN-PROGRESS