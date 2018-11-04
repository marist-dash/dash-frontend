This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Installation

1) Download dependencies: `npm install`

2) Start the app: `npm start`

Remember to run `npm install` on each startup in case new dependencies were added by another contributor.

# About this app

This app is written in mostly Javascript using the [React](https://reactjs.org/) framework. It uses [Tailwind CSS](https://tailwindcss.com/) for styling. [React Router](https://reacttraining.com/react-router/web/guides/quick-start) and [redux](https://redux.js.org/) are used for routing and managing state through the app, respectively.

# Branches

Individual developers should perform daily work in their own branch, named after their last name. The `develop` branch should be used to combine work from individual developer branches. The `master` branch contains the code running in production. Please read ["A successful Git branching model"](https://nvie.com/posts/a-successful-git-branching-model/) for more information. 


Since this branch has multiple contributors, everyime you start working:

1) Checkout your individual branch (`git checkout Johnson`) and pull any updates (`git pull`)
    
2) Checkout the **develop** branch to get updates from other contributors with `git checkout develop && git pull` OR `git checkout develop; git pull`
    
3) Checkout your individual branch again (`git checkout Johnson`) and pull updates from **develop** into your branch with `git merge develop`
