// console.log("Start");

// const usersDB = {
//   "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
//   "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
//   "user3@hw.js": [],
// };

// function loginUser(email, password, callback) {
//   setTimeout( () => {
//     console.log(`Now we have the data of user: ${email}`)
//     callback({userEmail: email})
//   }, 3000)
// }

// function getUserVideos(email, callback)
// setTimeout(() => {
//   callback(usersDB[email]);
// },2000);


// function videoDetails(video, callback)
// setTimeout(() => {
//   callback(usersDB[title]);
// },2000);



// const getPassedUsersFirstVideoTitle = (user) =>
//   loginUser(user, 1234, (user) => {
//     console.log("user:", user);
//     getUserVideos(user.userEmail, (videos) => {
//       console.log("videos:", videos);
//       videoDetails(videos[0], (title) => {
//         console.log("title:", title);
//       });
//     });
//   });




// console.log("Finish");

//2

// console.log("Start");

// const usersDB = {
//   "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
//   "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
//   "user3@hw.js": [],
// };

// function loginUser(email, password, success, failure) {
//     if(Object.keys(usersDB).includes(email)){
//       setTimeout(() => {
//         console.log(`Now we have the data of user: ${email}`)
//         success({userEmail: email})
//       }, 3000)
//     }else{
//       setTimeout(() => {
//         failure("User not found!");
//     }, 3000)
// }

// function getUserVideos(email, successVideo, failureVideo)

// if(usersDB[email].length){
//       setTimeout(() => {
//         successVideo(usersDB[email])
//       }, 2000)
//     }else{
//       setTimeout(() => {
//         failureVideo("User not found!");
//     }, 2000)
// }

// function videoDetails(video, success, failure){

//   if(Object.keys(usersDB).includes(title){
//     setTimeout(() => {
//     success(video.title)
// },2000);
// }else{
//   failure("Video Title not found!");
// }
// }



// function displayError(errorMessage) {
//   console.error(new Error(errorMessage));
// }




 

// const getPassedUsersFirstVideoTitle = (user) =>
//   loginUser(user, 1234, (user) => {
//     console.log("user:", user);

//     getUserVideos(user.userEmail, (videos) => {
//       console.log("videos:", videos);

//       videoDetails(videos[0], (title) => {
//         console.log("title:", title);
//         },
//         (err) => displayError(err)
//       );
//     },
//     (err) => displayError(err)
//   );
// },
// (err) => displayError(err)
// );
// }



// getPassedUsersFirstVideoTitle("user4@hw.js");
// getPassedUsersFirstVideoTitle("user3@hw.js");
// getPassedUsersFirstVideoTitle("user2@hw.js");
// getPassedUsersFirstVideoTitle("user1@hw.js");

// console.log("Finish")













//3

// console.log("Start");

// const usersDB = {
//   "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
//   "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
//   "user3@hw.js": [],
// };

// const loginUser = (email, password) =>
//   new Promise((resolve, reject) => {
//     if(Object.keys(usersDB).includes(email)){
//       setTimeout(() => {
//         console.log(`Now we have the data of user: ${email}`)
//         resolve({userEmail: email})
//       }, 3000)
//     }else{
//         reject("User not found!");
// }
//   });

// const getUserVideos = (email,) =>
//   new Promise((resolve, reject) => {
//     if(usersDB[email].length){
//       setTimeout(() => {
//         resolve(usersDB[email]);
//       }, 2000)
//     }else{
//         reject("User not found!");
// }
// });

// const videoDetails = (video) =>
//   new Promise((resolve, reject) => {
//   if(Object.keys(usersDB).includes(title){
//     setTimeout(() => {
//     resolve(video.title)
// },  2000)}else{
//     reject("Video Title not found!");
// }
// });

// function displayError(errorMessage) {
//   console.error(new Error(errorMessage));
// }


// const getPassedUsersFirstVideoTitle = (user) => {
//   loginUser(user, 1234)
//     .then((user) => getUserVideos(user.userEmail))
//     .then((videos) => videoDetails(videos[0]))
//     .then((title) => console.log(title))
//     .catch((error) => displayError(error));
// };




// getPassedUsersFirstVideoTitle("user4@hw.js");
// getPassedUsersFirstVideoTitle("user3@hw.js");
// getPassedUsersFirstVideoTitle("user2@hw.js");
// getPassedUsersFirstVideoTitle("user1@hw.js");

// console.log("Finish")







console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

const loginUser = (email, password) =>
  new Promise((resolve, reject) => {
    if(Object.keys(usersDB).includes(email)){
      setTimeout(() => {
        console.log(`Now we have the data of user: ${email}`)
        resolve({userEmail: email})
      }, 3000)
    }else{
        reject("User not found!");
}
  });

const getUserVideos = (email,) =>
  new Promise((resolve, reject) => {
    if(usersDB[email].length){
      setTimeout(() => {
        resolve(usersDB[email]);
      }, 2000)
    }else{
        reject("User not found!");
}
});

const videoDetails = (video) =>
  new Promise((resolve, reject) => {
  if(Object.keys(usersDB).includes(title){
    setTimeout(() => {
    resolve(video.title)
},  2000)}else{
    reject("Video Title not found!");
}
});

function displayError(errorMessage) {
  console.error(new Error(errorMessage));
}

const getPassedUsersFirstVideoTitle = async (user) => {
  try {
    let loggedUser = await loginUser(user, 1234);
    let videos = await getUserVideos(loggedUser.userEmail);
    let firstVideoTitle = await videoDetails(videos[0]);
    console.log(firstVideoTitle);
  } catch (error) {
    displayError(error);
  }
};


getPassedUsersFirstVideoTitle("user4@hw.js");
getPassedUsersFirstVideoTitle("user3@hw.js");
getPassedUsersFirstVideoTitle("user2@hw.js");
getPassedUsersFirstVideoTitle("user1@hw.js");

console.log("Finish")













