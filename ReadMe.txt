									Pet's Food Review

Objectives:

1. We chose this project to mainly learn file upload feature of Deployd.
2. Achieved objective 1 by allowing the user to upload 1 image per review.
3. We also want to allow the user to write a review on a product that they see on the website.


Components:

1. Home/ Welcome page: This page is just a welcome page and does contain a navigation panel.
   On the navigation panel, we have a simple 'Home' button, which again redirects to the homepage.
   The next button on the home page is the Type of Pet dropdown which lets the user select the type of pet.

   The selected pet from the drop down takes to a new page that corresponds to the pet type.
   
2. Pet Foods page (Dogproducts.html/ Catproducts.html):
   
   Each html page contains 6 products for both cats and dogs.
   On click on each product (Reviews button), get the data from the server pertaining to the product.
   The data from the server is loaded into Bootstrap Modal dynamically using jquery.

3. Write a Review page.

   This uses Bootstrap form to collect information from the user and post the data to the server.
   The user is allowed to upload an image and the image is posted to the server using AJAX post. The image is given an ID and the ID is used to retrieve the image.
   Based on the type of pet, the product list is loaded dynamically but not from the server. There is an array of products in the reviews.js.
   

Installation guide:

1. The installation of MongoDB and deployd is required.
2. Download the whole folder from this github account.
3. Go to the project directory and start the server using dpd using a command line.
4. For the files upload and  download to work, we need to first install dpd-fileupload using the command,
		npm install dpd-fileupload --save

5. once the installation is complete, start the server using dpd.
6. open the browser to load "http://localhost:2403/" to see the home page.
7. The web application is now ready to use.

Future Scope:

1. Add the count of reviews on each product button.
2. Add some more information about the product, this is ready, but did not have time for integration.
3. Add some layer of validation locally using javascript to verify the email.
4. Add more dynamic pages rather than static ones.
