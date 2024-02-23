/* Alternar páginas */
function criarApresentacao1_0() {
    document.getElementById('escolha').classList.add('displayNone');
    document.getElementById('HTML1_1').classList.remove('displayNone');
    document.getElementById('HTML2_1').classList.add('displayNone');
}
function criarApresentacao2_0() {
    document.getElementById('escolha').classList.add('displayNone');
    document.getElementById('HTML1_1').classList.add('displayNone');
    document.getElementById('HTML2_1').classList.remove('displayNone');
}

/* Montar HTML Ao Vivo */
function criarApresentacao1_1() {
    /* puxar texto do encontro 1 */
    var texto1_1_1 = document.getElementById('texto1_1_1').value.slice(-2) + "/" + document.getElementById('texto1_1_1').value.slice(-5,-3) + "/" + document.getElementById('texto1_1_1').value.slice(-10,-6);
    var texto1_1_2 = document.getElementById('texto1_1_2').value;
    var texto1_1_3 = document.getElementById('texto1_1_3').value;
    var texto1_1_4 = document.getElementById('texto1_1_4').value;
    
    /* puxar texto do encontro 2 */
    var texto1_2_1 = document.getElementById('texto1_2_1').value.slice(-2) + "/" + document.getElementById('texto1_2_1').value.slice(-5,-3) + "/" + document.getElementById('texto1_2_1').value.slice(-10,-6);
    var texto1_2_2 = document.getElementById('texto1_2_2').value;
    var texto1_2_3 = document.getElementById('texto1_2_3').value;
    var texto1_2_4 = document.getElementById('texto1_2_4').value;
    
    
    /* Valida campo vazio */   
    if(texto1_1_1 != "" & texto1_1_2 != "" & texto1_1_3 != "" & texto1_1_4 != "" & texto1_2_1 != "" & texto1_2_2 != "" & texto1_2_3 != "" & texto1_2_4 != "") {

        /* Monta HTML */
        document.getElementById('copiar1_1').value = '<div style="display: grid;"> <div style="margin: auto; padding: 20px 10px;"><h1 style="color: #ad0f44; padding-bottom: 10px;">Encontro 1</h1> <p style="padding: 5px 10px;"><b>Data da Realização: </b>' + texto1_1_1 + '</p> <p style="padding: 5px 10px;"><b>Horário da Realização: </b>' + texto1_1_2 + ' às ' + texto1_1_3 + '</p> <p style="padding: 7px 10px;"><iframe style="border-radius: 8px; border: 1px solid #ffffff00;" src="' + texto1_1_4 + '" width="640" height="480" allow="autoplay"></iframe></p> </div><div style="display: grid;"> <div style="margin: auto; padding: 20px 10px;"><h1 style="color: #ad0f44; padding-bottom: 10px;">Encontro 2</h1> <p style="padding: 5px 10px;"><b>Data da Realização: </b>' + texto1_2_1 + '</p> <p style="padding: 5px 10px;"><b>Horário da Realização: </b>' + texto1_2_2 + ' às ' + texto1_2_3 + '</p> <p style="padding: 7px 10px;"><iframe style="border-radius: 8px; border: 1px solid #ffffff00;" src="' + texto1_2_4 + '" width="640" height="480" allow="autoplay"></iframe></p> </div>';

        document.getElementById('copiar1_1').disabled = true;
        document.getElementById('div1_3').classList.remove('displayNone');
        document.getElementById('div1_4').classList.remove('displayNone');

        /* jogar teka para o final */
        window.scrollTo(0, 9999);
    
    }
    else{
        /* caso tenha um campo vazio, mensagem de erro */      
        window.alert("Verifique se algum campo está vazio!");
    }
}

/* Seleciona e copia tudo do HTML */
function copiarTexto1_1() {
    var texto1_Copiado = document.getElementById('copiar1_1');

    document.getElementById('copiar1_1').disabled = false;

    texto1_Copiado.select();
    texto1_Copiado.setSelectionRange(0, 99999);
    document.execCommand('copy');

    document.getElementById('copiar1_1').disabled = true;
}

/* Montar HTML Gravação */
function criarApresentacao2_1() {
    /* puxar texto do encontro 1 */
    var texto2_1_1 = document.getElementById('texto2_1_1').value.slice(-2) + "/" + document.getElementById('texto2_1_1').value.slice(-5,-3) + "/" + document.getElementById('texto2_1_1').value.slice(-10,-6);
    var texto2_1_2 = document.getElementById('texto2_1_2').value;
    var texto2_1_3 = document.getElementById('texto2_1_3').value;
    var texto2_1_4 = document.getElementById('texto2_1_4').value;
    
    /* puxar texto do encontro 2 */
    var texto2_2_1 = document.getElementById('texto2_2_1').value.slice(-2) + "/" + document.getElementById('texto2_2_1').value.slice(-5,-3) + "/" + document.getElementById('texto2_2_1').value.slice(-10,-6);
    var texto2_2_2 = document.getElementById('texto2_2_2').value;
    var texto2_2_3 = document.getElementById('texto2_2_3').value;
    var texto2_2_4 = document.getElementById('texto2_2_4').value;
    
    
    /* Valida campo vazio */   
    if(texto2_1_1 != "" & texto2_1_2 != "" & texto2_1_3 != "" & texto2_1_4 != "" & texto2_2_1 != "" & texto2_2_2 != "" & texto2_2_3 != "" & texto2_2_4 != "") {

        /* Monta HTML */
        document.getElementById('copiar2_1').value = '<div style="display: grid;"> <div style="margin: auto; padding: 20px 10px;"><h1 style="color: #ad0f44; padding-bottom: 10px;">Encontro 1</h1> <p style="padding: 5px 10px;"><b>Data da Realização: </b>' + texto2_1_1 + '</p> <p style="padding: 5px 10px;"><b>Horário da Realização: </b>' + texto2_1_2 + ' às ' + texto2_1_3 + '</p> <p style="padding: 7px 10px;"><a href="' + texto2_1_4 + '" target="_blank" style="background-color: #ad0f44; color: #ffffff; padding: 5px 10px; border-radius: 10px;border:#ad0f44 1px solid; text-decoration: none;">Clique aqui</a></p> </div><div style="display: grid;"> <div style="margin: auto; padding: 20px 10px;"><h1 style="color: #ad0f44; padding-bottom: 10px;">Encontro 2</h1> <p style="padding: 5px 10px;"><b>Data da Realização: </b>' + texto2_2_1 + '</p> <p style="padding: 5px 10px;"><b>Horário da Realização: </b>' + texto2_2_2 + ' às ' + texto2_2_3 + '</p> <p style="padding: 7px 10px;"><a href="' + texto2_2_4 + '" target="_blank" style="background-color: #ad0f44; color: #ffffff; padding: 5px 10px; border-radius: 10px;border:#ad0f44 1px solid; text-decoration: none;">Clique aqui</a></p> </div>';

        document.getElementById('copiar2_1').disabled = true;
        document.getElementById('div2_3').classList.remove('displayNone');
        document.getElementById('div2_4').classList.remove('displayNone');

        /* jogar teka para o final */
        window.scrollTo(0, 9999);
    
    }
    else{
        /* caso tenha um campo vazio, mensagem de erro */      
        window.alert("Verifique se algum campo está vazio!");
    }    
    
}

/* Seleciona e copia tudo do HTML */
function copiarTexto2_1() {
    var texto2_Copiado = document.getElementById('copiar2_1');

    document.getElementById('copiar2_1').disabled = false;

    texto2_Copiado.select();
    texto2_Copiado.setSelectionRange(0, 99999);
    document.execCommand('copy');

    document.getElementById('copiar2_1').disabled = true;
}