const core = require('@actions/core');
const github = require('@actions/github');
const { execSync } = require('child_process');
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
async function task1(input){
  execSync(`
      gpg --quiet --batch --yes --decrypt --passphrase="Doma##@@" \
      --output .env .env.encryption.gpg
    `);
    console.log("one:-------------- "+input);
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
        task2(input2);
        nope();
    }catch(err){
      console.log("error");
      console.log(err);
    }
  }

    main("input1....????999", "input20000.....");
