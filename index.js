/*
IMAGENS RETIRADAS DOS SITE
https://www.imagensanimadas.com/cat-tux-1618.htm
 */



function f_galeria()
    {

        return new Promise(function(resolve, reject) {

            /* CODIGO PARA FUNCIONAR COM VÁRIAS IMAGENS E OS LINKS DAS IMAGENS ESTÁ DENTRO DE UM ARQUIVO .json EXTERNO NO CASO O (BD_Imagens.json) */
            var sg = [];
            var max_img = 15;
            var i;
            var irand;
            
            var ajax = new XMLHttpRequest();
            ajax.open("GET", "data.json", true);
            ajax.onload = function() 
                {
                    if (this.readyState == 4 && this.status == 200) 
                        {
                            var BD_IMG = JSON.parse(this.responseText);
                            /*
                            console.log("VALOR DO JSON: " + BD_IMG[0].LINK );
                            console.log("TIPO DO JSON: " + typeof  BD_IMG ); 
                            */
                            for(i = 0 ; i <= max_img ; i++)
                                {
                                    // CRIANDO AS IMAGENS
                                    sg[i] = document.createElement("IMG");
                                    
                                    // PARA MOSTRANDO IMAGENS ALEATÓRIAS
                                    irand = Math.floor(Math.random() * max_img);
                                    //console.log("VALOR DE irand: " + irand);
                                    
                                    // USAR IMAGENS DA INTERNET
                                    sg[i].src = BD_IMG[irand].url;
                                    sg[i].alt = "Imagen "+irand;
                    
                                    // CONFIGURANDO O TAMANHO DAS IMAGENS
                                    sg[i].width = "400";
                                    sg[i].height = "400";
                    
                                    // DIV DE DESTINO NO HTML
                                    var gal = document.getElementById("GALERIA");
                    
                                    // ENVIANDO AS IMAGENS PARA A DIV NO HTML
                                    gal.appendChild(sg[i]);

                                    resolve(ajax.response);
                                        }
                                }
                    else 
                        {
                            reject(Error('IMAGEM NÃO FOI CARREGADA COM SUCESSO \n CODIGO DO ERRO: ' + ajax.statusText));

                                }
                    };

            ajax.onerror = function()
                {
                    reject(Error('ERRO DE REDE'));
                        };

            ajax.send();
        });
        
 
            }



function f_carrega_mais()
            {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) 
                    {
                        console.log("você está no final da página");
                        f_galeria();
                        
                            }
                else
                    {
                        console.log("você NÃO está no final da página");
                    
                            }
                    }

