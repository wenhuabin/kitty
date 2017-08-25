#!/bin/sh 

id=$(git rev-parse --short HEAD);
echo "commit id: $id";
text={\"version\":\"$id\"};
echo $text > app/version.json;
