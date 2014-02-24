quizapp
=======

about
-----

quizapp is a lightweight nodejs + expressjs based quizzing app. It uses mongoose for store, ejs for templates, and bootstrap v3.

motivation
----------

I build quizapp for hosting two technical events -- Quizache and Webdig -- for my college fest **Catalyst '14**.

I looked around for an easy-to-use quizzing app built in nodejs but couldn't find any. So I built one.

I wanted to learn nodejs and I thought the easiest way to do so would be to build a functional app.

intended audience
-----------------

Currently, all the admin tasks are done via config files. You should have basic coding experience to setup and manage quizapp.

demo
----
Coming soon.

how to setup
------------
```
git clone https://github.com/kapeels/quizapp.git
cd quizapp
npm install
bower install
```
Modify the following files to your needs:

* commons.js
* views/index.ejs
* views/start.ejs
* views/common/footer.ejs

how to run
----------

Make sure mongodb is up. Then,

```
node app.js
```

development roadmap
-------------------
As of this writing, quizapp "just works". There are a lot of things missing. I am planning to add the following in my free time:

Development-wise:

* Client-side validation
* Basic grunt tasks
* Write functional tests
* Documentation

Feature-wise:

* Admin interface for adding questions
* Admin interface for configuration
* Admin interface for live status of the quiz

Anybody can contribute! Just send in a pull request.