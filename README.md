# Simple-CRUD
Simple CRUD Functions jQuery Plugin

Using this plugin is very simple, i wrote it because i did not want a heavy framework like angularjs for a project i was working on.

#How do i use Simple CRUD?

- Include it in to your app/website like ```<script src="simple_crud.lib.js"></script>```
- You call the function and chain the methods ``` $.crud().read("urlhere", dataobjecthere, datatypehere).done(function(data) {
       alert(data);
     }); ```
     
# Bonus Route Method

I have also included a route method in this lib that allows you to detect what current page you are on as for controlling when your method's should fire and be called.

Use it like so for path only  ``` $.crud.route('path');   ``` or ``` $.crud.route('url'); ``` for full url

Of coruse this is not a replacement for AngularJS or full on framework, It is a simple soultion for getting a project completed without a heavy load on resources. 
