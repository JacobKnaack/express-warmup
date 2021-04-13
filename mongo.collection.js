'use strict';

const mongoose = require ('mongoose');

const recordSchema = mongoose.Schema({
  name: {type: String}, date: {type: String}
});

const recordModel = mongoose.model('record', recordSchema);

class Record {
  constructor(model){
    this.model = model;
  }

  create(data){
    const document = new this.model(data);
    return document.save();
  }

  read(id){
    if(id){
      return this.model.find({_id : id});
    }
    return this.model.find({});
  }

  update(id, data){
    return this.model.findOneAndUpdate({_id: id}, data, {new: true});
  }

  delete(id){
    this.model.findOneAndDelete({_id: id});
  }
}

module.exports = {
  model: Record,
  schema: recordModel,
}