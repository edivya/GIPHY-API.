# Giphy-API-Project

## Overview
<p>This website uses the GIPHY API to populate the site with gifs of your favorite athletes. Specifically, it uses the jQuery AJAX method to perform AJAX GET requests to the query URL to get data from the GIPHY API. To perform an AJAX call, a query URL needs to be constructed. The query URL consists of the host, path, search term (the name of the athlete), the maximum number of gifs to return, and an API key. After the query URL is constructed, the URL is used to perform the request. When the request is complete, the site uses Javascript and jQuery to add static gif images to the HTML. You can select an athlete from a pre-defined list or add your own athlete to the list if the athlete you want to search for is not available. To play a gif, click it. Click it again to pause.</p>
## Live
<p>https://edivya.github.io/GIPHY-API./</p>

## Screenshots
(https://github.com/edivya/GIPHY-API./blob/master/assets/images/1.png)
(https://github.com/edivya/GIPHY-API./blob/master/assets/images/2.png)
(https://github.com/edivya/GIPHY-API./blob/master/assets/images/3.png)

## Technologies used to create site

<li>HTML5</li>
<li>CSS</li>
<li>Bootstrap 4.0.0-beta</li>
<li>Javascript</li>
<li>JQuery</li>
<li>AJAX</li>
<li>GIPHY API</li>


## How to use the GIPHY API
<p>To learn about the GIPHY API and the various API parameters, read the <a href="https://developers.giphy.com/docs/" target="_blank">GIPHY API documentation</a>. You should be familiar with the API before contributing to this site or creating your own.</p>
<p>GIPHY requires developers to use a key to access API data. To use the GIPHY API, you'll need a (free) GIPHY account. Then, you can obtain a key by creating an app.</p>
<p>Ensure that you switch the protocol in the query URL from http to https, or the app might not work properly when it is deployed.</p>
