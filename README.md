# Thesis - Beats

You can check out the current state of the web-doc - https://rushali.github.io/

## Description
beats.nyc is a chaotic archive of street musicians who perform underground in new york city. 
It uses [Mapbox GL JS](https://www.mapbox.com/mapbox-gl-js/api/) and [three.js](https://threejs.org/) and three.js plugin for Mapbox GL JS called [threebox](https://github.com/peterqliu/threebox)


## Table of Contents
* index.html: Main html file
* MTA_MusicLocations.js: Database of MTA locations assigned by the Music Under New York Program
* nycresonance.js: resonance audio file for spatial audio 
* underground.html: html for the underground three js scenes
* style.css: styling info for the HTML

## Instructions
Clone or download this repository and run live-server in the directory. Browser opens localhost - click on index.html

This project exists on nycbeats.xyz. It is using Digital Ocean as a server on the IP address 167.99.55.92 ; It is serving on port 7000; 

To run a node application on digital ocean we are using nginx, after installing nginx, we added a file myapp.com to the /etc/nginx/sites-available/ folder and in /etc/nginx/sites-enabled/ 
```
			server {
			    listen 80;

			    server_name nycbeats.xyz;

			    location / {
			        proxy_pass http://localhost:7000;
			        proxy_http_version 1.1;
			        proxy_set_header Upgrade $http_upgrade;
			        proxy_set_header Connection 'upgrade';
			        proxy_set_header Host $host;
			        proxy_cache_bypass $http_upgrade;
			    }
			}
```
