if [! -d "$node_modules"] npm install
fi
node ./node_modules/gulp/bin/gulp run