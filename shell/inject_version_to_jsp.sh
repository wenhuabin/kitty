#!/bin/sh 

files=`ls pages`
id=$(git rev-parse --short HEAD);
reg="s/commitVersion/${id}/g";

cd pages;

for f in $files; do
    echo $f
    sed $reg $f > ../temp/$f
    done

cd ..;
cp -r temp/* dist/;
