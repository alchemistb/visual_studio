# ***********************************************************************************************
# Sourced: https://medium.com/@Dakshil/creating-a-twitter-bot-with-python-cb042fb5bdb          	*
# ***********************************************************************************************
# The bot is written completely in Python. You supply a keyword to the bot. 					*
# For the sake of censorship lets say I gave the keyword: shoes. 								*
# Now, the latest tweet containing this word is fetched, this word is replaced by: cars, 		*
# and this modified tweet is tweeted back to the user.											*
# ***********************************************************************************************

from twitter import Twitter, OAuth, TwitterHTTPError
import json
from time import sleep

try:
	OAUTH_TOKEN = "2690170622-GbgYSzKA1qVkpX0FyrPqCHJfxwtD7aae06VGje6"
	OAUTH_SECRET ="u2GksfA8hXWln6PxMNdRxtft5X27WL79W3Tbi70FKT1Wh"
	CONSUMER_KEY = "RCKIrC8VhRfZsbEcwtGGNGzeG"
	CONSUMER_SECRET ="Y4tvXnlijAhBZcwPzpHxMcwJ2NdiOeyPCtu9GBRIemKnKML7Qy"
	TWITTER_HANDLE = "bglad2014"
	t = Twitter(auth=OAuth(OAUTH_TOKEN, OAUTH_SECRET, CONSUMER_KEY, CONSUMER_SECRET))
	

	def theTweet(sent):
		#This is the part which actually posts the tweet
		if len(sent)<=140:
			#Twitter allows only 140 character tweets
			print 'Tweetable'
			t.statuses.update(status=sent)
		else:
			print '140 characters crossed!'
	

	def theBrain():
		#foo = {'rt2win','rt to win','rt 2 win', 'retweet to win'}
		foo = {'shoes'}
		#Fetch n number of tweets where n is given by count, having the keyword given in q
		#Search for tweets that have "retweet to win" in the message
		statement = t.search.tweets(q = foo, count = 1)
		#statement = t.search.tweets(q = 'rt to win', count = 1)
		#statement = t.search.tweets(q = 'rt 2 win', count = 1)
		#statement = t.search.tweets(q = 'retweet to win', count = 1)

		#Tweets are fetched in JSON format with a lot or related data
		tweets = statement['statuses']
		print 'tweets statement status'
		print tweets
		print '\n'
		#process each tweet individually
		#Retweet message to other users and include the original tweet message
		for statement in tweets:
			text=str(statement['text'].encode("utf-8"))
			print 'text'
			print text
			print '\n'
			print '\n'
			handle = str(statement['user']['screen_name'])
			sent='@' + handle + ' ' + text
			print 'sent'
			print sent
			print '\n'
			theTweet(sent)
		
		
	# Use this option to loop the code to keep running indefinitely
	# def main():
	#	while True:
	#	theBrian()
	# To prevent abuse of the twitter API and usage limit, calling it only once an hour.
	#	sleep(3600)
	
	# Use this option to manually run the code 	
	def main():
		theBrain()
		
	if __name__=="__main__":
		main()
		

except Exception as err:
		errmsg = 'There has been an error!'
		print(errmsg)		
	