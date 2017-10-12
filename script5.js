var promise= new Promise(function(resolve, reject){
    resolve('PROMISE VALUE');
    rejcet(null);
})

promise.then(function(sucess){
    console.log(sucess);
})

console.log('MAIN PROGRAM');