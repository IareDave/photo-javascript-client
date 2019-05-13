# **Technologies Used**
+ Javascript
+ jQuery
+ HTML
+ CSS and bootstrap
+ Ruby back-end api (supplied by General Assembly)

# **Development Process**
I started this project by catalouging all of the required specifications given to us by General Assembly. I then set out with first creating the HTML skeleton for user login forms and the necessary navigation menu options for all of the various actions a user is able to make

After the layout was created I set out by creating the code logic for user authorization and menu navigation with javascript and jQuery to allow for easy DOM manipulation. Once the user auth menu was fully functional I then set up the API calls that logged the user data for CRUD to a resource. 

With the HTML skeleton and backend for user auth/pictures done, I then spent most of my time creating a responsive menu and adding buttons to delete/update resources, show/hide user menu, and back button support. 

# Unsolved problems
I was not able to finish an additional resource that would tie user -> pictures -> albums. The addition of albums would allow me to give user functionality to group their pictures and have them define their own collections of resources. The problem with this approach is as user collections grow in number, page load takes considerably more time as the photos are rendered each time a user sends a GET request to the api.

# Wireframes
https://imgur.com/a/Jr8nK32
https://imgur.com/a/DCQ56zU

The login page is a bootstrap overlay. After user authentication is approved,
the login page is hidden from view and the application is made available on the present viewport.
