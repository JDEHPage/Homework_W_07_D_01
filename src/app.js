import Vue from 'vue';
// import WordCounter from './models/WordCounter.js';
const WordCounter = require('./models/WordCounter.js');

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: '#app',
    data: {
      textArea: "",
      wordNumber: ""

    },
    methods: {
      countWords: function() {

        this.wordNumber = WordCounter(this.textArea);
        this.textArea = ""
      }

    }
  });
});
