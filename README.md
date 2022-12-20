# Hackjaipur_team-HackTech
<img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399__340.png" style="float:right" style="border:50px solid black"  >

## Project submission for HackJaipur Hackathon.
__Title:__ Video and text chatting web application <br>
__App Name:__ videoXT  <br>
__The problem it solves:__ <p> The problem focuses on two tracks. First track is diversity,  i.e anyone can use this application to do<br>
              video chatting in their day to day life.It doesnt descriminate users based on age,gender,color or anything society finds descriminating.
              We believe in __*Unity in Diversity.*__  
              Second track is Remote working.As work from home is becoming is a widespread culture, technology
can make the process easier. This app is best to use for peoples who are working from their home. Also it can be used in one-to-one chatting between __doctor-patient__ or __Teacher-student__,
or any local __shopkeeper-customer.__ Using the app is very simple. Just open the URL & you are good to go.</p><hr>

__Challenges I ran into:__ <p>First challenge was to how to create this video calling with multiple users.<br>
So  we first made server-client chatting framework and upon testing we moved to video part.<br>
Being beginner in node and express we face many challenges while building it. Like different dependiencies and packages.<br>
Connecting peer to peer was major problem. We were not getting the right tool to connect to clients with different browsers.<br>
So we used  PeerJS which solved our problem

*we are still improving and making  the app better.* </p>

__Technologies I used:__ HTML,javascript,NodeJS, Express(Web framework for Node.js, websocket,socket.io,PeerJS,Real time communication.

__Links:__  <button><a href="https://github.com/tejas-2232/Hackjaipur_team-HackTech/blob/master/README.md">Github</a> </button> <hr>

<button>  You can check it live here @<a href ="https://videoxt.herokuapp.com/">videoXT</a>  </button>
<hr> 

# starting with project

<bold> You will need nodemon to run server.js file <bold>
## Nodemon
<img  src ="https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png">
 <hr>
 <p> <b>Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.<b> Nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.</p>
<hr>
   
## Installation:
Either through cloning with git or by using [npm](https://www.npmjs.com/) (the recommended way):
 > npm install -g nodemon
 
And nodemon will be installed globally to your system path.

You can also install nodemon as a development dependency:
> npm install --save-dev nodemon

<p>With a local installation, nodemon will not be available in your system path. Instead, the local installation of nodemon can be run by calling it from within an npm script (such as npm start) or using npx nodemon</p>

<hr>

## Usage

nodemon wraps your application, so you can pass all the arguments you would normally pass to your app:
> nodemon [your app name]

<b>Here use
  > nodemon server.js 

to run the project after cloning application to your local machine.</b>

*This app is running on Heroku Stack-22*


