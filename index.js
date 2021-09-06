const core = require('@actions/core');
const github = require('@actions/github');
const { execSync } = require('child_process');
const delay =  require('delay');
var exec = require('child_process').exec, child;
const envFile = require('dotenv');

var nope = ()=>{
  try {
      const nameToGreet = core.getInput('');
      const topics = core.getInput('topics');
      const tags = core.getInput('tags');
      console.log(`Hello ${nameToGreet}!`);
      const time = (new Date()).toTimeString();
      core.setOutput("time", time);
      console.log(`${process.env.DOCKER_PASSWORD}`)
      console.log(`${process.env.AWS_REGION}`)
      console.log(`${process.env.DOC_USER_NAME}`)
      console.log("Testing.........................")
    } catch (error) {
      core.setFailed(error.message);
    }

}
// var decryption = async() =>{
// // require('child_process').exec(`
// //   gpg --quiet --batch --yes --decrypt --passphrase="Doma##@@" \
// //   --output .env.encryption .env.encryption.gpg
// // `)
// //console.log("wow")
// //await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec
// //console.log("noppe")
// }
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// exec(`
//     gpg --quiet --batch --yes --decrypt --passphrase="Doma##@@" \
//     --output .env.encryption .env.encryption.gpg
//   `,
//     function (error, stdout, stderr) {
//         console.log('stdout: ' + stdout);
//         console.log('stderr: ' + stderr);
//         if (error !== null) {
//              console.log('exec error: ' + error);
//         }
// });

// exec(`
//     gpg --quiet --batch --yes --decrypt --passphrase="Doma##@@" \
//     --output .env.encryption .env.encryption.gpg
//   `,
//     function (error, stdout, stderr) {
//         console.log('stdout: ' + stdout);
//         console.log('stderr: ' + stderr);
//         if (error !== null) {
//              console.log('exec error: ' + error);
//         }
// });
// sleep(2000);
//
// execSync(`
//     gpg --quiet --batch --yes --decrypt --passphrase="Doma##@@" \
//     --output .env.encryption .env.encryption.gpg
//   `);
// sleep(5000);
// nope();

async function task1(input){
  execSync(`
      gpg --quiet --batch --yes --decrypt --passphrase="Doma##@@" \
      --output .env .env.encryption.gpg
    `);
    console.log("one: "+input);
    envFile.config();


    }
    async function task2(input){
       // has more functions that do other stuff
       console.log("two: "+input);

    }

    function task3(input){
       // this code should only be executed after both task 1 and 2 finish
       console.log("three: "+input)
    }

    async function main(input1, input2){
      try{
        await Promise.all(
            [task1(input1)]
        );
        nope();
        task2(input2);
    }catch(err){
      console.log("error");
      console.log(err);
    }
  }

    main("input1", "input2");
