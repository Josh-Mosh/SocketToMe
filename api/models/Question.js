/**
* Question.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    meeting: {
      model: 'meeting',
      required: true
    },

    value: {
      type: 'text'
    },

    isDone: {
      type: 'boolean',
      defaultsTo: false
    }

  }
};

