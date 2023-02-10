![BioShare](https://github.com/mahmud1815003/mahmud1815003.github.io/blob/main/bioshare.PNG?raw=true "BioShare")


# Introduction
<p align="justify"> BioShare is a system developed with the help of MERN stack. It's main purpose is to connect multiple hospitals in a single system. Like a facebook of hospitals. This system is developed for solving a particular problem for the researchers working in Biomedical field. As we know, raw medical data is very hard to find and we don't know that data is taken in an ethical manner or not. So to solve this problem, I have developed this system, where multiple hospials will be connected to a single server. And a patient can sign up in the system with his/her email address. While sigining up in the system, the patient is asked if he/she wanted to share his/her medical data with the researcher or not. If the patient complied, his/her data will then be accessed by the registered researchers in the system. When a patient takes service from any of the hospitals connected through this system, his/her medical data will be stored in the database. And the patient can see and download the data anytime in future.</p>

<p align="justify">And for transparency of the researchers, a researcher's institute must be registered with system through paper work. When a specific institute contacted with the admin of the system, the system admin will evaluate the institute and take the decision if it is a valid institute for sharing medical data. If the institute is added to system, a researcher can access the data using his/her institutional email address. </p>

</br>
</br>

# Implementation
<p align="justify">
In this system, the front end is developed mainly using <a title="React Website" href="https://reactjs.org/">React.js</a> and <a title="Tailwind CSS website" href="https://tailwindcss.com/"> Tailwind CSS</a> and requesting data from API (Application Programming Interface) <a title="Redux Toolkit Query Website" href="https://redux-toolkit.js.org/introduction/getting-started">RTK Query</a> and for state management <a title="Redux Toolkit Website" href="https://redux-toolkit.js.org/">Redux Toolkit</a> has been used. 
</p>

<p align="justify">
For the server, the <a title="Node Js Website" href="https://nodejs.org/en/">Node js</a> and it's web framework <a title="Express Website" href="https://expressjs.com/">express</a> has been used. And for authentication <a title="JWT website" href="https://jwt.io/">JSON Web Token</a> has been used. These are the common structure of the server. And for speedy development, various community <a title="NPM Website" href="https://www.npmjs.com/">NPM</a> libraries are used in both server and client side.  
</p>

</br>
</br>

# Installation
The installation process is very simple. First Clone this repository in your computer by using the following command. 

```
git clone https://github.com/mahmud1815003/BioShare.git 
```
</br>
After this open the folder in VS Code and open terminal. Then write the following command. 

```
npm install
```
</br>
This will install all the dependencies for the Front end. After that you have to create dependencies for server. To do that, first write,

```
cd general-hospital-server
```
</br>
Then run the following command in the terminal,

```
npm install
```
</br>

This will create necessary dependencies for the server. Now you are good go. Just add the required environment variables in the `.env` file.

</br>
</br>

# Conclusion
<p align="justify">This system helps the patient for keeping record of his/her medical data. It also help the doctor to see his/her patient's previous history which helps in evaluation. It's also helpful for the hospital stuff as it is very simple to handle patient's data and doctor's appointment. And for the authority, as this system is made from MERN stack, most of the technologies used are open source. So it is very cost friendly to maintain. 
</p>

</br>
Jaied Bin Mahmud </br>
Department of Biomedical Engineering,</br>
Khulna University of Engineering & Technology,</br>
Khulna-9203.



