
## Install npm and node
1. sudo apt install npm
2. sudo apt install nodejs-legacy

## Update node version
1. sudo npm install n -g
2. sudo n 0.12.2
3. sudo n stable

## Change npm's default directory
1. Make a directory for global installation:
```bash
mkdir ~/.npm-global
```
2. Configure npm to use the new directory path:
```bash
npm config set prefix '~/.npm-global'
```
3. Open or create a ~/.profile file and add this line:
```bash
export PATH=~/.npm-global/bin:$PATH
```
4. Back on the command line, update your system variables:
```bash
source ~/.profile
```

## Clone homepage directory to an appropriate directory
1. git clone https://github.com/tanmaywadhwa/homepage.git

## Initialize angular CLI and run the dev server.
1. npm install -g @angular/cli --ensure
2. cd $dev-directory/homepage
3. npm install
4. ng serve --open
