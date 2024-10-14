#!/bin/bash

git pull | tee -a ./gitpull-info.txt  #Print changes made with gitpull to a gitpull-info.txt file

echo $(date)$'\n'"---------------------------------" >> ./gitpull-info.txt #add the date of the transaction to the file and go to the bottom line
