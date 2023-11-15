#!/usr/bin/env sh

file="src/index.ts"
printf "export * from './static-icons';" > $file
# printf "\nexport * from './illustrations';" >> $file

