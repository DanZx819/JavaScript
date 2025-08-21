const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send(); // Se for post


        xhr.addEventListener('load', (e) => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    });

}

document.addEventListener('click', e => {
    const el = e.target;

    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
})


async function carregaPagina(el) {

    try {
        const href = el.getAttribute('href');
        const objConfig = ({
            method: 'GET',
            url: href,
        });
        const response = await request(objConfig);
        carregaResultado(response);
    }catch(e){
        console.log(e);
    }
    
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}