idTarefaAlterados=""
  diaAlterado=""

  alteracoes=""
  function enviarAlteracoes()
  {
        form = document.createElement('form')
        form.style.display='none'
        form.action='/atualizarBanco'
        form.method='POST'
        document.body.appendChild(form)
        
		inputDiaAlterado= document.createElement('input')
        inputDiaAlterado.name="diaAlterado"
		inputDiaAlterado.value=diaAlterado

		inputIdTarefaAlterada= document.createElement('input')
        inputIdTarefaAlterada.name="idTarefaAlterada"
        inputIdTarefaAlterada.value=idTarefaAlterados
		

		inputAlteracao= document.createElement('input')
        inputAlteracao.name="alteracoes"
		inputAlteracao.value=alteracoes
		
        form.appendChild(inputDiaAlterado)
		form.appendChild(inputIdTarefaAlterada)
		form.appendChild(inputAlteracao)
       
        form.submit()

  }
	let div_dias = document.getElementsByClassName("bloco_dias");

	function mudarCor(divs,cor,id,dia)
	{
		for(var i=0;i<div_dias.length;i++)
		{
			
			if(divs[i].id==id && div_dias[i].getAttribute('dia')==dia)
			{	
				divs[i].style.backgroundColor=cor
			}
		}	
	}
    nomeDosDias=['domingoFeito','segundaFeito','tercaFeito','quartaFeito','quintaFeito','sextaFeito','sabadoFeito'] 
    function salvarAlteracoes(id,dia){
	
        let reilta = document.getElementsByTagName("reilta");
        let elementoEscolhido;
        for(let i=0;i<reilta.length;i++)
        {
            if(reilta[i].id==id)
            {
          
                idTarefaAlterados+=id+' '
		
		        diaAlterado+=dia+' '
		        if(reilta[i].getAttribute(nomeDosDias[dia])=='false')
		        {
			        reilta[i].setAttribute(nomeDosDias[dia],true)
			        alteracoes+='1 '
		        }else{
			        reilta[i].setAttribute(nomeDosDias[dia],false)
			        alteracoes+='0 '
		        }
	
            }
        }
    
  }
  function escolherElementoPeloIdePeloDia (elementos,id,dia_id)
  {
    for (let i=0;i<elementos.length;i++)
    {   
        if(elementos[i].id==id)
        {
            if(elementos[i].getAttribute('dia')==dia_id)

            return elementos[i];
        }
    }
  }
	function realizaTarefa(dia,id,dia_id){
		let elemento = escolherElementoPeloIdePeloDia(div_dias,id,dia_id)
        if(dia=='true'){
            
            if(elemento.style.backgroundColor=='rgb(60, 230, 175)')
            {
			    mudarCor(div_dias,'#FD6068',id,dia_id)
            }else{
               
                
                mudarCor(div_dias,'#3CE6AF',id,dia_id)
            }
      		salvarAlteracoes(id,dia_id)
    }
	}
	
	var verificaDia = document.getElementsByTagName("reilta")
    for (var i = 0;i<verificaDia.length;i++)
    {
            if(verificaDia[i].getAttribute('domingoFeito') == 'true'){
        
                mudarCor(div_dias,"#3CE6AF",verificaDia[i].id,0)
            }
            if(verificaDia[i].getAttribute('segundaFeito') == 'true'){
        
                mudarCor(div_dias,"#3CE6AF",verificaDia[i].id,1)
            }
            if(verificaDia[i].getAttribute('tercaFeito') == 'true'){
        
                mudarCor(div_dias,"#3CE6AF",verificaDia[i].id,2)
            }
            if(verificaDia[i].getAttribute('quartaFeito') == 'true'){
        
                mudarCor(div_dias,"#3CE6AF",verificaDia[i].id,3)
            }
            if(verificaDia[i].getAttribute('quintaFeito') == 'true'){
        
                mudarCor(div_dias,"#3CE6AF",verificaDia[i].id,4)
            }
            if(verificaDia[i].getAttribute('sextaFeito') == 'true'){
        
                mudarCor(div_dias,"#3CE6AF",verificaDia[i].id,5)
            }
            if(verificaDia[i].getAttribute('sabadoFeito') == 'true'){
        
                mudarCor(div_dias,"#3CE6AF",verificaDia[i].id,6)
            }
    }

	function iniciaModal() {
		
		modalID = 'modal-promocao'

		const modal = document.getElementById(modalID);
		if (modal) {
			modal.classList.add('mostrar');
			modal.addEventListener('click', (e) => {
				if (e.target.id == modalID || e.target.className == 'fechar') {
					modal.classList.remove('mostrar');
					localStorage.fechaModal = modalID;
				}
			});
		}
	}
    
	function escolherElementoPeloId(elementos,id)
    {
       
       
        
        
        for (let i=0;i<elementos.length;i++)
        {   
            if(elementos[i].id==id)
            {
                return elementos[i];
            }
        }
    }
   
    for(var i=0;i<div_dias.length;i++)
    {
        let elemento = escolherElementoPeloId(verificaDia,div_dias[i].id)
        if(div_dias[i].getAttribute('diaDeTarefa')=='false')
        {
            div_dias[i].style.backgroundColor="#c4c4c4"
        }else
        {
            data = new Date();
            

            if(data.getDay()>div_dias[i].getAttribute('dia') && elemento.getAttribute(nomeDosDias[div_dias[i].getAttribute('dia')])=='false')
            {
               
                div_dias[i].style.backgroundColor="#FD6068"
            }

        }
    }
    seila=escolherElementoPeloId(verificaDia,'44')
	
    const logo = document.querySelector('.contato .button');
	//logo.addEventListener('click', () => iniciaModal('modal-promocao'));
	function validateForm() {
		

  		var x = document.forms["myForm"]["nomes"].value;
  		if (x == "") {
    		alert("T??tulo precisa ser preenchido.");
    		return false;
  		}
	}
