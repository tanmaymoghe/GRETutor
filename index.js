//abruppt inputs
//SSML effects and different responses{array}
const blankArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const Alexa = require('ask-sdk');
const table = "GRE";
const data = require('./data.json');

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
  .withShouldEndSession(false)
  .getResponse();
},
};


const QuizHandler={
  canHandle(handlerInput) 
  {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'QuizIntent');
  },
  async handle(handlerInput) 
  {

    let userid ;
    var question;
    var answer;
    let speech;
    var optionSelected;
    let noOfQuizQuestions;
    let noOfRevisionQuestions;
    let responses;
    let firsttime = false;
    let isQuiz = false;
    let isRevision = false;
    let noOfCorrect = 0;
    let noOfIncorrect=0;
    let attempted = 0;
    let unattempted =1161;
    let exist = 0;


    const SessionAttributes = handlerInput.attributesManager.getSessionAttributes();

    if (SessionAttributes.hasOwnProperty('exist'))
    {
     ({userid,question,answer,speech,optionSelected,
      noOfCorrect,noOfIncorrect,noOfQuizQuestions,
      noOfRevisionQuestions,responses,firsttime,
      isQuiz,isRevision,attempted,unattempted,exist} = SessionAttributes);
    }
    

    SessionAttributes.noOfQuizQuestions = parseInt(handlerInput.requestEnvelope.request.intent.slots.Number.value,10);
    


    //attempted noOfCorrect noOfIncorrect responses unattempted

    const attributesManager = handlerInput.attributesManager;
    const responseBuilder = handlerInput.responseBuilder;
 
    const persistentAttributes = await attributesManager.getPersistentAttributes() || {};
 
   if (Object.keys(persistentAttributes).length === 0) {
     persistentAttributes.attempted = attempted;
     persistentAttributes.noOfCorrect = noOfCorrect;
     persistentAttributes.noOfIncorrect = noOfIncorrect;
     persistentAttributes.responses = blankArray;
     persistentAttributes.unattempted = unattempted;
     
     
     SessionAttributes.attempted = attempted;
     SessionAttributes.unattempted = unattempted;
     SessionAttributes.noOfCorrect = noOfCorrect;
     SessionAttributes.noOfIncorrect = noOfIncorrect;
     SessionAttributes.responses = blankArray;
     
     
     attributesManager.setPersistentAttributes(persistentAttributes);
     await attributesManager.savePersistentAttributes();
   } else {
     SessionAttributes.attempted = persistentAttributes.attempted;
     SessionAttributes.unattempted = persistentAttributes.unattempted;
     SessionAttributes.noOfCorrect = persistentAttributes.noOfCorrect;
     SessionAttributes.noOfIncorrect = persistentAttributes.noOfIncorrect;
     SessionAttributes.responses = persistentAttributes.responses;
   }
   
   console.log(" user asked for "+SessionAttributes.noOfQuizQuestions+" Questions to quiz "+SessionAttributes.unattempted+" are unattempted ");

    if(SessionAttributes.unattempted < SessionAttributes.noOfQuizQuestions)
    {
      console.log(" You have asked for more questions than available ");
      let response = " Sorry we only have "+SessionAttributes.unattempted+" questions left. "+
                     " if you want to have a quiz of "+SessionAttributes.unattempted+" questions, just say "+
                     " I want a quiz with "+SessionAttributes.unattempted+" questions ";
      return handlerInput.responseBuilder
        .speak(response)
        .withShouldEndSession(false)
        .getResponse();
    }

    SessionAttributes.userid = handlerInput.requestEnvelope.session.user.userId;
    SessionAttributes.isQuiz = true;
    
  
    SessionAttributes.questionArray = generateQuiz(SessionAttributes.responses,SessionAttributes.noOfQuizQuestions);
    SessionAttributes.optionArray = generateOptionArray(SessionAttributes.questionArray);
    console.log("Questions: "+SessionAttributes.questionArray);
    console.log("Options: "+SessionAttributes.optionArray);

           SessionAttributes.firsttime=true;
           SessionAttributes.question=0;

         handlerInput.attributesManager.setSessionAttributes(SessionAttributes);

   return AnswerIntentHandler.handle(handlerInput);
    }
  }; 

const ReviseHandler={
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'ReviseIntent');
  },
  async handle(handlerInput) {

    let userid ;
    var question;
    var answer;
    let speech;
    var optionSelected;
    let noOfQuizQuestions;
    let noOfRevisionQuestions;
    let responses;
    let firsttime = false;
    let isQuiz = false;
    let isRevision = false;
    let noOfCorrect = 0;
    let noOfIncorrect=0;
    let attempted = 0;
    let unattempted = 1161;
    let exist = 0;

    const SessionAttributes = handlerInput.attributesManager.getSessionAttributes();

    if (SessionAttributes.hasOwnProperty('exist'))
    {
    ({userid,question,answer,speech,optionSelected,
      noOfCorrect,noOfIncorrect,noOfQuizQuestions,
      noOfRevisionQuestions,responses,firsttime,
      isQuiz,isRevision,attempted,unattempted,exist} = SessionAttributes);
    }

    SessionAttributes.noOfRevisionQuestions = parseInt(handlerInput.requestEnvelope.request.intent.slots.Number.value,10);
    var difficulty=handlerInput.requestEnvelope.request.intent.slots.Difficulty.value;


    const attributesManager = handlerInput.attributesManager;
    const responseBuilder = handlerInput.responseBuilder;
 
    const persistentAttributes = await attributesManager.getPersistentAttributes() || {};
 
   if (Object.keys(persistentAttributes).length === 0) {
     persistentAttributes.attempted = attempted;
     persistentAttributes.noOfCorrect = noOfCorrect;
     persistentAttributes.noOfIncorrect = noOfIncorrect;
     persistentAttributes.responses = blankArray;
     persistentAttributes.unattempted = unattempted;
     
     SessionAttributes.attempted = attempted;
     SessionAttributes.unattempted = unattempted;
     SessionAttributes.noOfCorrect = noOfCorrect;
     SessionAttributes.noOfIncorrect = noOfIncorrect;
     SessionAttributes.responses = blankArray;
     
     attributesManager.setPersistentAttributes(persistentAttributes);
     await attributesManager.savePersistentAttributes();
   } else {
     SessionAttributes.attempted = persistentAttributes.attempted;
     SessionAttributes.unattempted = persistentAttributes.unattempted;
     SessionAttributes.noOfCorrect = persistentAttributes.noOfCorrect;
     SessionAttributes.noOfIncorrect = persistentAttributes.noOfIncorrect;
     SessionAttributes.responses = persistentAttributes.responses;
   }

    SessionAttributes.isRevision = true;
    SessionAttributes.firsttime = true;

    SessionAttributes.userid = handlerInput.requestEnvelope.session.user.userId;

    var temp;
    var questionArray;
    var optionArray;
    switch (difficulty) {
      case 'easy':
          if(SessionAttributes.noOfCorrect < SessionAttributes.noOfRevisionQuestions)
          {
            console.log(" You have asked for more questions than available ");
            let response = " Sorry I only have "+SessionAttributes.noOfCorrect+" easy questions left. "+
                           " if you want to revise "+SessionAttributes.noOfCorrect+" questions, just say "+
                           " I want to revise "+SessionAttributes.noOfCorrect+" easy questions ";
            return handlerInput.responseBuilder
              .speak(response)
              .withShouldEndSession(false)
              .getResponse();
          }
        questionArray=generateEasyQuestions(SessionAttributes.responses,SessionAttributes.noOfRevisionQuestions);
        break;
      case 'medium':
          if((SessionAttributes.noOfIncorrect < (SessionAttributes.noOfRevisionQuestions+1)/2)||
            (SessionAttributes.noOfCorrect < (SessionAttributes.noOfRevisionQuestions+1)/2))
          {
            var numberOfMedium = 2*Math.min(SessionAttributes.noOfCorrect,SessionAttributes.noOfIncorrect);
            console.log(" You have asked for more questions than available noOfCorrect="+SessionAttributes.noOfCorrect);
            let response = " Sorry I only have "+(numberOfMedium-1) +" medium questions left. "+
                           " if you want to revise " + (numberOfMedium-1) +" questions, just say "+
                           " I want to revise " + (numberOfMedium-1)+" medium questions ";
            return handlerInput.responseBuilder
              .speak(response)
              .withShouldEndSession(false)
              .getResponse();
          }
        questionArray=generateMediumQuestions(SessionAttributes.responses,SessionAttributes.noOfRevisionQuestions);
        break;
      case 'difficult':
          if(SessionAttributes.noOfIncorrect < SessionAttributes.noOfRevisionQuestions)
          {
            console.log(" You have asked for more questions than available ");
            let response = " Sorry I only have "+SessionAttributes.noOfIncorrect+" difficult questions left. "+
                           " if you want to revise "+SessionAttributes.noOfIncorrect+" questions, just say "+
                           " I want to revise "+SessionAttributes.noOfIncorrect+" difficult questions ";
            return handlerInput.responseBuilder
              .speak(response)
              .withShouldEndSession(false)
              .getResponse();
          }
        questionArray=generateDiffQuestions(SessionAttributes.responses,SessionAttributes.noOfRevisionQuestions);
        break;
    }

    optionArray = generateOptionArray(questionArray);

    SessionAttributes.optionArray = optionArray;
    SessionAttributes.questionArray = questionArray;
    //attempted noOfCorrect noOfIncorrect responses unattempted

           SessionAttributes.firsttime=true;
           SessionAttributes.question=0;

         


  handlerInput.attributesManager.setSessionAttributes(SessionAttributes);

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
  async handle(handlerInput) {
    

const request = handlerInput.requestEnvelope.request;
    const SessionAttributes = handlerInput.attributesManager.getSessionAttributes();

    let state = " Merry had a little lamb ";

    if(SessionAttributes.firsttime)
    {
      SessionAttributes.firsttime =false;
    
      let statement =  " State the option which has the word that best matches to the following definition. "+SessionAttributes.questionArray[SessionAttributes.question].definition+" . ";
      let choices = " option A "+SessionAttributes.optionArray[SessionAttributes.question][0]+" . "+
                  " option B "+SessionAttributes.optionArray[SessionAttributes.question][1]+" . "+
                  " option C "+SessionAttributes.optionArray[SessionAttributes.question][2]+" . "+
                  " option D. "+SessionAttributes.optionArray[SessionAttributes.question][3];
      handlerInput.attributesManager.setSessionAttributes(SessionAttributes);

      return handlerInput.responseBuilder
      .speak(statement+choices)
      .withShouldEndSession(false)
      .getResponse();

    }

    if (request.intent.slots.Answer
      && request.intent.slots.Answer.resolutions
      && request.intent.slots.Answer.resolutions.resolutionsPerAuthority[0]
      && request.intent.slots.Answer.resolutions.resolutionsPerAuthority[0].status.code === 'ER_SUCCESS_MATCH'
      && request.intent.slots.Answer.value !== "?" && request.intent.slots.Answer.value) {
        SessionAttributes.optionSelected = request.intent.slots.Answer.resolutions.resolutionsPerAuthority[0].values[0].value.name;
        console.log(" we are checking "+SessionAttributes.optionSelected);
   } else if ( SessionAttributes.knows != false ){
    return handlerInput.responseBuilder
    .speak("Sorry I didn't catch that. Please state the word option followed by your choice A, B, C or D")
    .withShouldEndSession(false)
    .getResponse();
   }

   if ( SessionAttributes.knows != false )
    {var temp;
    switch (SessionAttributes.optionSelected) {
      case 'a':
        temp = 0;
        break;
      case 'b':
        temp = 1;
        break;
      case 'c':
        temp = 2;
        break;
      case 'd':
        temp = 3;
        break;
    } }

    if (SessionAttributes.isQuiz){
      if(SessionAttributes.noOfQuizQuestions===1)
      {
        var result;
  
        if(SessionAttributes.questionArray[SessionAttributes.question].word === 
          SessionAttributes.optionArray[SessionAttributes.question][temp])
          {
            result = " correct. ";
            SessionAttributes.responses[SessionAttributes.questionArray[SessionAttributes.question].id] = 1 ;
            SessionAttributes.attempted++;
            SessionAttributes.noOfCorrect++;
            SessionAttributes.unattempted--;
          }
          else  {
            result = " incorrect. Correct answer is the word "+SessionAttributes.questionArray[SessionAttributes.question].word+". ";
            SessionAttributes.responses[SessionAttributes.questionArray[SessionAttributes.question].id] = -1 ;
            SessionAttributes.attempted++;
            SessionAttributes.noOfIncorrect++;
            SessionAttributes.unattempted--;
          }
        
        var response = result+" Quiz has ended. Now would you like to take a quiz or revise or stop. ";
        SessionAttributes.noOfQuizQuestions--;

        const attributesManager = handlerInput.attributesManager;
        const responseBuilder = handlerInput.responseBuilder;
     
        const persistentAttributes = await attributesManager.getPersistentAttributes() || {};
     
       
         persistentAttributes.attempted = SessionAttributes.attempted;
         persistentAttributes.noOfCorrect = SessionAttributes.noOfCorrect;
         persistentAttributes.noOfIncorrect = SessionAttributes.noOfIncorrect;
         persistentAttributes.responses = SessionAttributes.responses;
         persistentAttributes.unattempted = SessionAttributes.unattempted;
         
         SessionAttributes.isQuiz = false;
         attributesManager.setPersistentAttributes(persistentAttributes);
         await attributesManager.savePersistentAttributes();
       

        handlerInput.attributesManager.setSessionAttributes(SessionAttributes);
        return handlerInput.responseBuilder
        .speak(response)
        .withShouldEndSession(false)
        .getResponse();
      }
      else if(SessionAttributes.noOfQuizQuestions>1)
      {
        var result;
        var statement;
        var choices;

        if(SessionAttributes.questionArray[SessionAttributes.question].word === 
          SessionAttributes.optionArray[SessionAttributes.question][temp])
          {
            result = " correct. ";
            SessionAttributes.responses[SessionAttributes.questionArray[SessionAttributes.question].id] = 1;
            SessionAttributes.attempted++;
            SessionAttributes.noOfCorrect++;
            SessionAttributes.unattempted--;
          }
          else{
            result = " incorrect. Correct answer is the word "+SessionAttributes.questionArray[SessionAttributes.question].word+". ";
            SessionAttributes.responses[SessionAttributes.questionArray[SessionAttributes.question].id] = -1;
            SessionAttributes.attempted++;
            SessionAttributes.noOfIncorrect++;
            SessionAttributes.unattempted--;
          }

        SessionAttributes.question++;
        SessionAttributes.noOfQuizQuestions--;

        statement =  " the next definition is. "+SessionAttributes.questionArray[SessionAttributes.question].definition+" . ";
        choices = " option A "+SessionAttributes.optionArray[SessionAttributes.question][0]+" . "+
                  " option B "+SessionAttributes.optionArray[SessionAttributes.question][1]+" . "+
                  " option C "+SessionAttributes.optionArray[SessionAttributes.question][2]+" . "+
                  " option D. "+SessionAttributes.optionArray[SessionAttributes.question][3];
      

        var response = result + statement + choices;
        handlerInput.attributesManager.setSessionAttributes(SessionAttributes);
        return handlerInput.responseBuilder
        .speak(response)
        .withShouldEndSession(false)
        .getResponse();
      }
      else{return handlerInput.responseBuilder
      .speak("Error")
      .withShouldEndSession(false)
      .getResponse();
    }
    }

    else if (SessionAttributes.isRevision)
    {
      if(SessionAttributes.noOfRevisionQuestions===1)
      {
        var result;
  
        if(SessionAttributes.questionArray[SessionAttributes.question].word === 
          SessionAttributes.optionArray[SessionAttributes.question][temp])
          {
            result = " correct. ";
            if (SessionAttributes.responses[SessionAttributes.questionArray[SessionAttributes.question].id] === -1)
            {
              SessionAttributes.noOfIncorrect--;
              SessionAttributes.noOfCorrect++;
            }
            SessionAttributes.responses[SessionAttributes.questionArray[SessionAttributes.question].id] = 1 ;
          
          }
          else{
              result = " incorrect. Correct answer is the word "+SessionAttributes.questionArray[SessionAttributes.question].word+". ";
            if (SessionAttributes.responses[SessionAttributes.questionArray[SessionAttributes.question].id] === 1)
            {
              SessionAttributes.noOfIncorrect++;
              SessionAttributes.noOfCorrect--;
            }
            SessionAttributes.responses[SessionAttributes.questionArray[SessionAttributes.question].id] = -1 ;
          }

        var response = result+" Revision has ended. Now would you like to take a quiz or revise or stop. ";
        SessionAttributes.noOfRevisionQuestions--;

        const attributesManager = handlerInput.attributesManager;
        const responseBuilder = handlerInput.responseBuilder;
     
        const persistentAttributes = await attributesManager.getPersistentAttributes() || {};
     
       
         persistentAttributes.attempted = SessionAttributes.attempted;
         persistentAttributes.noOfCorrect = SessionAttributes.noOfCorrect;
         persistentAttributes.noOfIncorrect = SessionAttributes.noOfIncorrect;
         persistentAttributes.responses = SessionAttributes.responses;
         persistentAttributes.unattempted = SessionAttributes.unattempted;
         
         SessionAttributes.isQuiz = false;
         attributesManager.setPersistentAttributes(persistentAttributes);
         await attributesManager.savePersistentAttributes();
       

        handlerInput.attributesManager.setSessionAttributes(SessionAttributes);
        return handlerInput.responseBuilder
        .speak(response)
        .withShouldEndSession(false)
        .getResponse();
      }
      else if(SessionAttributes.noOfRevisionQuestions>1)
      {
        var result;
        var statement;
        var choices;

        if(SessionAttributes.questionArray[SessionAttributes.question].word === 
          SessionAttributes.optionArray[SessionAttributes.question][temp])
          {
            result = " correct. ";
            if (SessionAttributes.responses[SessionAttributes.questionArray[SessionAttributes.question].id] === -1)
            {
              SessionAttributes.noOfIncorrect--;
              SessionAttributes.noOfCorrect++;
            }
            SessionAttributes.responses[SessionAttributes.questionArray[SessionAttributes.question].id] = 1;
          }
          else{
            result = " incorrect. Correct answer is the word "+SessionAttributes.questionArray[SessionAttributes.question].word+". ";
            if (SessionAttributes.responses[SessionAttributes.questionArray[SessionAttributes.question].id] === 1)
            {
              SessionAttributes.noOfIncorrect++;
              SessionAttributes.noOfCorrect--;
            }
            SessionAttributes.responses[SessionAttributes.questionArray[SessionAttributes.question].id] = -1;
          }

        SessionAttributes.question++;
        SessionAttributes.noOfRevisionQuestions--;

        statement =  " the next definition is. "+SessionAttributes.questionArray[SessionAttributes.question].definition+" . ";
        choices = " option A "+SessionAttributes.optionArray[SessionAttributes.question][0]+" . "+
                  " option B "+SessionAttributes.optionArray[SessionAttributes.question][1]+" . "+
                  " option C "+SessionAttributes.optionArray[SessionAttributes.question][2]+" . "+
                  " option D. "+SessionAttributes.optionArray[SessionAttributes.question][3];
      

        var response = result + statement + choices;
        handlerInput.attributesManager.setSessionAttributes(SessionAttributes);
        return handlerInput.responseBuilder
        .speak(response)
        .withShouldEndSession(false)
        .getResponse();
      }
      else
      {
        return handlerInput.responseBuilder
        .speak("Error")
        .withShouldEndSession(false)
        .getResponse();
      }
    }

    else
    {
      return handlerInput.responseBuilder
      .speak("Choose quiz or revision")
      .withShouldEndSession(false)
      .getResponse();
    }
  
},
};

const RepeatQuestionHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'RepeatQuestionIntent';
  },
  handle(handlerInput) {
      const SessionAttributes = handlerInput.attributesManager.getSessionAttributes();

      let statement =  " State the option which has the word that best matches to the following definition. "+SessionAttributes.questionArray[SessionAttributes.question].definition+" . ";
      let choices = " option A "+SessionAttributes.optionArray[SessionAttributes.question][0]+" . "+
                    " option B "+SessionAttributes.optionArray[SessionAttributes.question][1]+" . "+
                    " option C "+SessionAttributes.optionArray[SessionAttributes.question][2]+" . "+
                    " option D. "+SessionAttributes.optionArray[SessionAttributes.question][3];
    
      return handlerInput.responseBuilder
      .speak(statement + choices)
      .reprompt(statement + choices)
      .getResponse();
      
  },
};

const RepeatOptionsHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'RepeatOptionsIntent';
  },
  handle(handlerInput) {
      const SessionAttributes = handlerInput.attributesManager.getSessionAttributes();

      let choices = " option A "+SessionAttributes.optionArray[SessionAttributes.question][0]+" . "+
                    " option B "+SessionAttributes.optionArray[SessionAttributes.question][1]+" . "+
                    " option C "+SessionAttributes.optionArray[SessionAttributes.question][2]+" . "+
                    " option D. "+SessionAttributes.optionArray[SessionAttributes.question][3];
    
      return handlerInput.responseBuilder
      .speak(choices)
      .reprompt(choices)
      .getResponse();
      
  },
};

const IDontKnowHandler = {
  canHandle(handlerInput){
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
     && request.intent.name === 'IDontKnowIntent';
  },
  async handle(handlerInput){
    const SessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    var result ="Correct answer is the word "+SessionAttributes.questionArray[SessionAttributes.question].word+" . ";

    if(SessionAttributes.isQuiz){
      SessionAttributes.noOfIncorrect++;
      SessionAttributes.attempted++;
      SessionAttributes.unattempted--;

      SessionAttributes.question++;
      SessionAttributes.noOfQuizQuestions--;

    } else if (SessionAttributes.isRevision){
      
      if ((SessionAttributes.responses[SessionAttributes.questionArray[SessionAttributes.question].id] === 1))
      {
        SessionAttributes.responses[SessionAttributes.questionArray[SessionAttributes.question].id] === -1;
        SessionAttributes.noOfCorrect--;
        SessionAttributes.noOfIncorrect++;
      }else{
        console.log(" no change ");
      }

      SessionAttributes.question++;
      SessionAttributes.noOfRevisionQuestions--;

    }else{
      console.log("something is wrong");
      return handlerInput.responseBuilder
    .speak("woah")
    .withShouldEndSession(false)
    .getResponse();
    }

    if((SessionAttributes.noOfQuizQuestions ===0 && SessionAttributes.isQuiz === true)||(SessionAttributes.noOfRevisionQuestions===0 && SessionAttributes.isRevision=== true))
    {
      var response = result+" That was the last question. Now would you like to take a quiz or revise or stop. ";

      const attributesManager = handlerInput.attributesManager;
      const responseBuilder = handlerInput.responseBuilder;
   
      const persistentAttributes = await attributesManager.getPersistentAttributes() || {};
   
     
       persistentAttributes.attempted = SessionAttributes.attempted;
       persistentAttributes.noOfCorrect = SessionAttributes.noOfCorrect;
       persistentAttributes.noOfIncorrect = SessionAttributes.noOfIncorrect;
       persistentAttributes.responses = SessionAttributes.responses;
       persistentAttributes.unattempted = SessionAttributes.unattempted;
       
       SessionAttributes.isQuiz = false;
       SessionAttributes.isRevision = false;
       attributesManager.setPersistentAttributes(persistentAttributes);
       await attributesManager.savePersistentAttributes();
     

      handlerInput.attributesManager.setSessionAttributes(SessionAttributes);
      return handlerInput.responseBuilder
      .speak(response)
      .withShouldEndSession(false)
      .getResponse();
    }

console.log("yahatak aa gaya noOfRevisionQuestions = "+SessionAttributes.noOfRevisionQuestions+" isRevision = "+SessionAttributes.isRevision);
    var statement =  " the next definition is. "+SessionAttributes.questionArray[SessionAttributes.question].definition+" . ";
    var choices = " option A "+SessionAttributes.optionArray[SessionAttributes.question][0]+" . "+
              " option B "+SessionAttributes.optionArray[SessionAttributes.question][1]+" . "+
              " option C "+SessionAttributes.optionArray[SessionAttributes.question][2]+" . "+
              " option D. "+SessionAttributes.optionArray[SessionAttributes.question][3];
  console.log("yahapebhi aa gaya");

    var response = result + statement + choices;
    handlerInput.attributesManager.setSessionAttributes(SessionAttributes);
    return handlerInput.responseBuilder
    .speak(response)
    .withShouldEndSession(false)
    .getResponse();


  },
};

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

const skillBuilder = Alexa.SkillBuilders.standard();

function begin(array1) {
    var i = 0;

    while(array1[i] != 0)
        i++;

    return i;
}

function questionQuiz(array ) {
     var i = begin(array);
     var Question; 

     if (i === array.length)
     {
        Question = {definition:0,word:0,id:-1};
        return Question;
     }

     Question = {definition:data[i].DEFINITION , word:data[i].WORD, id:i}

     array[i] = 2;

     return Question;
}

function generateQuiz (array,n){
     var questions = [];

     for(var i = 0; i < n ; i++)
     {
         var q = questionQuiz(array);

         questions.push(q);
     }

     return questions;
}

function generateOptionArray (qarr)
 {
    var len = qarr.length;
    var ans = [];

    for(var i = 0; i < len ; i++)
    {
        var answer = optionGenerator(qarr[i]);
        ans.push(answer);
    }

    return ans;
}

function easyArray (array)
 {
    var len = begin(array);
    var easy = [];

    for( var i = 0; i < len ; i++ )
    {
        if(array[i] == 1)
        {
            easy.push(i);
        }
    }

    shuffle(easy);

    return easy;
}

function diffArray (array)
 {
    var len = begin(array);
    var diff = [];

    for( var i = 0; i < len ; i++ )
    {
        if(array[i] == -1)
        {
            diff.push(i);
        }
    }

    shuffle(diff);

    return diff;
}
 
function generateEasyQuestions (array,n) {
    var easyarr = easyArray(array);
    var Questions = [];

    for(var i = 0 ; i < n ; i++)
    {
        var index = easyarr[i];

        var q = {definition:data[index].DEFINITION , word:data[index].WORD, id:index};

        Questions.push(q);
    }

    return Questions;
}

function generateDiffQuestions (array,n) {
    var diffarr = diffArray(array);
    var Questions = [];

    for(var i = 0 ; i < n ; i++)
    {
        var index = diffarr[i];

        var q = {definition:data[index].DEFINITION , word:data[index].WORD, id:index};

        Questions.push(q);
    }

    return Questions;
}

function generateMediumQuestions (array,n) {
    var i = n/2;

    var Questions = [];

    var easyarr = generateEasyQuestions (array,i);
    var diffarr = generateDiffQuestions (array,n-i);

    for(var j = 0 ; j < easyarr.length ; j++)
    {
        Questions.push(easyarr[j]);
    }

    for(var j = 0 ; j < diffarr.length; j++)
    {
        Questions.push(diffarr[j]);
    }

    shuffle(Questions);
    shuffle(Questions);

    return Questions;
}

function optionGenerator(Question) {
    var options = ["","","",""];
    options[0] = Question.word;

    for(var i = 1; i < 4 ; i++)
    {
        var j = Math.floor(Math.random()*1161);

        while (j == Question.id)
        j = Math.floor(Math.random()*1161);

        options[i] = data[j].WORD;
    }

    shuffle(options);
    shuffle(options);

    var t = options[1];
    options[1] = options[2];
    options[2] = t;

    shuffle(options);

    return options;
}

function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
}


exports.handler = skillBuilder.addRequestHandlers(
  LaunchHandler,
  QuizHandler,
  ReviseHandler,    
  AnswerIntentHandler,
  RepeatQuestionHandler,
  RepeatOptionsHandler,
  IDontKnowHandler,
  HelpHandler,
  ExitHandler,
  SessionEndedRequestHandler)
  .addErrorHandlers(ErrorHandler)
  .withTableName(table)
  .withAutoCreateTable(true)
  .lambda();