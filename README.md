# dimedrop
A web app to help people track their expenses

## WSL and Git Setup
1. install WSL:
```bash
wsl --install
```
2. enter WSL:
```bash
wsl ~
```
3. follow the prompts to register yourself as a new user
4. run:
```bash
sudo apt-get update && sudo apt-get upgrade
```
5. follow the steps here to install Git and Git credentials helper: 
```bash
https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-git#installing-git
```
here's the commands you need to run:
```bash
sudo apt-get install git
git config --global user.name "Your Name"
git config --global user.email "youremail@domain.com"
git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/bin/git-credential-manager.exe"
```
6. create a dev folder and start Visual Studio Code
```bash
mkdir dev && cd dev && code .
```
7. clone the repo
```bash
git clone https://github.com/allriseyy/dimedrop.git
```
8. splendid! you are all set!

## nvm
```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source ~/.bashrc
nvm --version
```

## npm
```bash
sudo apt install npm
```

## TO-DO
1-create a landing page <br/>
2-restructure the files <br/>
3-dockerize <br/>
4-unit test <br/>


## The ingredients
### IDE
Visual Studio Code <br/>
WSL
### Language
Javascript
### Framework
React
### OS
Linux
### Platform
Web
