/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk');
const AWS = require('aws-sdk');

const table = "userData";
const words = require('./data.json');
let userid ;
var question;
var answer;
let speech;
var optionSelected;
let noOfQuizQuestions;
let noOfRevisionQuestions;
let userResponses;
let firsttime = false;
let isQuiz = false;
let isRevision = false;
let noOfCorrect = 0;
let noOfIncorrect=0;
let attempted = 0;
let unattempted = 0;

const LaunchHandler={
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
    || (request.type === 'IntentRequest'
    && request.intent.name === 'LaunchIntent');
  },
  handle(handlerInput) {

  
  return handlerInput.responseBuilder
  .speak("word coach welcomes you. you can choose to take a quiz or revise.")
  .reprompt()
  .getResponse();
},
};


const QuizHandler=
{
  canHandle(handlerInput) 
  {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'QuizIntent');
  },
  handle(handlerInput) 
  {
    noOfQuizQuestions = handlerInput.requestEnvelope.request.intent.slots.Number.value;
    console.log("user asked for "+noOfQuizQuestions+" Questions to quiz");
    userid = handlerInput.requestEnvelope.session.user.userId;
    isQuiz = true;

    var params = 
    {
      TableName : table,
      Key: 
      {
        "userID" : userid
      }
    };
    
    var documentClient = new AWS.DynamoDB.DocumentClient();
    
    documentClient.get(params, function(err, data) 
    {
      if (err) console.log();
      else 
      {
        if ( data.hasOwnProperty('Item') ) 
        {
          console.log(data.Item.Responses);
          userResponses=data.Item.Responses;
        }
        else 
        {
          let params =  
          {
            TableName : 'userData',
            Item: 
            {
              userID : userid,
              Responses : [0,0,0,0,0]
            }
          };

          userResponses=[0,0,0,0,0];
          documentClient.put(params,function(err, data) 
          {
            if (err) console.log(err);
            else console.log(data);
          });
        }
      };
    }); 

    /*let params =  
          {
            TableName : 'userData',
            Item: 
            {
              userID : userid,
              Responses : ["0","0","0","0","0"]
            }
          };

          documentClient.put(params,function(err, data) 
          {
            if (err) console.log(err);
            else console.log(data);
          });*/


          firsttime=true;
  return AnswerIntentHandler.handle(handlerInput);
  },
};

const ReviseHandler={
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'ReviseIntent');
  },
  handle(handlerInput) {

    noOfRevisionQuestions = handlerInput.requestEnvelope.request.intent.slots.Number.value;
    console.log("user asked for "+noOfQuizQuestions+" Questions to revise");

    isRevision=true;
    question = words[2].DEFINITION;
    answer = words[2].WORD;

    var op1 = words[5].WORD;
    var op2 = words[6].WORD;
    var op3 = words[2].WORD;
    var op4 = words[1].WORD;

   speech = "What word best fits this definition."+question+"A."+op1+"B."+op2+"C."+op3+"D."+op4;

  firsttime =true;
  /*return handlerInput.responseBuilder
  .speak("speech.")
  .reprompt()
  .getResponse();*/

  return AnswerIntentHandler.handle(handlerInput);
},
};

const AnswerIntentHandler={
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'AnswerIntent');
  },
  handle(handlerInput) {
    
    let state = " Merry had a little lamb ";

    if(firsttime)
    {
      firsttime =false;
      
      return handlerInput.responseBuilder
      .speak(" fisrt question ")
      .reprompt()
      .getResponse();

    }




    optionSelected = handlerInput.requestEnvelope.request.intent.slots.Answer.value; 


    if (isQuiz){
      if(noOfQuizQuestions===1)
      {
        if(optionSelected==='a')
        {
          speech = " Correct ";
        }else{speech = " Incorrect ";}

        var response = speech+" Quiz has ended ";
        noOfQuizQuestions--;
        let params =  
          {
            TableName : 'userData',
            Item: 
            {
              userID : userid,
              Responses : [1,1,0,0,0]
            }
          };

          var documentClient = new AWS.DynamoDB.DocumentClient();

          documentClient.put(params,function(err, data) 
          {
            if (err) console.log(err);
            else console.log(data);
          });

        return handlerInput.responseBuilder
        .speak(response)
        .reprompt()
        .getResponse();
      }
      else if(noOfQuizQuestions>1)
      {
        if(optionSelected==='a')
        {
          speech = " Correct ";
        }else{speech = " Incorrect ";}

        var response = speech+state;
        noOfQuizQuestions--;
        return handlerInput.responseBuilder
        .speak(response)
        .reprompt()
        .getResponse();
      }
      else{return handlerInput.responseBuilder
      .speak("Error")
      .reprompt()
      .getResponse();
    }
    }

    else if (isRevision)
    {
      if(noOfRevisionQuestions===1)
      {
        if(optionSelected==='a')
        {
          speech = " Correct ";
        }else{speech = " Incorrect ";}

        var response = speech+" Revision has ended ";
        noOfRevisionQuestions--;
        return handlerInput.responseBuilder
        .speak(response)
        .reprompt()
        .getResponse();
      }
      else if(noOfRevisionQuestions>1)
      {
        if(optionSelected==='a')
        {
          speech = " Correct ";
        }else{speech = " Incorrect ";}

        var response = speech+state;
        noOfRevisionQuestions--;
        return handlerInput.responseBuilder
        .speak(response)
        .reprompt()
        .getResponse();
      }
      else
      {
        return handlerInput.responseBuilder
        .speak("Error")
        .reprompt()
        .getResponse();
      }
    }

    else
    {
      return handlerInput.responseBuilder
      .speak("Choose quiz or revision")
      .reprompt()
      .getResponse();
    }
  
},
};

/*const GetMenuHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'GetMenuIntent');
  },
  handle(handlerInput) {

        let params =  {
		TableName : 'userData',
        Item: {
			itemName : "Kesari",
			price: "20"
			}
		};
		
		docClient.put(params,function(err, data) {
			if (err) console.log(err);
			else console.log(data);
			});
			
			return handlerInput.responseBuilder
			.speak("We have Idli Dosa Vada and Biryani on the menu today.")
      .reprompt("reprompting")
      .getResponse()
      ;
  },
};

/*const OrderHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'OrderIntent');
  },
  handle(handlerInput) {
    const slots = handlerInput.requestEnvelope.request.intent.slots;
    const item = slots['Item'].value;
    const speech = "Okay "+item+" ordered.";
    return handlerInput.responseBuilder
      .speak(speech)
      .getResponse();
  },
};*/

/*const PriceHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'PriceIntent');
  },
  handle(handlerInput) {
    var prices = [20,30,20,50];
    const slots = handlerInput.requestEnvelope.request.intent.slots;
    const id = slots.Item.resolutions.resolutionsPerAuthority[0].values[0].value.id;
    const speech2 = "It costs "+prices[id-1]+" rupees.";
    return handlerInput.responseBuilder
      .speak(speech2)
      .getResponse();
  },
};*/

const HelpHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(HELP_MESSAGE)
      .reprompt(HELP_REPROMPT)
      .getResponse();
  },
};

const ExitHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.CancelIntent'
        || request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(STOP_MESSAGE)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, an error occurred.')
      .reprompt('Sorry, an error occurred.')
      .getResponse();
  },
};

const SKILL_NAME = 'GRE Tutor';
const HELP_MESSAGE = 'You can practice by taking a quiz or you can revise.';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const data = [
  'A year on Mercury is just 88 days long.',
  'Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.',
  'Venus rotates counter-clockwise, possibly because of a collision in the past with an asteroid.',
  'On Mars, the Sun appears about half the size as it does on Earth.',
  'Earth is the only planet not named after a god.',
  'Jupiter has the shortest day of all the planets.',
  'The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.',
  'The Sun contains 99.86% of the mass in the Solar System.',
  'The Sun is an almost perfect sphere.',
  'A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.',
  'Saturn radiates two and a half times more energy into space than it receives from the sun.',
  'The temperature inside the Sun can reach 15 million degrees Celsius.',
  'The Moon is moving approximately 3.8 cm away from our planet every year.',
];

const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchHandler,
    QuizHandler,
    ReviseHandler,
    AnswerIntentHandler,
    HelpHandler,
    ExitHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
