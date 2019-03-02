# Building an API for google geocode site


import urllib
import json

# API Keys:
locu_api = 'd7c5dd151075f07b67adde1bf6861bfdf355d30b'
facebook_tkn = 'CAACEdEose0cBAOUPZB656cH3aZAPGnd2cIIZAyZB4odqeSZARAfZCb0uwKYShmt1vi4QbxMT4LfqiFgJt3tjYDTDMWEngrLmigFYNdRaGgZBftQ1fmkTT2i92x9DBgXXgUaXMPobbkfzdsLc1q4iZA0eA8ZBkYgINDRba3tx7t7JojCm2Vo4fnc774BNBqDeRs1RZBNbOLUDQiOY6ZBOatLzO6YiXzMZAWZATBW0ZD'
#twitter_tkn = '2690170622-GbgYSzKA1qVkpX0FyrPqCHJfxwtD7aae06VGje6'
twitter_tkn2='2690170622-FMygTTbauz4R70gft0XhQxaQctm7k0utCaR0q9N'
fullcontact_api = 'ecc2a8b8d5be8a75'

# API URL:
# Original Locu URL:
# https://api.locu.com/v1_0/venue/search/?has_menu=true&locality=Newport%20Beach&category=restaurant&api_key=d7c5dd151075f07b67adde1bf6861bfdf355d30b


locu_url =  'https://api.locu.com/v1_0/venue/search/?'


while True:
  address = raw_input('Enter location please: ')

# If a return character is entered and assigned to address, exit the if loop, else continue with the data
# assigned to address and build the url request

  if len(address) < 1: break

# Use the urlencode() to build the API URL
  url = locu_url + urllib.urlencode({'has_menu':'true', 'locality': address,'category':'restaurant','api_key':locu_api})

  print 'Retrieving', url

# open url using urllib.urlopen(), and assign it to 'uh'
  uh = urllib.urlopen(url)

# Read uh and assign it to 'data'
  data = uh.read()

# Check the number of characters in data with length function
  print 'Retrieved', len(data),'characters'

# Try and except statements to make sure data is valid or not
# Use json.loads to load string 'data' to python-able format, as a string, and assign to 'js'
  try:  js = json.loads(str(data))
  except: js = None


# print out js data using json.dumps with an indention of 4 spaces
  print json.dumps(js, indent=4)
  print '\n'
  print '\n'

# Iterate through js['objects'] to find specific items
  for item in js['objects']:
    print item['name'], item['phone'],item['street_address'],item['website_url']

