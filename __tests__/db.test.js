const mongoose = require('mongoose');
const controller = require('../database/controllers/controller.js');

mongoose.connect('mongodb://localhost/hackazon');

let doc99 = {"_id":"5a973fa6ffc64462ac308958","id":99,"name":"Samsung","price":"$1533.00","weight":"37 lb","dimensions":"48 x 7 x 19 in","color":"White","category":"TV","image_url":"https://goo.gl/images/RtURx5","overallReview":3,"__v":0};

describe('database', () => {
  it('should grab four documents when supplied a category', () => {
    let dataForServer = [];
    controller.findFour('drone', (err, docs) => {
      if (err) {
        console.log('findFour error: ', err);
      } else {
        docs.forEach(object => {
          dataForServer.push(object);
        });
        expect(dataForServer.length).toBe(4);
      }
    });
  });
  it('should grab the correct document using the id', () => {
    controller.findOne(99, (err, doc) => {
      if (err) {
        console.log('Testing error!', err);
      } else {
        expect(doc.toJSON()).toEqual(doc99.toJSON());
        // expect(doc.toJSON()).toEqual(JSON.parse(doc99));
      }
    })
  });
});