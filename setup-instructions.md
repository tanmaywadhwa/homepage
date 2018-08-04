
## Install npm
```bash 
$ sudo apt install npm
```
## Change npm's default directory
1. Make a directory for global installation:
```bash
$ mkdir ~/.npm-global
```
2. Configure npm to use the new directory path:
```bash
$ npm config set prefix '~/.npm-global'
```
3. Open or create a ~/.profile file and add this line:
```bash
$ export PATH=~/.npm-global/bin:$PATH
```
4. Back on the command line, update your system variables:
```bash
$ source ~/.profile
```
## Update npm and node versions
```bash
$ npm install -g npm
```

## Clone homepage directory to an appropriate directory
```bash
$ git clone https://github.com/tanmaywadhwa/homepage.git
```

## Initialize angular CLI and run the dev server.
```bash 
$ npm install -g @angular/cli
```
```bash 
$ cd $dev-directory/homepage
```
```bash
$ npm install
```
```bash 
$ ng serve --open
```