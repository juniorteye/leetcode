function validIPAddresses(string) {
    // Write your code here.
    if(string.length < 4){
      return []; 
    }
    let validIPAddresses = [];
  
    for(let i =1; i < 4; i++){
      const part1 = string.substring(0, i);
      if(!isValidParts(part1)){
        continue;
      }
  
      for(let j = i +1; j < i+4 && j < string.length; j++){
        const part2 = string.substring(i, j);
        if(!isValidParts(part2)){
          continue;
        }
  
        for(let k = j + 1 ; k < j + 4 && k < string.length; k++){
          const part3 = string.substring(j,k);
          const part4 = string.substring(k, string.length)
  
          if(isValidParts(part3) && isValidParts(part4)){
            validIPAddresses.push(`${part1}.${part2}.${part3}.${part4}`);
          }
        }
      }
    }
    return validIPAddresses;
  }
  
  function isValidParts(part){
    if(part.length > 3 || part.lemgth < 1){
      return false;
    }
    const num = Number(part);
    if(num > 255){
      return false;
    }
    return part.length === num.toString().length;
  }