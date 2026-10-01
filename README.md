# kewcoder.github.io

Personal portfolio of **Kew Coder**: UI/UX designer, web developer and mobile developer.

Live at https://kewcoder.github.io

## Stack

Plain HTML, CSS and JavaScript, with no build step and no dependencies.

```
index.html          # the single page
assets/css/style.css
assets/js/main.js   # theme toggle, rotating headline, scroll reveal
assets/img/         # photo, projects, client logos, service illustrations
```

## Run locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

Light and dark themes follow the visitor's OS setting, and the toggle in the nav overrides it.
