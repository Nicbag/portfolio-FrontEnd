// FUNCIONES EDIT ACERCA DE

    function cambiarParrafoAcercaDe(){
        document.getElementById("edit-acercademi").style.display="block";
    };

    function editartextoAcercaDe(text){
        document.getElementById("text-acercademi").innerText= text;
    }
    function guardartextoAcercaDe(){
        let text = document.getElementById("edit-acercademi");
        text.addEventListener("keyup",(e) => {
            if(e.key=="Enter"){
                text.style.display="none"; 
            }
        })
    }

// EDIT PERFIL
    function cambiarParrafoPerfil(){
        document.getElementById("edit-perfil1").style.display="block";
        document.getElementById("edit-perfil2").style.display="block";
        document.getElementById("edit-perfil3").style.display="block";
        
    }
    function editartextoEducacion(linea,text){
        if(linea==1){
            document.getElementById("text-perfil1").innerText= text;
        }
        if(linea==2){
            document.getElementById("text-perfil2").innerText= text;
        }
        if(linea==3){
            document.getElementById("text-perfil3").innerText= text;
        }
    }

    function guardartextoEducacion(){
        
        let text1 = document.getElementById("edit-perfil1");
        let text2 = document.getElementById("edit-perfil2");
        let text3 = document.getElementById("edit-perfil3");
        let text=[text1,text2,text3];

        for (j in text) {
            text[j].addEventListener("keyup",(e)=>{
                if(e.key=="Enter"){
                    text1.style.display="none";
                    text2.style.display="none";
                    text3.style.display="none";
                }   
            })
        }

    }   
//FUNCIONES EDIT EDUCACION

    function cambiarParrafoEducacion(num){
        for(let i=1;i<=10;i++){
            if(num==i){
                document.getElementById("edit-educacion"+i.toString()+"-1").style.display="block";
                document.getElementById("edit-educacion"+i.toString()+"-2").style.display="block";
                document.getElementById("edit-educacion"+i.toString()+"-3").style.display="block";
            }
        }
    }

    function editartextoEducacion(row,linea,text){
        for(let i=1;i<=10;i++){
            if(row==i){
                if(linea==1){
                    document.getElementById("text-educacion"+i.toString()+"-1").innerText= text;
                }
                if(linea==2){
                    document.getElementById("text-educacion"+i.toString()+"-2").innerText= text;
                }
                if(linea==3){
                    document.getElementById("text-educacion"+i.toString()+"-3").innerText= text;
                }
            }
        }     
    }

    function guardartextoEducacion(row){
        for(let i=1; i<=10;i++){
            if(row==i){
                let text1 = document.getElementById("edit-educacion"+i.toString()+"-1");
                let text2 = document.getElementById("edit-educacion"+i.toString()+"-2");
                let text3 = document.getElementById("edit-educacion"+i.toString()+"-3");
                let text=[text1,text2,text3];

                for (j in text) {
                    text[j].addEventListener("keyup",(e)=>{
                        if(e.key=="Enter"){
                            text1.style.display="none";
                            text2.style.display="none";
                            text3.style.display="none";
                        }   
                    })
                }
            }
        }
    }

//EDIT EXPERIENCIA
    function cambiarParrafoExperiencia(num){
        for(let i=1;i<=10;i++){
            if(num==i){
                document.getElementById("edit-experiencia"+i.toString()+"-1").style.display="block";
                document.getElementById("edit-experiencia"+i.toString()+"-2").style.display="block";
                document.getElementById("edit-experiencia"+i.toString()+"-3").style.display="block";
            }
        }
    }

    function editartextoExperiencia(row,linea,text){
        for(let i=1;i<=10;i++){
            if(row==i){
                if(linea==1){
                    document.getElementById("text-experiencia"+i.toString()+"-1").innerText= text;
                }
                if(linea==2){
                    document.getElementById("text-experiencia"+i.toString()+"-2").innerText= text;
                }
                if(linea==3){
                    document.getElementById("text-experiencia"+i.toString()+"-3").innerText= text;
                }
            }
        }
    }

    function guardartextoExperiencia(row){
        for(let i=1; i<=10;i++){
            if(row==i){
                let text1 = document.getElementById("edit-experiencia"+i.toString()+"-1");
                let text2 = document.getElementById("edit-experiencia"+i.toString()+"-2");
                let text3 = document.getElementById("edit-experiencia"+i.toString()+"-3");
                let text=[text1,text2,text3];

                for (j in text) {
                    text[j].addEventListener("keyup",(e)=>{
                        if(e.key=="Enter"){
                            text1.style.display="none";
                            text2.style.display="none";
                            text3.style.display="none";
                        }   
                    })
                }
            }
        }
    }

//EDIT DESTREZAS

    function cambiardestreza(num){
        for(let i=1;i<=20;i++){
            if(num==i){
                document.getElementById("edit-destreza"+i.toString()).style.display="block";
                document.getElementById("edit-barra"+i.toString()).style.display="block";
            }
        }
    }

    function editartextoDestreza(num,text){
        for(let i=1;i<=20;i++){
            if(num==i){
                document.getElementById("text-destreza"+i.toString()).innerText= text;
                
            }
        }
    }
    function editarbarraDestreza(num, wid){
        for(let i=1;i<=20;i++){
            if(num==i){
                document.getElementById("text-barra"+i.toString()).style.width=wid.toString()+"%";
            }
        }
    }

    function guardartextoDestreza(num){
        for(let i=1;i<=20;i++){
            if(num==i){
                let text= document.getElementById("edit-destreza"+i.toString());
                let barra= document.getElementById("edit-barra"+i.toString());
                destreza=[text,barra];

                for(j in destreza){
                    destreza[j].addEventListener("keyup",(e)=>{
                        if(e.key=="Enter"){
                            text.style.display="none";
                            barra.style.display="none";
                        }
                    })  
                }
            }
        }
    }

// EDITS CURSOS
    function cambiarcurso(num){
        for(let i=1;i<=10;i++){
            if(num==i){
                document.getElementById("edit-curso"+i.toString()+"-1").style.display="block";
                document.getElementById("edit-curso"+i.toString()+"-2").style.display="block";
                document.getElementById("edit-curso"+i.toString()+"-3").style.display="block";
            }
        }
    }

    function editarCurso(num,linea,text){
        for(let i=1;i<=10;i++){
            if(num==i){
                if(linea==1){
                    document.getElementById("text-curso"+i.toString()+"-1").innerText= text;
                }
                if(linea==2){
                    document.getElementById("text-curso"+i.toString()+"-2").innerText= text;
                }
                if(linea==3){
                    document.getElementById("text-curso"+i.toString()+"-3").innerText= text;
                }    
            }
        }
    }

    function guardartextoCurso(row){
        for(let i=1; i<=10;i++){
            if(row==i){
                let text1 = document.getElementById("edit-curso"+i.toString()+"-1");
                let text2 = document.getElementById("edit-curso"+i.toString()+"-2");
                let text3 = document.getElementById("edit-curso"+i.toString()+"-3");
                let text=[text1,text2,text3];

                for (j in text) {
                    text[j].addEventListener("keyup",(e)=>{
                        if(e.key=="Enter"){
                            text1.style.display="none";
                            text2.style.display="none";
                            text3.style.display="none";
                        }   
                    })
                }
            }
        }
    }

//EDITS PROYECTOS

    function cambiarproyecto(num){
        for(let i=1;i<=10;i++){
            if(num==i){
                document.getElementById("edit-proyecto"+i.toString()+"-1").style.display="block";
                document.getElementById("edit-proyecto"+i.toString()+"-2").style.display="block";
                document.getElementById("edit-proyecto"+i.toString()+"-3").style.display="block";
            }
        }
    }

    function editarProyecto(num,linea,text){
        for(let i=1;i<=10;i++){
            if(num==i){
                if(linea==1){
                    document.getElementById("text-proyecto"+i.toString()+"-1").innerText= text;
                }
                if(linea==2){
                    document.getElementById("text-proyecto"+i.toString()+"-2").innerText= text;
                }
                if(linea==3){
                    document.getElementById("text-proyecto"+i.toString()+"-3").innerText= text;
                }    
            }
        }
    }

    function guardartextoProyecto(row){
        for(let i=1; i<=10;i++){
            if(row==i){
                let text1 = document.getElementById("edit-proyecto"+i.toString()+"-1");
                let text2 = document.getElementById("edit-proyecto"+i.toString()+"-2");
                let text3 = document.getElementById("edit-proyecto"+i.toString()+"-3");
                let text=[text1,text2,text3];

                for (j in text) {
                    text[j].addEventListener("keyup",(e)=>{
                        if(e.key=="Enter"){
                            text1.style.display="none";
                            text2.style.display="none";
                            text3.style.display="none";
                        }   
                    })
                }
            }
        }
    }

// EDITS IDIOMAS
    function cambiaridioma(num){
        for(let i=1;i<=20;i++){
            if(num==i){
                document.getElementById("edit-idioma"+i.toString()+"-1").style.display="block";
                document.getElementById("edit-idioma"+i.toString()+"-2").style.display="block";
                document.getElementById("edit-progress"+i.toString()).style.display="block";
            }
        }
    }

    function editartextoIdioma(num,linea,text){
        for(let i=1;i<=20;i++){
            if(num==i){
                if(linea==1){
                document.getElementById("text-idioma"+i.toString()+"-1").innerText= text;
                }
                if(linea==2){
                    document.getElementById("text-idioma"+i.toString()+"-2").innerText= text;    
                }
            }
        }
    }
    function editarbarraIdioma(num, wid){
        for(let i=1;i<=20;i++){
            if(num==i){
                document.getElementById("text-progress"+i.toString()).style.width=wid.toString()+"%";
            }
        }
    }

    function guardartextoIdioma(num){
        for(let i=1;i<=20;i++){
            if(num==i){
                let text1= document.getElementById("edit-idioma"+i.toString()+"-1");
                let text2= document.getElementById("edit-idioma"+i.toString()+"-2");
                let barra= document.getElementById("edit-progress"+i.toString());
                idioma=[text1,text2,barra];

                for(j in idioma){
                    idioma[j].addEventListener("keyup",(e)=>{
                        if(e.key=="Enter"){
                            text1.style.display="none";
                            text2.style.display="none";
                            barra.style.display="none";
                        }
                    })  
                }
            }
        }
    }

