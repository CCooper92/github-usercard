import axios from 'axios';
// const result = axios.get('https://api.github.com/users/CCooper92');
//console.log(result);



// axios.get("https://api.github.com/users/CCooper92")
// .then(() => {
//   console.log(axios.get("https://api.github.com/users/CCooper92"));
// })
// .catch((error) => {
// console.log(error);
// })
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use 
    it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each user, and adding that card to the DOM.
*/


const cards = document.querySelector('.cards');

const api = axios.get("https://api.github.com/users/CCooper92")
api.then( ( res ) => {
  cards.appendChild( userCardMaker ( res ) );
  console.log(res);
})
api.catch((error) => {
  console.log(error);
})

const followersArray = [
  'bigknell',
  'emmac124',
  'tetondan', 
  'radelmann',
  'dustinmyers',
  'justsml'
];

followersArray.forEach((user) => {
axios.get( `https://api.github.com/users/${user}` )
  .then( ( res ) => {
      cards.appendChild( userCardMaker( res ) );
  })
  .catch( error  => {
    console.log(error);
  })
})


  function userCardMaker(user) {
    const userCard = document.createElement('div');
    const userImg = document.createElement('img');
    const userInfo = document.createElement('div');
    const usersName = document.createElement('h3');
    const userName = document.createElement('p');
    const userLocation = document.createElement('p');
    const userProfile = document.createElement('p')
    const userAddress = document.createElement('a');
    const userFollowers = document.createElement('p');
    const userFollowing = document.createElement('p');
    const userBio = document.createElement('p');

    
console.log(userCard);

    userCard.classList.add('card');
    userInfo.classList.add('card-info');
    usersName.classList.add('name');
    userName.classList.add('username');

    
    userImg.setAttribute('src', user.data.avatar_url);
    usersName.textContent = user.data.name;
    userName.textContent = user.data.login;
    userLocation.textContent = `Location: ${user.data.location}`;
    userProfile.textContent = `Profile:`
    userAddress.setAttribute('href', `${user.data.html_url}`);
    userAddress.textContent = user.data.html_url;
    userFollowers.textContent = `Followers: ${user.data.followers}`;
    userFollowing.textContent = `Following: ${user.data.following}`;
    userBio.textContent = `Bio: ${user.data.bio}`;

    userCard.appendChild(userImg);
    userCard.appendChild(userInfo);
    userInfo.appendChild(usersName);
    userInfo.appendChild(userName);
    userInfo.appendChild(userLocation);
    userInfo.appendChild(userProfile);
    userProfile.appendChild(userAddress);
    userInfo.appendChild(userFollowers);
    userInfo.appendChild(userFollowing);
    userInfo.appendChild(userBio);

console.log(userCard);
    return userCard;
 
  }


// const cardMaker = userCard ({img: 'avatar_URl', name: 'name', username: 'userName', location: 'location', followers: 'followers', following: 'following', bio: 'bio' })

// cards.appendChild(cardMaker);

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
