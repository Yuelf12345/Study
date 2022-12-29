function fn(){
    console.log('asdad');

    let xhr = new XMLHttpRequest();

    xhr.open('get','/api/getUser',true);

    xhr.onload = function(){
        console.log(xhr.responseText);
    };
    xhr.send()
}

export {
    fn
}

export default 100;
