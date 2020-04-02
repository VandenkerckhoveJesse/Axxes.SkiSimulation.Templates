docker build -t skiappimage .
docker stop webserver_skiapp
docker run --rm --name webserver_skiapp -p 8080:80 -d skiappimage