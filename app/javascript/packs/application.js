/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import ReactOnRails from 'react-on-rails';
import Search from '../components/Search';

ReactOnRails.register({
  Search
});

/*
The application.js file now serves as a way for us to register our components with react-on-rails. In our case, it’s acceptable to include our search component on every page load, but for real-life production applications, it’s not very performant to include every component on every page. In real-life applications, components would be split into webpack bundles which are loaded on pages where they are needed.
*/