# dimedrop
A web app to help people track their expenses in a fun way by playing games

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
8. nvm (0.40.3)
```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source ~/.bashrc
nvm --version
```
9. npm (10.9.2)
```bash
sudo apt install npm
npm --version
```
10. navigate into the project root folder
```bash
cd dimedrop
```
11. install the packages
```bash
npm install
```
12. splendid! you are all set!
```bash
npm start
```

## Docker
1. install docker
```bash
https://docs.docker.com/engine/install/
```
2. build and run the image and container
```bash
docker compose up --build
```
3. enjoy !

## TO-DO
1-create a landing page ✅ <br/>
2-restructure the files ✅ <br/>
3-dockerize ✅ <br/>
4-enhance landing page ✅ <br/>
5-unit test ✅ <br/>
6-login feature ✅ <br/>
7-sign up feature <br/>
8-expenses page <br/>
9-home page <br/>
10-about us page <br/>
11-contact us page <br/>



## The ingredients
### IDE
Visual Studio Code
### Language
Javascript <br/>
Typescript
### Framework
React <br/>
TailwindCSS
### OS
Linux Ubuntu 24.04
### Platform
Web


# Screenshot
24 May 2025 (v1)
![image](https://github.com/user-attachments/assets/e52c0295-6d73-40cd-8dae-f122b2694183)
![image](https://github.com/user-attachments/assets/1da17dd5-24cb-4b6e-be61-dbc4fe33ac63)
![image](https://github.com/user-attachments/assets/5a9b908a-eb43-41ba-b5bb-d0bfaf0e74c1)
![image](https://github.com/user-attachments/assets/1fe16e67-bcb3-4412-ac2c-051f0dbcdd9e)
![image](https://github.com/user-attachments/assets/8af4b148-4e56-421f-b665-e71febf9a856)






