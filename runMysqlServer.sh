#!/bin/bash

docker run -p 3306:3306 --name dahem-mysql -e MYSQL_ROOT_PASSWORD=duvetlain -d mysql:5.7