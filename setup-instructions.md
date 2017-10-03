# Install npm and node
sudo apt install npm
sudo apt install nodejs-legacy

# Clone homepage directory to an appropriate directory
git clone https://github.com/tanmaywadhwa/homepage.git

# Initialize angular CLI and run the dev server.
cd $dev-directory/homepage
npm install
ng serve --open

