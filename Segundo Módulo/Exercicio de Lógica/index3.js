//Fizz Buzz

function fizzBuzz(n){

    if(isNaN(n) !== false){
        return console.log('Digite um número!');
    }

    if(n % 3 === 0 && n % 5 !== 0){
        return 'Fizz'
    }else if(n % 5 === 0 && n % 3 !== 0){
        return 'Buzz';
    }else if(n % 5 === 0 && n % 3 === 0){
        return 'FizzBuzz';
    }else{
        return n;
    }
}

for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i)) 
    
}