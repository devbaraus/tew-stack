# TEW Stack

This stack combines TailwindCSS 2.0, Eleventy and Workbox to make static site.

## Tech

- TailwindCSS: Easy to use utility-first CSS framework
- Eleventy: A simpler static site generator
- Workbox: Generate service workers
- Sharp: Generate image assets
- Webpack: Bundler of assets

## Features

- Auto generate icon webfonts from SVG files.
- Purge of CSS files
- Minify of HTML/CSS/JS
- SEO optimized
- Focused in performance
- Deploy on docker

## Getting Started

- `yarn` to install all dependecies
- `yarn dev` to boot up that dev server and start building
- `yarn build` when you're ready to build a production bundle

**Bonus**
`npm run build && npx serve dist` will boot up a local server of your production site!

### Docker

You may use only docker commands

- `docker build -t tewstack .` to build your image
- `docker run -it --rm -d -p 8080:80 --name web tewstack` to run your image at port 8080

Also you can use docker-compose commands

- `docker-compose up -d` to build (first time) and run your project
- `docker-compose up --build --remove-orphans -d` to build (everytime) and run your project

### TODO

Yet to come in repository

- [ ] Open Graph Images example
- [ ] Custom TEW website template
- [ ] Review and seek improvements

*This repository is based on [TEA-STACK](https://github.com/mattwaler/tea-stack)*
