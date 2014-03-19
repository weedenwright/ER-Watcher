# ER Watcher

## Overview

This library stores the URLs of all the public facing HCA divisional ER wait time
XML feeds and will pull all facilities for a feed or a specific facility when
requested.

## Prerequisites
- jQuery - 			//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
- Google's JSAPI - 	//www.google.com/jsapi

## API

### ERWatcher

The ERWatcher object holds all the information for the feed name passed to it.

	var er_watcher = new ERWatcher("Capital");

### getFeedData(callback)

Once you have an ERWatcher object created, you can call getFeedData with a callback function.

	er_watcher.getFeedData(processFeedData);

As the feed request is made 'asynchronously', it REQUIRES a callback function be passed to it so that the returned results can be accessed. This can be very fast, or can take awhile depending on several factors. Check the console for errors in case it times out.

The callback function is then passed an object that looks like this:

	data_loaded: true
	date_format: "ddd, DD MMM YYYY HH:mm:ss"
	feed_name: "Capital"
	feed_url: "https://hcafeeds.medcity.net/rss/er/cap_rss_feed.xml"
	wait_times: Array[11]

Where 'wait_times' is an array of wait times for that feed.

### getFacility(facilityName)

After creating a new ERWatcher, you can run this command:

	var facility_info = er_watcher.getFacility("Frankfort");

The object facility_info will then be set to:

	category: "Kentucky"
	commments: "FRANKFORT REGIONAL MED CENTER ER Wait Time"
	er_time: "10 Mins"
	facility: "Frankfort"
	phone: "502-875-5240"
	pub_date: "Wed, 19 Mar 2014 00:13:05 EDT"
	url: "www.frankfortregional.com"	

Which is all the data available for that particular facility.

## Available Divisions / Feeds
	Capital
	Continental
	Central West Texas
	Delta
	East Florida
	Far West
	Gulf Coast
	Midwest
	Mountain
	North Florida
	North Texas
	Richmond
	San Antonio
	South Atlantic
	Tristar
	West Florida

