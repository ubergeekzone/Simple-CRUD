# Simple-CRUD
Simple CRUD Functions jQuery Plugin

Using this plugin is very simple, i wrote it because i did not want a heavy framework like angularjs for a project i was working on.

#How do i use Simple CRUD?

- Make sure you have jQuery included.
- Include it in to your app/website like ```<script src="simple_crud.lib.js"></script>```
- You call the function and chain the methods ``` $.crud().read("urlhere", dataobjecthere, datatypehere).done(function(data) {
       alert(data);
     }); ```

# Methods

## Create
$.crud().create("urlhere", dataobjecthere, datatypehere).done(function(data) { alert(data); });

## Read
$.crud().read("urlhere", dataobjecthere, datatypehere).done(function(data) { alert(data); });

## Update
$.crud().update("GET/PUT/PATCH", "urlhere", dataobjecthere, datatypehere).done(function(data) { alert(data); });

## Delete
$.crud().delete("GET/POST", "urlhere", dataobjecthere, datatypehere).done(function(data) { alert(data); });

The update/delete functions accept a method on how you'd to you like to handle the callback. read is GET and create is POST and handles those for you out of the box.

# Handling custom headers and async

I recommend for handling custom headers and async to use ajaxSetup
``` $.ajaxSetup({headers: {"X-Test-Header": "test-value", "async":true}}); ```
     
# Bonus Route Method

I have also included a route method in this lib that allows you to detect what current page you are on as for controlling when your method's should fire and be called.

Use it like so for path only  ``` $.crud.route('path');   ``` or ``` $.crud.route('url'); ``` for full url, you can split up the route by adding the postion to your function like so ``` $.crud.route('path', 1);   ``` 

Of coruse this is not a replacement for AngularJS or full on framework, It is a simple soultion for getting a project completed without a heavy load on resources. 
