
const successfulPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Operation succeeded!');
  }, 1000);
});


const failedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Operation failed!');
  }, 1000);
});

successfulPromise.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.error(error);
})


const promise1 = Promise.resolve('One');
const promise2 = Promise.resolve('Two');

Promise.all([promise1, promise2])
  .then((values) => {
    console.log(values); // Output: ['One', 'Two']
  })
  .catch((error) => {
    console.error(error);
  });

