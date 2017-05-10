#!/bin/bash
path=$(cd ${0%/*} && pwd -P)
cd "$path"
java -jar VGLII.jar

