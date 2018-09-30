import '@babel/polyfill';
import $ from 'jquery';

$.ajax({
   url: "http://www.unhcr.org/innovation/wp-json/wp/v2/pages/27745",
  //url: 'json/data.json',
  type: 'GET',
  success: function(data) {
    $('.page-content .content').html(data.acf.terms_of_use);
    $('.loader').fadeOut(200);
  }
});