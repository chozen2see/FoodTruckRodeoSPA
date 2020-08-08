# Application Title: Rolling Soul

This application allows the user to find the Rolling Soul food truck, view the food truck menu, login and place an advance order with payment via Stripe or PayPal.


## Setup Steps

See Original Readme

## Important Links

- [Other Repo](https://github.com/chozen2see/FoodTruckRodeoAPI)
- [Deployed API](https://foodtruckrodeo.herokuapp.com/)
- [Deployed Client](http://foodtruckrodeo.ga.dvynedzyne.com/)

## Planning Story

Lorem ipsum dolor amet cloud bread letterpress squid actually, single-origin coffee williamsburg af poutine fingerstache austin semiotics paleo man braid vexillologist. Tumeric literally banjo pickled disrupt cold-pressed thundercats shoreditch try-hard health goth intelligentsia pop-up small batch skateboard farm-to-table. Meh tofu fam, direct trade tattooed stumptown etsy everyday carry activated charcoal. Neutra cornhole polaroid literally salvia, listicle tofu.

### User Stories

- A user will be able to create a register for the site. 
- A user will be able to login/logout.
- A user will be able to navigate site using the navigation menu.
- A user will be able to view the food truck menu.
- A user will be able to add items to an order once authenticated. 
- A user will be able to remove items from an order once authenticated. 
- A user will be able to purchase the items in their cart.
- A user will be able to locate the truck. 
- A user will be able to contact the truck owners
- A user will receive a text message when their order is ready.

### Stretch Goals
ADMIN SYSTEM
- An admin will be able to login.
- An admin wille able to fill customer orders. 
- An admin will be able to find a customer order. 
- An admin will be able to view customer orders (continuous feed). 


### Technologies Used - Front End

- ASPNET Core (v3.1) - Web API / .NET CLI
- Entity Framework Core (v3.1.6) 
- AutoMapper

### Technologies Used - Back End

- Angular (v10.0.4) - CLI
- TypeScript
- AlertifyJS
- JWT Authentication
- Ngx Bootstrap
- FontAwesome
- Validation with Reactive Forms
- Deployment to Heroku using Docker container


### Catalog of Routes

Verb         |	URI Pattern
------------ | -------------
GET | /resources
GET | /resources/:id
POST | /resources
PATCH | /resources/:id
DELETE | /resources/:id

### Unsolved Problems

- Still need to finish the shopping cart functionality along with the payment options.
- Figure out how to deploy backend with Docker and Heroku

#### Wireframe:
![wireframe](https://github.com/chozen2see/FoodTruckRodeoSPA/blob/master/WireFrames.pdf)

---

