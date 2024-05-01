

function AddAnimation(){
    const btn = document.getElementById('btn');
    btn.innerHTML = '<img src="imagens/loading.png" alt="carregar">'
}

function RemoveAnimation(){
    const btn = document.getElementById('btn');
    btn.innerHTML = 'Enviar';
    const notification = document.getElementById('aviso');
    notification.style.display = 'none';
    if(notification.style.display == 'none'){
        notification.style.display = 'flex';
    }else{
        notification.style.display = 'flex';
    }
}

const enviar = (event) =>{
    event.preventDefault();
    AddAnimation();
    const name = document.getElementById('txtNome').value;
    const email = document.getElementById('txtEmail').value;
    fetch('https://api.sheetmonkey.io/form/QG8UghYXURJct6RrW7Gi4', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: `${name}`, email: `${email}` })
    }).then(RemoveAnimation());

}

document.querySelector('form').addEventListener('submit', enviar);


