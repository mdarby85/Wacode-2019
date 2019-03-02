from model import DB

class frontendservice:

	def __init__(self):
		self.db = DB()

	def checkIfValidUser(self, number, password):
		user = self.db.getUser(number)
		if user == None:
			return False
		print(user)
		if user["password"] == password:
			return user
		return False

	def getUser(self, number):
		return self.db.getUser(number)





m = frontendservice()

print(m.checkIfValidUser("+15126946416", "11"))
