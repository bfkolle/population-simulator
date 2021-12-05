# Population Simulator

### Intro
This is a basic Calculator/Simulator to demonstrate to the average individual the effects of population growth on countries over long periods of time

### Install

- Clone this repo onto a Linux or Windows system. This project has only been tested to work with the latest versions of Debian or Ubuntu
- Have Node.js installed. This was tested on v16
- Run `npm install` in both the main directory and frontend directory

### How to run

Though running processes in the background is possible, I've found two terminals to be easier for development work

#### Dev

1) With first terminal, use command `npm start` in the main directory to start server, API, and backend service
2) With second terminal, use `npm run dev` to start Nuxt.js dev server, which will hot reload changes to files
3) In a browser, navigate to localhost:3000 to view the app

#### Prod
1) Using only one terminal, run `npm run prod` in main directory. You may have to ctrl-c to exit output
2) Using the same terminal, navigate to frontend directory and run `npm run build` followed by `npm run prod`. Ctrl-c to exit output
3) App should now be running on port 8080 via a proxy server, which pull push traffic to localhost:3000
4) To turn off background processes, use `ps` and `kill` commands. Google if you need more info
