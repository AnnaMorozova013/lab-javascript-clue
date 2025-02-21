// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: 'Jacob',
lastName: 'Green',
occupation: 'Entrepreneur',
age: 45,
description: 'He has a lot of connections',
image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
color: 'green'
  }, 
  {
    firstName: 'Doctor',
lastName: 'Orchid',
occupation: 'Scientist',
age: 26,
description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
color: 'white'
  },
  {
    firstName: 'Victor',
lastName: 'Plum',
occupation: 'Designer',
age: 22,
description: 'Billionaire video game designer',
image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
color: 'purple'
  },
  {
    firstName: 'Kasandra',
lastName: 'Scarlet',
occupation: 'Actor',
age: 31,
description: 'She is an A-list movie star with a dark past',
image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
color: 'red'
  },
  {
    firstName: 'Eleanor',
lastName: 'Peacock',
occupation: 'Socialité',
age: 36,
description: 'She is from a wealthy family and uses her status and money to earn popularity',
image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
color: 'blue'
  },
  {
    firstName: 'Jack',
lastName: 'Mustard',
occupation: 'Retired Football player',
age: 62,
description: 'He is a former football player who tries to get by on his former glory',
image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
color: 'yellow'
  }
];

// Rooms Array

const roomsArray = ['Dining Room','Conservatory','Kitchen','Study','Library','Billiard Room','Lounge','Ballroom','Hall','Spa','Living Room','Observatory','Theater','Guest House','Patio'];

// Weapons Array

var weaponsArray = [
  {name: "rope", weight: 10},
  {name: "knife", weight: 8},
  {name: "candlestick", weight: 2},
  {name: "dumbbell" , weight: 30},
  {name: "poison", weight: 2},
  {name: "axe", weight: 15},
  {name: "bat", weight: 13},
  {name: "trophy", weight: 25},
  {name: "pistol", weight: 20}
  ];

// ITERATION 2

function selectRandomRoom(roomsArray) {
  var room = roomsArray[Math.floor(Math.random() * roomsArray.length)];
  return room 
  };
  
  function selectRandomWeapon(weaponsArray) {
    var weapon = weaponsArray[Math.floor(Math.random() * weaponsArray.length)];
  return weapon
  };
  
  function selectRandomName(suspectsArray) {
    var suspect = suspectsArray[Math.floor(Math.random() * suspectsArray.length)];
  return suspect
  };

function pickMistery(){
  var misteryEnvelope =[];
  misteryEnvelope.push(selectRandomRoom(roomsArray));
  misteryEnvelope.push(selectRandomName(weaponsArray));
  misteryEnvelope.push(selectRandomWeapon(suspectsArray));
  
  return misteryEnvelope;
};

// ITERATION 3

function revealMistery(){
  var mysteryArray = pickMistery();
  
 return mysteryArray[2].firstName +" "+ mysteryArray[2].lastName + " killed Mr.Boddy using the "+ mysteryArray[1].name+ " in the " +  mysteryArray[0]+ "!";
};

revealMistery();

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
