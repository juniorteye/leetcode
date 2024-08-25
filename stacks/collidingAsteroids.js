function collidingAsteroids(asteroids) {
    // Write your code here.
    for(let i = 0; i < asteroids.length-1; i++){
      if(asteroids[i] > 0 && asteroids[i+1] < 0){
        if (Math.abs(asteroids[i]) === Math.abs(asteroids[i+1])) {
          asteroids.splice(i,2);
          console.log('the splice values are >>>', asteroids.splice(i,2))
          console.log('the value of i is decrease by', i =-1)
           i =- 1;
        }
        if(Math.abs(asteroids[i]) > Math.abs(asteroids[i+1])){
          asteroids.splice(i+1, 1);
          i =- 1;
        }
        if(Math.abs(asteroids[i]) < Math.abs(asteroids[i+1])){
          asteroids.splice(i,1)
          i = -1;
        }
      }
    }
    return asteroids;
  }
console.log(collidingAsteroids([-3,5,-8,6,7,-4,-7]))

// review solution
function collidingAsteroids(asteroids) {
  const stack = [];
  for (const asteroid of asteroids) {
      if (stack.length === 0 || asteroid > 0) {
          stack.push(asteroid);
      } else {
          let collided = false;
          while (stack.length > 0 && stack[stack.length - 1] > 0) {
              const prevAsteroid = stack[stack.length - 1];
              if (Math.abs(asteroid) === Math.abs(prevAsteroid)) {
                  stack.pop();
                  collided = true;
                  break;
              } else if (Math.abs(asteroid) < Math.abs(prevAsteroid)) {
                  collided = true;
                  break;
              } else {
                  stack.pop();
              }
          }
          if (!collided) {
              stack.push(asteroid);
          }
      }
  }

  return stack;
}
