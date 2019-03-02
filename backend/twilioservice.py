from model import DB

class twilioservice:
	def __init__(self):
		self.db = DB()


	def generateTwilioResponse(number, message):
		factory = twilioservice()
		if factory.db.ifUserExists(number):
			print("Exists")
			words = message.split(' ')
			print(words)
			if(words[0].lower() != "pay"):
				return "BAD1"
			elif factory.db.ifUserExists(words[1]) == False:
				return "BAD2"
			elif int(factory.db.getCurrentBalance(number)) < int(str(words[2])):
				return "BAD3"
			else:
				if factory.makeAPayment(number, words[1], words[2]):
					return True 
				else: 
					return "BAD5"


		else:
			return False



	def insertMessage(self, number, message):
		self.db.insertMessage(number, message)

	def checkIfHasAmount(self, number, amountToCheck):
		balance = self.db.getCurrentBalance(number)
		if balance >= amountToCheck:
			return True
		else: 
			return False

	def makeAPayment(self, numberSender, numberReceiver, amountToCheck):
		if self.checkIfHasAmount(numberSender, amountToCheck):
			amountOfSender = self.db.getCurrentBalance(numberSender)
			amountOfReceiver = self.db.getCurrentBalance(numberReceiver)

			amountOfSender -= amountToCheck
			amountOfReceiver += amountToCheck


			self.db.setCurrentBalance(numberSender, amountOfSender)
			self.db.setCurrentBalance(numberReceiver, amountOfReceiver)
			return True
		else:
			return False 


ts = twilioservice()

print(ts.makeAPayment(694, 512, 3))


	
