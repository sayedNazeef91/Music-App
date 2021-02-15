###########################
Preliminaries
###########################
1. Make sure you have the node version >=14.5.1 (command to check version: node -v)
2. Make sure you have the global Angular Cli version >=10.1.6  (command to check version: ng v)
##########################
Steps to run the app
##########################

1. open the terminal (command prompt) on the project folder.
2. type this command 'npm install'.
3. after successfull doing the installation, type this command 'node --max_old_space_size=14336 ./node_modules/@angular/cli/bin/ng build --watch'
4. the above given command builds the project, now to run the app type following command 'node index.js'.
5. You can access the app at following url: http://localhost:8000