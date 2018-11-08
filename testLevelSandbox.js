//Importing levelSandbox class
const LevelSandboxClass = require('./levelSandbox.js');

// Creating the levelSandbox class object
const db = new LevelSandboxClass.LevelSandbox();

/* ===== Testing ==============================================================|
|  - Self-invoking function to add blocks to chain                             |
|  - Learn more:                                                               |
|   https://scottiestech.info/2014/07/01/javascript-fun-looping-with-a-delay/  |
|                                                                              |
|  * 100 Milliseconds loop = 36,000 blocks per hour                            |
|     (13.89 hours for 500,000 blocks)                                         |
|    Bitcoin blockchain adds 8640 blocks per day                               |
|     ( new block every 10 minutes )                                           |
|  ===========================================================================*/

/*
(function theLoop (i) {
    setTimeout(function () {
      db.addDataToLevelDB('Testing data' + (10-i))
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
      if (--i) theLoop(i);
    }, 100);
  })(10);
*/

  (function theLoop (i) {
    setTimeout(function () {
      db.getLevelDBData(i-1)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
      if (--i) theLoop(i);
    }, 100);
  })(10);
  
