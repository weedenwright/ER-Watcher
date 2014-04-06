/************************************************
ER Watcher
Author: Jeremiah Weeden-Wright
Desc: This JavaScript will pull the requested feed and populate
a JavaScript object with all the values from the feed

AVAILABLE FEEDS:
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

REQUIRES:
- jQuery
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
- Google JSAPI
	<script type="text/javascript" src="//www.google.com/jsapi"></script>
************************************************/

// STEP 1 - Initialize google feeds for AJAX query of ER Feeds
google.load("feeds", "1");

// STEP 2 - Console fix (for less-than-adaquate browsers)
if(typeof console === "undefined") {
	console = {
		log: function() { }
	};
}

// STEP 3 - Function to list of all HCA ER Wait feeds
function buildFeedList() {
	var ER_WAIT_TIME_FEEDS = [];

	var ER_WAIT_CAP_FEED = [];
	ER_WAIT_CAP_FEED.feed_name = 'Capital';
	ER_WAIT_CAP_FEED.feed_url = 'https://hcafeeds.medcity.net/rss/er/cap_rss_feed.xml';
	ER_WAIT_CAP_FEED.date_format = 'ddd, DD MMM YYYY HH:mm:ss';
	ER_WAIT_TIME_FEEDS.push(ER_WAIT_CAP_FEED);

	var ER_WAIT_CON_FEED = [];
	ER_WAIT_CON_FEED.feed_name = 'Continental';
	ER_WAIT_CON_FEED.feed_url = 'https://hcafeeds.medcity.net/rss/er/con_rss_feed.xml';
	ER_WAIT_CON_FEED.date_format = 'ddd, DD MMM YYYY HH:mm:ss';
	ER_WAIT_TIME_FEEDS.push(ER_WAIT_CON_FEED);

	var ER_WAIT_CWT_FEED = [];
	ER_WAIT_CWT_FEED.feed_name = 'Central West Texas';
	ER_WAIT_CWT_FEED.feed_url = 'https://hcafeeds.medcity.net/rss/er/cwt_rss_feed.xml';
	ER_WAIT_CWT_FEED.date_format = 'ddd, DD MMM YYYY HH:mm:ss';
	ER_WAIT_TIME_FEEDS.push(ER_WAIT_CWT_FEED);

	var ER_WAIT_DVD_FEED = [];
	ER_WAIT_DVD_FEED.feed_name = 'Delta';
	ER_WAIT_DVD_FEED.feed_url = 'https://hcafeeds.medcity.net/rss/er/dvd_rss_feed.xml';
	ER_WAIT_DVD_FEED.date_format = 'ddd, DD MMM YYYY HH:mm:ss';
	ER_WAIT_TIME_FEEDS.push(ER_WAIT_DVD_FEED);

	var ER_WAIT_EFL_FEED = [];
	ER_WAIT_EFL_FEED.feed_name = 'East Florida';
	ER_WAIT_EFL_FEED.feed_url = 'https://hcafeeds.medcity.net/rss/er/rss_feed.xml';
	ER_WAIT_EFL_FEED.date_format = 'ddd, DD MMM YYYY HH:mm:ss';
	ER_WAIT_TIME_FEEDS.push(ER_WAIT_EFL_FEED);

	var ER_WAIT_FWD_FEED = [];
	ER_WAIT_FWD_FEED.feed_name = 'Far West';
	ER_WAIT_FWD_FEED.feed_url = 'https://hcafeeds.medcity.net/rss/er/fwd_rss_feed.xml';
	ER_WAIT_FWD_FEED.date_format = 'ddd, DD MMM YYYY HH:mm:ss';
	ER_WAIT_TIME_FEEDS.push(ER_WAIT_FWD_FEED);

	var ER_WAIT_GCD_FEED = [];
	ER_WAIT_GCD_FEED.feed_name = 'Gulf Coast';
	ER_WAIT_GCD_FEED.feed_url = 'https://hcafeeds.medcity.net/rss/er/gcd_rss_feed.xml';
	ER_WAIT_GCD_FEED.date_format = 'ddd, DD MMM YYYY HH:mm:ss';
	ER_WAIT_TIME_FEEDS.push(ER_WAIT_GCD_FEED);

	var ER_WAIT_MWD_FEED = [];
	ER_WAIT_MWD_FEED.feed_name = 'Midwest';
	ER_WAIT_MWD_FEED.feed_url = 'https://hcafeeds.medcity.net/rss/er/mwd_rss_feed.xml';
	ER_WAIT_MWD_FEED.date_format = 'ddd, DD MMM YYYY HH:mm:ss';
	ER_WAIT_TIME_FEEDS.push(ER_WAIT_MWD_FEED);

	var ER_WAIT_MTN_FEED = [];
	ER_WAIT_MTN_FEED.feed_name = 'Mountain';
	ER_WAIT_MTN_FEED.feed_url = 'https://hcafeeds.medcity.net/rss/er/mtn_rss_feed.xml';
	ER_WAIT_MTN_FEED.date_format = 'ddd, DD MMM YYYY HH:mm:ss';
	ER_WAIT_TIME_FEEDS.push(ER_WAIT_MTN_FEED);

	var ER_WAIT_NFL_FEED = [];
	ER_WAIT_NFL_FEED.feed_name = 'North Florida';
	ER_WAIT_NFL_FEED.feed_url = 'https://hcafeeds.medcity.net/rss/er/nfl_rss_feed.xml';
	ER_WAIT_NFL_FEED.date_format = 'ddd, DD MMM YYYY HH:mm:ss';
	ER_WAIT_TIME_FEEDS.push(ER_WAIT_NFL_FEED);

	var ER_WAIT_NTX_FEED = [];
	ER_WAIT_NTX_FEED.feed_name = 'North Texas';
	ER_WAIT_NTX_FEED.feed_url = 'https://hcafeeds.medcity.net/rss/er/ntx_rss_feed.xml';
	ER_WAIT_NTX_FEED.date_format = 'ddd, DD MMM YYYY HH:mm:ss';
	ER_WAIT_TIME_FEEDS.push(ER_WAIT_NTX_FEED);

	var ER_WAIT_RIC_FEED = [];
	ER_WAIT_RIC_FEED.feed_name = 'Richmond';
	ER_WAIT_RIC_FEED.feed_url = 'https://hcafeeds.medcity.net/rss/er/ric_rss_feed.xml';
	ER_WAIT_RIC_FEED.date_format = 'ddd, DD MMM YYYY HH:mm:ss';
	ER_WAIT_TIME_FEEDS.push(ER_WAIT_RIC_FEED);

	var ER_WAIT_TXA_FEED = [];
	ER_WAIT_TXA_FEED.feed_name = 'San Antonio';
	ER_WAIT_TXA_FEED.feed_url = 'https://hcafeeds.medcity.net/rss/er/txa_rss_feed.xml';
	ER_WAIT_TXA_FEED.date_format = 'ddd, DD MMM YYYY HH:mm:ss';
	ER_WAIT_TIME_FEEDS.push(ER_WAIT_TXA_FEED);

	var ER_WAIT_SAD_FEED = [];
	ER_WAIT_SAD_FEED.feed_name = 'South Atlantic';
	ER_WAIT_SAD_FEED.feed_url = 'https://hcafeeds.medcity.net/rss/er/sad_rss_feed.xml';
	ER_WAIT_SAD_FEED.date_format = 'ddd, DD MMM YYYY HH:mm:ss';
	ER_WAIT_TIME_FEEDS.push(ER_WAIT_SAD_FEED);

	var ER_WAIT_TRI_FEED = [];
	ER_WAIT_TRI_FEED.feed_name = 'Tristar';
	ER_WAIT_TRI_FEED.feed_url = 'https://hcafeeds.medcity.net/rss/er/tri_rss_feed.xml';
	ER_WAIT_TRI_FEED.date_format = 'ddd, DD MMM YYYY HH:mm:ss';
	ER_WAIT_TIME_FEEDS.push(ER_WAIT_TRI_FEED);

	var ER_WAIT_WFL_FEED = [];
	ER_WAIT_WFL_FEED.feed_name = 'West Florida';
	ER_WAIT_WFL_FEED.feed_url = 'https://hcafeeds.medcity.net/rss/er/wfl_rss_feed.xml';
	ER_WAIT_WFL_FEED.date_format = 'ddd, DD MMM YYYY HH:mm:ss';
	ER_WAIT_TIME_FEEDS.push(ER_WAIT_WFL_FEED);
	
	return ER_WAIT_TIME_FEEDS;
}

// STEP 4 - Create the Object that holds all the ER Watcher variables
var ERWatcher = function(feed_name) {
	// Get the feed list
	var feed_list = buildFeedList();
	// Find the matching feed
	for(var i = 0; i < feed_list.length; i++) {
		var feed_list_item = feed_list[i];
		if(feed_name === feed_list_item.feed_name) {
			var er_watcher = this;
			er_watcher.feed_name = feed_list_item.feed_name;
			er_watcher.feed_url = feed_list_item.feed_url;
			er_watcher.date_format = feed_list_item.date_format;
			er_watcher.data_loaded = false;
			return;
		}
	}
	// if we get here, the feed wasn't in our list
	this.feed_name = "Feed Not Found: " + feed_name;
	this.feed_url = undefined;
	this.date_format = undefined;
};

// STEP 5 - Create the prototype function for the ER Watcher that retrieves the data from the feed
ERWatcher.prototype = {
	getFeedData: function(successCallBack) {
		// Setup random extra on URL to avoid google caching URL
		var non_cache = "?"+Math.random();
		var feed_url = this.feed_url + non_cache;

		// Get the feed usign Google feeds
		var feed = new google.feeds.Feed(feed_url);
		feed.setResultFormat(google.feeds.Feed.XML_FORMAT);

		// How many child elements to grab (default is 4, most ER Wait times feeds are larger than that though)
		feed.setNumEntries(50);

		// Call the feed's load function and, once complete, call the successCallBack function passed to getFeedData
		var build_watcher = this;
		feed.load(function(result) {
			if (!result.error) {
				var items = result.xmlDocument.getElementsByTagName('item');
				var feed_results = [];
				if (items.length > 0) {
					jQuery(items).each(function() {
						// Add all variables from feed into JS array
						var feed_result = {};
						feed_result.facility = this.getElementsByTagName("title")[0].firstChild.nodeValue;
						feed_result.pub_date = this.getElementsByTagName("pubDate")[0].firstChild.nodeValue;
						feed_result.er_time = this.getElementsByTagName("description")[0].firstChild.nodeValue;
						feed_result.url = this.getElementsByTagName("link")[0].firstChild.nodeValue;
						feed_result.category = this.getElementsByTagName("category")[0].firstChild.nodeValue;
						feed_result.commments = this.getElementsByTagName("comments")[0].firstChild.nodeValue;
						feed_result.phone = this.getElementsByTagName("phone")[0].firstChild.nodeValue;
						feed_results.push(feed_result);
					});
					build_watcher.wait_times = feed_results;
					build_watcher.data_loaded = true;

					// Call the callback function
					successCallBack(build_watcher);
				} else {
					// Log no results error
					console.log("Feed retrieved, but no results were returned.");
				}
			} else {
				// Log failure to retrieve feed
				console.log("Failed to retrieve feed. Error occurred: " + result.error);
			}
		});
	},
	getFacility: function(facility_name) {
		for(var i = 0; i < this.wait_times.length; i++) {
			var wait_time = this.wait_times[i];
			if(wait_time.facility === facility_name) {
				return wait_time;
			}
		}
		return undefined;
	}
};