import Vue from 'vue';
// import WordCounter from './models/WordCounter.js';
const WordCounter = require('./models/WordCounter.js');

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: '#app',
    data: {
      textArea: "",
      wordNumber: 0

    },
    methods: {
      countWords: function() {
        if(this.textArea != ""){
          this.wordNumber = WordCounter(this.textArea);
          this.textArea = ""
        }
      }
    }
  });
});
