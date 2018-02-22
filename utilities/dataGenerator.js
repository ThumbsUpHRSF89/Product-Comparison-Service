
var names = ['Phantom', 'Mavic Pro', 'Spark', 'Halo', 'Platinum Fly', 'Bebop 2', 'Bebop 1', 'Typhoon', 'Hornet', 'Eagle', 'Aardvark', 'Weasel', 'Falcon', 'Parrot', 'Tsunami', 'Hummingbird', 'Whale', 'Lead Ballon', 'Excelsior', 'Steadfast', 'Titanic', 'Challenger', 'Explorer', 'Titan', 'Galileo', 'Warthog', 'Constitution', 'Britannia', 'Queen Mary', 'Hanyu', 'Marlin', 'Henry', 'Ivy', 'Man-Bat',];
var manufacturer = ['Dajiang Innovations', 'AeroVironment', 'Ambarella', 'Boeing', 'Lockheed Martin', '3D Robotics', 'Parrot SA', 'GoPro', 'Yuneec', 'Northrop Grumman', ];
var color = ['Black', 'Slate', 'White', 'Azure', 'Crimson', 'Vermillion',];
var image = [
  'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-00.jpg?itok=lfMW1KUQ&fc=50,50',
  'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-01.jpg?itok=i7bfo9cK&fc=50,50',
  'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-02.jpg?itok=ZcNajxlf&fc=50,50',
  'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-03.jpg?itok=ZDWebsXe&fc=50,50',
  'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-04.jpg?itok=dEigMkKk&fc=50,50',
  'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-05.jpg?itok=dEigMkKk&fc=50,50',
  'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-06.jpg?itok=dEigMkKk&fc=50,50',
  'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-07.jpg?itok=dEigMkKk&fc=50,50',
  'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-08.jpg?itok=dEigMkKk&fc=50,50',
  'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-09.jpg?itok=dEigMkKk&fc=50,50',
  'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-09.jpg?itok=dEigMkKk&fc=50,50',
  'https://cdn.vox-cdn.com/thumbor/vPg3038R00gWj4tzgYQS1lDb5Y8=/0x0:1024x576/920x613/filters:focal(431x207:593x369):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/56508181/Drone_LIlY_00011_1024x576.0.png',
  'https://dev.cdn.wetalkuav.com/wp-content/uploads/2018/02/08010609/mind-control-drones-1024x678.jpg',
  'https://i0.wp.com/thedronegirl.com/wp-content/uploads/2016/07/MG_1612.jpg?resize=1024%2C683',
  'https://www.menkind.co.uk/media/catalog/product/cache/image/1000x/beff4985b56e3afdbeabfc89641a4582/r/a/race_vision_220_fpv_pro_drone_58989_1_.jpg',
  'https://truimg.toysrus.com/product/images/sharper-image-rechargeable-dx-2-stunt-drone-2.4-ghz-black--54BCFCEC.zoom.jpg?fit=inside|485:485',
  'https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/3/4/3495037_1.jpg',
];


var randomNumberGen = (someNum) => {
  return Math.floor(Math.random() * someNum)
}
// 50-74
var droneMaker = (number) => {
  var dataStorage = [];
  for (var i = 50; i < number; i++) {
    let newDrone = {};
    newDrone = {
      id: i,
      name: names[randomNumberGen(names.length)],
      price: randomNumberGen(1200),
      weight: (randomNumberGen(6) + 1),
      manufacturer: manufacturer[randomNumberGen(manufacturer.length)],
      dimensions: `${randomNumberGen(21) + 1} x ${randomNumberGen(21) + 1} x ${randomNumberGen(21) + 1} inches`,
      color: color[randomNumberGen(color.length)],
      image_url: image[randomNumberGen(image.length)],
      category: 'drone',
      overallReview: randomNumberGen(6),
      reviewNumber: randomNumberGen(400)

    }
    dataStorage.push(newDrone);
  }
  return dataStorage;
}
