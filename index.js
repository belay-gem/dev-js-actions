const core = require('@actions/core');
const github = require('@actions/github');

try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('');
    const topics = core.getInput('topics');
    const tags = core.getInput('tags');
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    console.log(`${process.env.logLevel} - This is logLevel`)
    console.log(`${process.env.tags} - This is tags`)
    console.log(`${process.env.topics} - This is topics`)
    console.log(`${process.env.kafka} - This is kafka`)
    //console.log(`${process.env.DEPLOY_ENV}`);
    //console.log(topics);
    //console.log(tags)
    //console.log(`${github.event.inputs.tags }`)
    //console.log(`${github.event.inputs.kafka }`)
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
  } catch (error) {
    core.setFailed(error.message);
  }
