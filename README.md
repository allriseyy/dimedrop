# keycraft
A mobile app to help people learn how to use shortcut keys
## WSL Setup
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
sudo apt-get update && apt-get upgrade
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
git clone https://github.com/allriseyy/keycraft.git
```
8. splendid! you are all set!

## The ingredients
### IDE
Visual Studio Code
WSL
### Framework
React Native
### OS
Linux
### Platform
Android
