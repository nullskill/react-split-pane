#!/bin/bash

set -e

npm run prepublish
rm -rf demo/storybook
./node_modules/.bin/build-storybook -o demo/storybook
cd demo
git init
git add .
git commit -m 'Build Storybook'
git push --force https://github.com/kadirahq/react-split-pane master:gh-pages
rm -rf .git
