from flask import Flask, request
from twilio.twiml.messaging_response import Message, MessagingResponse
app = Flask(__name__)
from twilioservice import twilioservice

@app.route("/")
def hello():
    return "Hello World!"


@app.route("/sms", methods=['POST'])
def sms():
    number = request.form['From']
    message = request.form['Body']
    print(number)
    messageToSend = twilioservice.generateTwilioResponse(number, message)
    if messageToSend == False:
    	resp = MessagingResponse()
    	resp.message("You are not a user :/")
    	return str(resp)
    elif messageToSend == "BAD1":
    	resp = MessagingResponse()
    	resp.message("You did not give the pay command")
    	return str(resp)
    elif messageToSend == "BAD2":
    	resp = MessagingResponse()
    	resp.message("You did not give a correct user number")
    	return str(resp)
    elif messageToSend == "BAD3":
    	resp = MessagingResponse()
    	resp.message("You did not have sufficient funds in the account")
    	return str(resp)
    elif messageToSend == "BAD4":
    	resp = MessagingResponse()
    	resp.message("Could not make payment")
    	return str(resp)
    else:
    	resp = MessagingResponse()
    	resp.message("Payment was made to user")
    	return str(resp)
    
   	



if __name__ == '__main__':
    app.run()


