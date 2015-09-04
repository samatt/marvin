import urllib2
import time
import requests

def internet_on():
    try:
		r = urllib2.urlopen('http://www.google.com/')
		r.read()
		r = urllib2.urlopen('http://127.0.0.1:3000/alive')
	  	r.read()
		return True
    except urllib2.URLError as err: print err
    return False


if __name__ == '__main__':
	while True:
	  	try:
	  		print "HERE"
	  		if internet_on():
	  			print "Connected!"
	  		else:
	  			print "Disconnected"
	  		time.sleep(5)
	  	except e:
	  		print e
	  		print "Goodbye!"
	  		exit()
