# README

React on Rails Tutorial: Integrating React and Ruby on Rails 5.2
Posted on July 24, 2018 by Daniel Rudnitski

Users expect a certain level of interactivity and speed when using websites, which can be hard to provide with server rendered websites. With a regular Rails project, we can sprinkle interactivity on the client side with vanilla javascript or jQuery but it quickly becomes tedious to maintain and work with for complex user interfaces.

In this tutorial, we’re going to look at integrating React into an existing Rails 5.2 app with the react on rails gem, in order to provide an optimal user experience and keep our codebase clean at the same time.

Suppose you are running your own app store called AppGarage. Users are able to see popular apps, download them, and search for new apps.

Currently, the website is built only with Ruby on Rails so users have to type the whole search term, submit, and wait for a page refresh before seeing the search results.

Users expect content to be loaded as they type so that they can find apps faster. Wouldn’t it be nice to upgrade our search functionality to dynamically fetch and render search results as the user types their query? Let’s do that with React!

Source: https://cognitiveclass.ai/blog/react-on-rails-tutorial-integrating-react-and-ruby-on-rails/