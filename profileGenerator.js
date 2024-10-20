const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

const userData = {}


rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  userData.name = answer
  rl.question('What\'s an activity you like doing?', (answer) => {
    userData.activity = answer
    rl.question('What do you listen to while doing that? ', (answer) => {
      userData.music = answer
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        userData.meal = answer
        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          userData.dish = answer
          rl.question('Which sport is your absolute favourite?', (answer) => {
            userData.sport = answer
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              userData.superPower = answer

              console.log(`Here's your online profile:\n
                           Your name: ${userData.name}\n
                           Your favourite activity: ${userData.activity}
                           Your favourite music to listen to while doing your favourite activity: ${userData.music}
                           Your favourite meal: ${userData.meal}
                           Your favourite dish: ${userData.dish}
                           Your favourite sport: ${userData.sport}
                           Your superpower: ${userData.superPower}`)            

              rl.close()
            });            
          });
        });
      });
    });
  });
});




