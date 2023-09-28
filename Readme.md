# The Machine that goes "PING!"

As made famous by our friends at Monty Python, this is a machine that goes ping.

Designed as a quick little app to show you how easy it is to write a quick little web service mimicing a standard API endpoint. You could use this code to learn many concepts about how websites and servers interact, and how you often interact with services on the web without even really knowing it.

I'm putting a DOCKERFILE in here too, to make your life easier should you enjoy dockerizing things.

## Requirements

You'll need to have a system with nodeJS and npm installed. That's about it to be honest, this is a very small application.

## How to

Install nodeJS and npm.
`brew install node`

Clone this git repo.

`git clone git@github.com:somelinuxguy/ping-app.git`

Enter the directory you just made.

`cd ping-app`

Initialize NPM packages that we require.

`npm install`

Run the app, and fork it in to the background so you can keep your prompt by using the magical "&" at the end of your command line. You should see something like this:

```
zombie@rlyeh ping-app % npm start &
[1] 84604
zombie@rlyeh ping-app %
> ping-app@1.0.0 start
> node server.js

The server is up and running... AWaiting connection
```

Now you can use curl to hit the web server (or your web browser) thusly:
```
zombie@rlyeh ping-app % curl http://localhost:9001/
URL: /
[{"message":"The most splendid day is today, for it is today all day, and what a gift that is.","timestamp":1694634192}]%
```

When you are done, you can un-fork your process and use CTRL-C to kill it, just like this:
```
zombie@rlyeh ping-app % fg
[1]  + running    npm start
^C
```

## Endpoints / Paths

There are two.

/ 

The unqualified or "base" endpoint that returns only a quote and a timestamp.

/info

This path will hand you back some interesting information about the host we are running on. This is very handy if you are learning Kubernetes and would like to deploy this to many different pods, on many different nodes, then load balance them. You never know for sure which pod you end up speaking to, but you can see them change from the output! So neat!
