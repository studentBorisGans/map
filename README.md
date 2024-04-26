Probably want to change mind on how I link pages

	https://stackoverflow.com/questions/77209264/how-to-build-a-react-application-with-multiple-html-files#:~:text=In%20React%20you%20only%20need,html%20file.&text=In%20order%20to%20make%20multiple,called%20react%2Drouter%2Ddom%20.&text=src%2Findex.js-,import%20React%2C%20%7B%20StrictMode%20%7D%20from%20%22react%22%3B%20import,%3B%20import%20%22.%2Fstyles.

 	https://webpack.js.org/concepts/loaders (all about loaders)

  
Installed a fuck ton of things that I cant even keep track of, also changed webpack.config.js (line 352) to try and get the HTML and CSS loaders to work. Some useful commands tho:

	ln -s /Users/borisgans/vsProjects/personalProjects/map/frontend/public ./node_modules/public -> used to create an async link to my .html files through the src directory

 	ls -l node_modules -> check above

 	npm i css-loader --save-dev (also html-loader)

  	npm i html-react-parser 

   	lsof -i :2000 -> check port usage
 

Using vite:

	npm create vite@latest
  
	(name) + vanilla + JS
  
	cd (name)
  
	npm install
  
	npm run dev

  

Using leaflet.js:

	https://leafletjs.com/examples/quick-start/

To use the Thunderforest tile, register and grab key: https://manage.thunderforest.com/users/sign_in


Set up frontend and backend
	
	https://youtu.be/hYYd_3Tz6Zo?si=YVZ1Tev1y9ThI8WO

 Backend:

 	touch index.js

   	npm init -y

    	npm i express cors

     	nodemon index.js

      	


Frontend:

	npx create-react-app {name: frontend in this case}

 	cd {name}	
  
  	npm start

   	npm i axios

  	

 	
