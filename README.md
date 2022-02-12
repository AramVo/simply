# How to run

## Run for development

Create `.env` file. Copy the content of `.env.example` into `.env`.
Set appropriate values for environment variables.

You also need to have a running mongoDB. If you have a docker and don't want to install mongoDB locally, you can run the following command:

    docker run -d --name mongo -p 27017:27017 mongo


Then install dependencies by running `npm install` and after that run `npm run devstart`.


## Run by docker

Create `.env` file. Copy the content of `.env.example` into `.env`.
Set appropriate values for environment variables.

In `.env` add `DB_PORT=27017`. I don't find a way to change mongDB's port by environment variable :(

Then just run:

    docker-compose up --build -d