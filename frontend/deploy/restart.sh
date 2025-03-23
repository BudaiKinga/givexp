git pull
docker stop frontend
docker remove frontend

docker build -f ./deploy/Dockerfile -t frontend .

docker run \
	--name frontend \
    -p 80:80 \
	-p 443:443 \
	--mount src=/home/kbk/certs/,target=/etc/ssl/ui_certs/,type=bind \
    -d frontend
