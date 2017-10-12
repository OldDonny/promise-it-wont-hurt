
  var promise= new Promise(function(resolve, reject){
    resolve("FULFILLED!");
    setTimeout(function(){
    },300);
    })



    promise.then(function(resolve){
        console.log(resolve);
    });