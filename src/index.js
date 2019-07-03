import { UrbanDictionary } from './urban-dictionary';
import $ from 'jquery';

$(document).ready(function () {
  $('.define').click(function () {
    let word = $('#word').val();
    $('#word').val('');
    let urbanService = new UrbanDictionary();
    let promise = urbanService.getUrbanDefinition(word);
    promise.then(function (response) {
      let body = JSON.parse(response);
      $('.showWord').text(body.list[0].word);
      $('.showDefinition').text(body.list[0].definition);
      $('.showExample').text(body.list[0].example);
    });
  });

});
