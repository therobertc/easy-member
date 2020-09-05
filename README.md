This is a starter template for [Learn Next.js](https://nextjs.org/learn).

Add this to package.json when deploying to heroku

"scripts": {
"dev": "next",
"build": "next build",
"start": "next start -p \$PORT", //remove the slash from \$PORT
"heroku-postbuild": "npm run build",
"test": "echo \"Error: no test specified\" && exit 1"
},

Add this to package.json when in the dev environment

"scripts": {
"dev": "next",
"build": "next build",
"start": "next start"
},

https://medium.com/@jacoboakley/deploy-a-next-js-app-on-heroku-69bcb01db1b7
