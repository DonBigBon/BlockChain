# Social Network  :shipit:
This our project is a social network web application developed using Node.js, Express and MongoDB. The project includes a registration and login system, as well as user profile and friends management functionality.

## Key features:
Registration and Login to the System:
>The /user/register page provides the ability to register a new user with a name, email and password.
>>The /user/login page is for logging in to the system. If the login attempt fails, appropriate errors are displayed.

We have also created a User Profile:

>Once a user has successfully logged in, they can manage their profile on the /user/profile page.
>Profile features include changing avatar, setting/changing wallet and viewing friends information.


*Wallet*


**Friends:**

>The /user/friends page provides the user with the ability to manage their friends list.
>The user can send and accept friendship requests, as well as view the current list of friends and requests.


### Technology:

>Node.js and Express: Our application is developed using server side on Node.js with Express framework to handle HTTP requests.
>MongoDB: MongoDB database is used to store data about users and their friends.
>Bcrypt: To securely hash user passwords during registration and verify passwords at login.

#### Routes:

 >Routes have also been added to the Social Network application to handle various requests.
 >Below is the code of the routes implemented using Express.js:


>These routes allow users to interact with the app, login, register, manage their profile, send friend requests, and more.

##### Models:

>This code provides a convenient interface for interacting with user data in our MongoDB database.


Data Structure:

>UserSchema defines a user data structure using Mongoose.Schema.
>Included are fields for name, email, password hash, wallet address, friend list and friend request list.
>timestamps: true includes automatic timestamps createdAt and updatedAt.
>Model:
>UserModel is created based on the UserSchema data schema using mongoose.model.
>The model represents a collection of users in the MongoDB database.
>Export:
>The user model is exported for use in other parts of the application.

**Validator** 
>We added a validator for registering a new user (registerValidator). Also, we used the multer library to handle the loading of the user's avatar. Here's how these components can interact in the context of our project:

***Registering a new user:***

>When submitting the registration form data, registerValidator will validate that the email, password length, username length, and avatar link format (if specified) are correct.
>>If the data passes validation, it can be sent to the server for registration processing.
>>>Uploading the user's avatar:
After successful registration, when the user already has an identifier (userId), avatar upload becomes available.
When uploading an avatar, multer uses the storage settings defined in our code to save the file in the avatars subfolder of the uploads directory with a filename containing the userId and a file extension.


>This allows us to use validators to check data at check-in and middleware to handle avatar uploads in our Express routes.

## About our NFT Project
We have created ERC-20 and also non-combustible NFT ERC-721.


### Scripts
>The main function is an asynchronous function and serves as the entry point to the script.
It uses ethers.getSigners() to retrieve the deployer's subscriber object (presumably the first account).
>>Deployment Contract:
It registers the address of the deployer account.
ethers.getContractFactory("DNBToken") and ("TopWeb3NFT") is used to get the smart contract factory of "DNBToken" and "TopWeb3NFT".
DNBToken.deploy() is called to deploy the contract, and the deployed contract instance is stored in the DNBToken variable.
>>>Logging the deployment information:
Finally, the script logs the deployment information, in particular the address where the "DNBToken" and "TopWeb3NFT" contract is deployed.
>>>>Error handling:
The script uses the .then() block to terminate the process with code 0 (success) if there are no errors.
If an error occurs, it logs it, sets the process exit code to 1 (indicating an error), and terminates.
>>>>>Execution:
The main function is called and the process exit code is set depending on the success or failure of the deployment.
This script is suitable for deploying the "DNBToken" and "TopWeb3NFT" contract using the Hardhat framework

**Smart-contracts:**
>For smart contracts, we used ABI (Application Binary Interface) for a smart contract called "TopWeb3NFT", "DNBToken" written in Solidity. The contract includes various functions and events to manage NFTs (Non-Fungible Tokens) on the Ethereum blockchain.
>>The contract defines three events: "Approval," "Transfer," and "TransferInfo." These events are triggered during specific actions in the contract and can be used for logging and external notification.

**Test script for a smart contract named "Lock"**
>This script defines a set of tests for the deployment and functionality of the "Lock" smart contract.
The script uses various helper functions and libraries from Hardhat, such as time to handle time-related operations, loadFixture to configure fixtures, expect and chai for assertions.
>>Fixture Setup:
The deployOneYearLockFixture function is defined to set up and deploy the "Lock" contract with specific parameters, such as the lock duration, locked amount, etc.
The fixture uses the loadFixture function from Hardhat to snapshot the state and reset the Hardhat Network in every test.
>>>Deployment Tests:
Three tests check if the deployment of the "Lock" contract sets the correct unlock time, owner, and successfully receives and stores the funds to lock.
An additional test checks if the contract fails deployment when the unlock time is not in the future.
>>>>Withdrawal Tests:
Validation tests check that withdrawals revert with the correct error messages in different scenarios (too soon, called from another account, and successful withdrawal after the unlock time).
An event test checks if the "Withdrawal" event is emitted with the correct arguments.
A transfer test checks if the funds are transferred to the owner upon successful withdrawal.


>NFT holders in your system have unique privileges such as the ability to create posts, leave comments and interact in the community. The interesting thing is that NFT holders are automatically given additional NFTs when they reach a certain level of activity, such as making 5 friends :couple: in the system. This is a way of encouraging participation and expanding the community through interaction with NFT holders. :yum:









:notebook: :black_nib: **Authors:**

**Stanbek Bekzat, Toktasyn Daniyar, Nurbakyt Tagaibek** :top:
