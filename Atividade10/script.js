function validar(form1){
    event.preventDefault();
    var nome = form1.elements[0];
    var email = form1.elements[1];
    var coment = form1.elements[2];
    var radio1 = form1.elements[3];
    var radio2 = form1.elements[4];

    if(nome.value.length < 10){
        alert("O nome precisa ter 10 caracteres ou mais...");
        nome.focus();
        return false;
    }   
    else if(email.value.indexOf("@")<0||email.value.indexOf(".") <0){
        alert("Email Inválido!");
        email.focus();
        return false; 
    } else if(coment.value.length < 20){
        alert("O comentário precisa ter mais de 20 caracteres.");
        coment.focus();
        return false;
    }   
    if(radio1.checked == false && radio2.checked == false){
        alert("Responda a pesquisa...");
        return false;
    }else if(radio1.checked == true){
        alert("Que bom que você voltou a visitar esta página!");
        form1.submit();
    }else{
        alert("Volte sempre à está página!");  
        form1.submit();
    }
}

function limpatudo(){
    document.form1.elements[0].value = "";
    document.form1.elements[1].value = "";
    document.form1.elements[2].value = "";
    document.form1.elements[3].checked = false; 
    document.form1.elements[4].checked = false;
}