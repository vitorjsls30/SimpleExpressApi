const data = require('../data.json');

module.exports = type => {
  return (req, res, next, value) => {
      var typePlural = `${type}s`;
      if(type === 'category') {
          typePlural ="category"; 
      }

      const obj = data[typePlural].find(t => t.id === (value * 1));

      if(obj) {
          req[type] = obj;
          next();
      }
      else {
          res.status(404).send(`Invalid ${type} ID`);
      }
  };  
};