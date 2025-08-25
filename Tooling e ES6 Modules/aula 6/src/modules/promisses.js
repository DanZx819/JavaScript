

function promise(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('Hey, Promisse');
            resolve()
        }, 2000);
    });
}

export default async () => {
    await promise();
    console.log('Terminou')
}