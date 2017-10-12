   
    var promise = new Promise(function (fulfill, reject) {
        fulfill('WHAT THE HELL');
      });
    
      
      var promise = Promise.resolve('WHAT THE HELL');

      promise.catch(function(sucess) {
        console.log(sucess)
        
      });
  
  