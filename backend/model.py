from pymongo import MongoClient

NUMBER = "number"

CURRENTBALANCE = "currentBalance"

FIRSTNAME = "firstname"

LASTNAME = "lastname"

PASSWORD = "password"

PAYMENTINFO = "paymentinfo"

MESSAGE = "message"

class DB:
	def __init__(self):
		self.connection = MongoClient('mongodb://andrew_bury:840932Drew@ds157895.mlab.com:57895/wacode')
		self.db = self.connection['wacode']
		self.messages = self.db['messsages']
		self.users = self.db['users']

	def insertUser(self, number, firstname, lastname, password, currentBalance, paymentinfo):
		if self.getUser(number) == None:
			dic = {NUMBER: number, CURRENTBALANCE: currentBalance, FIRSTNAME: firstname, LASTNAME: lastname, PASSWORD: password, PAYMENTINFO: paymentinfo}
			print("Here2")
			self.users.insert_one(dic)

	def getUser(self, number):
		query = {NUMBER: number}
		curser = self.users.find_one(query)
		return curser

	def ifUserExists(self, number):
		dic = {NUMBER: number}
		if self.users.count_documents(dic) > 0:
			return True
		else:
			return False

	def insertMessage(self, number, message):
		dic = {NUMBER: number, MESSAGE: message}
		self.messsages.insert_one(dic)

	def getCurrentBalance(self, number):
		if self.ifUserExists(number):
			query = {NUMBER: number}
			result = self.users.find_one(query)
			return result[CURRENTBALANCE]
		else:
			return -1

	def setCurrentBalance(self, number, currentBalance):
		query = dict()
		query[NUMBER] = number

		newBalance = dict()
		newBalance[CURRENTBALANCE] = currentBalance

		theBalance = {"$set": {CURRENTBALANCE: currentBalance}}
		self.users.update_many(query, theBalance)



db = DB()

db.insertUser("+1512", "500", "Drew", "mehoy", "111", "visa")
