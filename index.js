const core = require('@actions/core');
const github = require('@actions/github');

try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    console.log("${{secrets.MY_SECRET_VALUES}}");
    console.log(`${process.env.DEPLOY_ENV}`);
    console.log(`${process.env.FIRST_NAMES}`);
    console.log(`${github.event.inputs.topics }`)
    console.log(`${github.event.inputs.tags }`)
    console.log(`${github.event.inputs.kafka }`)
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
  } catch (error) {
    core.setFailed(error.message);
  }
