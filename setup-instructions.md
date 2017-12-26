
## Install npm and node
1. Install npm
```bash 
$ sudo apt install npm
```
2. Install node
```bash
$ sudo apt install nodejs-legacy
```

## Update node version
```bash
$ sudo npm install n -g
```
```bash
$ sudo n 0.12.2
```
```bash
$ sudo n stable
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

## Clone homepage directory to an appropriate directory
```bash
$ git clone https://github.com/tanmaywadhwa/homepage.git
```

## Initialize angular CLI and run the dev server.
```bash 
$ npm install -g @angular/cli --ensure
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