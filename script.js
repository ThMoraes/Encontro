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


function criarApresentacao1_1() {
    var texto1_1_1 = document.getElementById('texto1_1_1').value;
    var texto1_1_2 = document.getElementById('texto1_1_2').value;
    var texto1_1_3 = document.getElementById('texto1_1_3').value;
    var texto1_1_4 = document.getElementById('texto1_1_4').value;
    
    var texto2_1_1 = document.getElementById('texto2_1_1').value;
    var texto2_1_2 = document.getElementById('texto2_1_2').value;
    var texto2_1_3 = document.getElementById('texto2_1_3').value;
    var texto2_1_4 = document.getElementById('texto2_1_4').value;
    
    if(texto1_1_1 != "" & texto1_1_2 != "" & texto1_1_3 != "" & texto1_1_4 != "" & texto2_1_1 != "" & texto2_1_2 != "" & texto2_1_3 != "" & texto2_1_4 != "") {
        document.getElementById('copiar1_1').value = "<div style='text-align: center; font-size: 18px; font-family: Arial, Helvetica, sans-serif; border-radius: 0px; border: #C9C9C9 2px solid; background: url(https://hotsite.unisuam.edu.br/calendarios/2024.1/Img/Background/Background_Main_Papel.png);'> <div style='background-color: #ffffff66; padding:1px; '><div style='display: grid; grid-template-columns: 350px auto;'><div style='background-color: #EF7D00; height: 100%; display: flex;'><div style='margin: auto; padding-right: 5px;'><img src='https://secure.gravatar.com/avatar/ee94244e5fc005f9cf8bb2af37740c3b?s=35&amp;d=mm' alt='Local para inserir a Imagem' width='480' height='640' style='width: 200px; height: 200px; border-radius: 50%; border: 2px solid #ffffff; background-color: #ffffff; margin-top: 40px;'><p style='text-align: center; color: #ffffff; font-weight: bold; font-size: 30px;'>" + texto1_1_1 + "</p></div></div><div style='border:#EF7D00 4px solid; padding: 5px 5px 5px 0px; border-radius: 2px; border-left: #00000000; margin-left:5px; display: flex;'><div style='border:#EF7D00 2px solid; border-radius: 1px; border-left: #00000000; width: 100%;'><div style='margin: auto; padding: 20px 15px 5px 20px; text-align: left; color: #333333;'><p>" + texto1_1_2 + "</p></div></div></div></div></div></div>";

        document.getElementById('copiar1_1').disabled = true;
        document.getElementById('div1_3').classList.remove('displayNone');
        document.getElementById('div1_4').classList.remove('displayNone');

        /* window.scrollTo(0, 9999); */
    
    }
    else{        
        window.alert("Verifique se algum campo está vazio!");
    }
}


function copiarTexto1_1() {
    var texto1_Copiado = document.getElementById('copiar1_1');

    document.getElementById('copiar1_1').disabled = false;

    texto1_Copiado.select();
    texto1_Copiado.setSelectionRange(0, 99999);
    document.execCommand('copy');

    document.getElementById('copiar1_1').disabled = true;
}

function criarApresentacao2_1() {
    var texto2_1 = document.getElementById('texto2_1').value;
    var texto2_2 = document.getElementById('texto2_2').value.replace(/(\r\n|\n|\r)/gm, "</p><p>").replaceAll("<p></p>", "<br>");
    var texto2_3 = document.getElementById('texto2_3').value.replaceAll("&ab_channel","_channel");
    if (texto2_1 == "" & texto2_2 == "" & texto2_3 == "") {
        window.alert("Verifique se estão vazios os campos: \n\n\tNome do coordenador\n\tDescrição do Currículo\n\tVídeo do coordenador");
    }
    else if (texto2_1 == "" & texto2_2 == "") {
        window.alert("Verifique se estão vazios os campos: \n\n\tNome do coordenador\n\tDescrição do Currículo");
    }
    else if (texto2_1 == "") {
        window.alert("Verifique se está vazio o campo: \n\n\tNome do coordenador");
    }
    else if (texto2_2 == "") {
        window.alert("Verifique se está vazio o campo: \n\n\tDescrição do Currículo");
    }
    else if (texto2_1 != "" & texto2_2 != "" & texto2_3 == "") {
        document.getElementById('copiar2_1').value = "<div style='text-align: center; font-size: 18px; font-family: Arial, Helvetica, sans-serif; border-radius: 0px; border: #C9C9C9 2px solid; background: url(https://hotsite.unisuam.edu.br/calendarios/2024.1/Img/Background/Background_Main_Papel.png);'> <div style='background-color: #ffffff66; padding:1px; '><div style='display: grid; grid-template-columns: 350px auto;'><div style='background-color: #EF7D00; height: 100%; display: flex;'><div style='margin: auto; padding-right: 5px;'><img src='https://secure.gravatar.com/avatar/ee94244e5fc005f9cf8bb2af37740c3b?s=35&amp;d=mm' alt='Local para inserir a Imagem' width='480' height='640' style='width: 200px; height: 200px; border-radius: 50%; border: 2px solid #ffffff; background-color: #ffffff; margin-top: 40px;'><p style='text-align: center; color: #ffffff; font-weight: bold; font-size: 30px;'>" + texto2_1 + "</p></div></div><div style='border:#EF7D00 4px solid; padding: 5px 5px 5px 0px; border-radius: 2px; border-left: #00000000; margin-left:5px; display: flex;'><div style='border:#EF7D00 2px solid; border-radius: 1px; border-left: #00000000; width: 100%;'><div style='margin: auto; padding: 20px 15px 5px 20px; text-align: left; color: #333333;'><p>" + texto2_2 + "</p></div></div></div></div></div></div>";

        document.getElementById('copiar2_1').disabled = true;
        document.getElementById('div2_3').classList.remove('displayNone');
        document.getElementById('div2_4').classList.remove('displayNone');

        window.scrollTo(0, 9999);
    }

    else if (texto2_1 != "" & texto2_2 != "" & texto2_3 != "") {
        if (texto2_3.substr(0, 32) == "https://www.youtube.com/watch?v=") {

            let string = texto2_3.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/");
            let array = string.split('_channel');

            let video = array[0]


            document.getElementById('copiar2_1').value = "<div style='text-align: center; font-size: 18px; font-family: Arial, Helvetica, sans-serif; border-radius: 0px; border: #C9C9C9 2px solid; background: url(https://hotsite.unisuam.edu.br/calendarios/2024.1/Img/Background/Background_Main_Papel.png);'> <div style='background-color: #ffffff66; padding:1px; '><div style='display: grid; grid-template-columns: 350px auto;'><div style='background-color: #EF7D00; height: 100%; display: flex;'><div style='margin: auto; padding-right: 5px;'><img src='https://secure.gravatar.com/avatar/ee94244e5fc005f9cf8bb2af37740c3b?s=35&amp;d=mm' alt='Local para inserir a Imagem' width='480' height='640' style='width: 200px; height: 200px; border-radius: 50%; border: 2px solid #ffffff; background-color: #ffffff; margin-top: 40px;'><p style='text-align: center; color: #ffffff; font-weight: bold; font-size: 30px;'>" + texto2_1 + "</p></div></div><div style='border:#EF7D00 4px solid; padding: 5px 5px 5px 0px; border-radius: 2px; border-left: #00000000; margin-left:5px; display: flex;'><div style='border:#EF7D00 2px solid; border-radius: 1px; border-left: #00000000; width: 100%;'><div style='margin: auto; padding: 20px 15px 5px 20px; text-align: left; color: #333333;'><p>" + texto2_2 + "</p><div style='margin: auto 0px; padding-top: 5px;'><p style='text-align: center;'><iframe style='border-radius: 8px; border: 1px solid #ffffff00;' src='" + video + "' width='320' height='240' allow='autoplay'></iframe></p></div></div></div></div></div></div></div>";

            document.getElementById('copiar2_1').disabled = true;
            document.getElementById('div2_3').classList.remove('displayNone');
            document.getElementById('div2_4').classList.remove('displayNone');

            window.scrollTo(0, 9999);
        }
        else if (texto2_3.substr(0, 17) == "https://youtu.be/") {

            let string = texto2_3.replace("https://youtu.be/", "https://www.youtube.com/embed/");
            let array = string.split('_channel');

            let video = array[0]


            document.getElementById('copiar2_1').value = "<div style='text-align: center; font-size: 18px; font-family: Arial, Helvetica, sans-serif; border-radius: 0px; border: #C9C9C9 2px solid; background: url(https://hotsite.unisuam.edu.br/calendarios/2024.1/Img/Background/Background_Main_Papel.png);'> <div style='background-color: #ffffff66; padding:1px; '><div style='display: grid; grid-template-columns: 350px auto;'><div style='background-color: #EF7D00; height: 100%; display: flex;'><div style='margin: auto; padding-right: 5px;'><img src='https://secure.gravatar.com/avatar/ee94244e5fc005f9cf8bb2af37740c3b?s=35&amp;d=mm' alt='Local para inserir a Imagem' width='480' height='640' style='width: 200px; height: 200px; border-radius: 50%; border: 2px solid #ffffff; background-color: #ffffff; margin-top: 40px;'><p style='text-align: center; color: #ffffff; font-weight: bold; font-size: 30px;'>" + texto2_1 + "</p></div></div><div style='border:#EF7D00 4px solid; padding: 5px 5px 5px 0px; border-radius: 2px; border-left: #00000000; margin-left:5px; display: flex;'><div style='border:#EF7D00 2px solid; border-radius: 1px; border-left: #00000000; width: 100%;'><div style='margin: auto; padding: 20px 15px 5px 20px; text-align: left; color: #333333;'><p>" + texto2_2 + "</p><div style='margin: auto 0px; padding-top: 5px;'><p style='text-align: center;'><iframe style='border-radius: 8px; border: 1px solid #ffffff00;' src='" + video + "' width='320' height='240' allow='autoplay'></iframe></p></div></div></div></div></div></div></div>";

            document.getElementById('copiar2_1').disabled = true;
            document.getElementById('div2_3').classList.remove('displayNone');
            document.getElementById('div2_4').classList.remove('displayNone');

            window.scrollTo(0, 9999);
        }
        else if (texto2_3.substr(0, 30) == "https://www.youtube.com/embed/") {
            let video = texto2_3


            document.getElementById('copiar2_1').value = "<div style='text-align: center; font-size: 18px; font-family: Arial, Helvetica, sans-serif; border-radius: 0px; border: #C9C9C9 2px solid; background: url(https://hotsite.unisuam.edu.br/calendarios/2024.1/Img/Background/Background_Main_Papel.png);'> <div style='background-color: #ffffff66; padding:1px; '><div style='display: grid; grid-template-columns: 350px auto;'><div style='background-color: #EF7D00; height: 100%; display: flex;'><div style='margin: auto; padding-right: 5px;'><img src='https://secure.gravatar.com/avatar/ee94244e5fc005f9cf8bb2af37740c3b?s=35&amp;d=mm' alt='Local para inserir a Imagem' width='480' height='640' style='width: 200px; height: 200px; border-radius: 50%; border: 2px solid #ffffff; background-color: #ffffff; margin-top: 40px;'><p style='text-align: center; color: #ffffff; font-weight: bold; font-size: 30px;'>" + texto2_1 + "</p></div></div><div style='border:#EF7D00 4px solid; padding: 5px 5px 5px 0px; border-radius: 2px; border-left: #00000000; margin-left:5px; display: flex;'><div style='border:#EF7D00 2px solid; border-radius: 1px; border-left: #00000000; width: 100%;'><div style='margin: auto; padding: 20px 15px 5px 20px; text-align: left; color: #333333;'><p>" + texto2_2 + "</p><div style='margin: auto 0px; padding-top: 5px;'><p style='text-align: center;'><iframe style='border-radius: 8px; border: 1px solid #ffffff00;' src='" + video + "' width='320' height='240' allow='autoplay'></iframe></p></div></div></div></div></div></div></div>";

            document.getElementById('copiar2_1').disabled = true;
            document.getElementById('div2_3').classList.remove('displayNone');
            document.getElementById('div2_4').classList.remove('displayNone');

            window.scrollTo(0, 9999);
        }
        else {
            document.getElementById('div2_3').classList.add('displayNone');
            document.getElementById('div2_4').classList.add('displayNone');
            window.alert("Verifique se o link do vídeo está no padrão correto dentro do campo Vídeo do coordenador.\n\nExemplo:\n\thttps://www.youtube.com/watch?v=Hxg9K2-QFYI&ab_channel=UNISUAM\n\thttps://youtu.be/Hxg9K2-QFYI\n\thttps://www.youtube.com/embed/Hxg9K2-QFYI");
        }
    }
}


function copiarTexto2_1() {
    var texto2_Copiado = document.getElementById('copiar2_1');

    document.getElementById('copiar2_1').disabled = false;

    texto2_Copiado.select();
    texto2_Copiado.setSelectionRange(0, 99999);
    document.execCommand('copy');

    document.getElementById('copiar2_1').disabled = true;
}