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

There are 2 main functions of this library:

	var er_watcher = new ERWatcher("Capital");
	er_watcher.getFeedData(processFeedData);

These 2 lines:
- Create a new 'ERWatcher' object that holds all the information for the 'Capital' Feed
- getFeedData - retrieves the data for the feed

The object is returned as:

	data_loaded: true
	date_format: "ddd, DD MMM YYYY HH:mm:ss"
	feed_name: "Capital"
	feed_url: "https://hcafeeds.medcity.net/rss/er/cap_rss_feed.xml"
	wait_times: Array[11]

Where 'wait_times' is an array of wait times for that feed.

### er_watcher.GetFacility(facilityName)

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