git pull

docker stop backend
docker remove backend

docker build -f ./deploy/Dockerfile -t backend .


docker run \
	--name backend \
    -p 10443:10443 \
	--mount src=/home/kbk/givexp/backend/config/config_remote.json,target=/usr/src/app/config.json,type=bind \
	--mount src=/home/kbk/certs/,target=/etc/ssl/ui_certs/,type=bind \
	-d backend