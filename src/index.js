import { UrbanDictionary } from './urban-dictionary';
import $ from 'jquery';

$(document).ready(function () {
  $('.define').click(function () {
    let word = $('#word').val();
    $('#word').val('');
    let urbanService = new UrbanDictionary();
    let promise = urbanService.getUrbanDefinition(word);
    let promiseTwo = urbanService.getTvShow(word);
    let promiseThree = urbanService.goAway(word);
    promise.then(function (response) {
      let body = JSON.parse(response);
      $('.showWord').text(body.list[0].word);
      $('.showDefinition').text(body.list[0].definition);
      $('.showExample').text(body.list[0].example);
    });
    promiseTwo.then(function (response) {
      let body = JSON.parse(response);
      $('.showName').html(body[0].show.name);
      $('.showRating').html(body[0].show.rating);
      $('.showPremiered').html(body[0].show.premiered);
      $('.showCountry').html(body[0].show.network.country.name);
      $('.showSummary').html(body[0].show.summary);

    });

    promiseThree.then(function (response) {
      let body = JSON.parse(response);
      console.log(body);
      
      $('.showInsult').html(body.message);


    });
  });

});
