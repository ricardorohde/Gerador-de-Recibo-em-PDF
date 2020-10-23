function Data() {

	var data = new Date();
	var dias = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
	var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Outubro", "Novembro", "Dezembro");

	document.write(dias[data.getDay()] + ", " + data.getDate() + " de " + meses[data.getMonth()] + " de " + data.getFullYear() + ".");
}


function getDados() {

	document.getElementById('gerar').onclick = gerarPDF;
}


function gerarPDF() {
	var loja = document.getElementById('loja').value;
	var cnpj = document.getElementById('cnpj').value;
	var nume = document.getElementById('numero').value;
	var valor = document.getElementById('valor').value;
	var importancia = document.getElementById('importancia').value;
	var inicio = document.getElementById('inicio').value;
	var fim = document.getElementById('fim').value;
	var dias = document.getElementById('dias').value;
	var faltas = document.getElementById('faltas').value;
	var nome = document.getElementById('nome').value;

	if (valor == "" || importancia == "" || inicio == "" || fim == "" || dias == "" || nome == "") {
		alert('Preencha todos os campos do Formulário.');
		valor.focus();
		return false;
	} else {
		alert('Vão ser geradas duas vias do Recibo de Vale Transporte em PDF do funcionário(a) ' + nome + '.\nClique em OK para finalizar.');

	}

	var pdf = new jsPDF();


	pdf.setProperties({
		title: 'Recibo Vale Transporte',
		subject: 'Recibo ' + nume,
		author: 'Rafael Oliveira',
		keywords: 'gerador de recibos pessoal',
		creator: 'gPDF, javascript, web 2.0, ajax'
	});

	pdf.setFont("helvetica");
	pdf.setFontType("normal");
	pdf.setFontSize(22);
	pdf.text(20, 20, '                                 RECIBO');
	pdf.setTextColor(0);
	pdf.setFontSize(18);
	pdf.text(146, 30, 'Valor  R$ ' + valor);
	pdf.setFontSize(12);
	pdf.text(20, 50, 'RECEBI DE: ' + loja);
	pdf.text(20, 58, 'CNPJ: ' + cnpj);
	pdf.text(20, 66, 'A IMPORTÂNCIA DE: ( ' + importancia + ' ).');
	pdf.text(20, 74, 'REFERENTE A: VALE TRANSPORTE.');
	pdf.text(20, 82, 'PERÍODO DE: ' + inicio + ' a ' + fim + '.');
	pdf.text(20, 90, 'REFERENTE A: ' + dias + ' DIAS.           FALTAS: ' + faltas + '.');
	pdf.text(20, 106, 'DATA:___________________________');
	pdf.text(20, 114, 'ASSINATURA:_________________________________________');
	pdf.text(20, 122, 'NOME: ' + nome + '.');
	pdf.text(10, 8, '_________________________________________________________________________________');
	pdf.text(10, 12, '|');
	pdf.text(10, 16, '|');
	pdf.text(10, 20, '|');
	pdf.text(10, 24, '|');
	pdf.text(10, 28, '|');
	pdf.text(10, 32, '|');
	pdf.text(10, 36, '|');
	pdf.text(10, 40, '|');
	pdf.text(10, 44, '|');
	pdf.text(10, 48, '|');
	pdf.text(10, 52, '|');
	pdf.text(10, 56, '|');
	pdf.text(10, 60, '|');
	pdf.text(10, 64, '|');
	pdf.text(10, 68, '|');
	pdf.text(10, 72, '|');
	pdf.text(10, 76, '|');
	pdf.text(10, 80, '|');
	pdf.text(10, 84, '|');
	pdf.text(10, 88, '|');
	pdf.text(10, 92, '|');
	pdf.text(10, 96, '|');
	pdf.text(10, 100, '|');
	pdf.text(10, 104, '|');
	pdf.text(10, 108, '|');
	pdf.text(10, 112, '|');
	pdf.text(10, 116, '|');
	pdf.text(10, 120, '|');
	pdf.text(10, 124, '|');
	pdf.text(10, 128, '|');
	pdf.text(10, 132, '|_________________________________________________________________________________');
	pdf.text(200, 132, '|');
	pdf.text(200, 12, '|');
	pdf.text(200, 16, '|');
	pdf.text(200, 20, '|');
	pdf.text(200, 24, '|');
	pdf.text(200, 28, '|');
	pdf.text(200, 32, '|');
	pdf.text(200, 36, '|');
	pdf.text(200, 40, '|');
	pdf.text(200, 44, '|');
	pdf.text(200, 48, '|');
	pdf.text(200, 52, '|');
	pdf.text(200, 56, '|');
	pdf.text(200, 60, '|');
	pdf.text(200, 64, '|');
	pdf.text(200, 68, '|');
	pdf.text(200, 72, '|');
	pdf.text(200, 76, '|');
	pdf.text(200, 80, '|');
	pdf.text(200, 84, '|');
	pdf.text(200, 88, '|');
	pdf.text(200, 92, '|');
	pdf.text(200, 96, '|');
	pdf.text(200, 100, '|');
	pdf.text(200, 104, '|');
	pdf.text(200, 108, '|');
	pdf.text(200, 112, '|');
	pdf.text(200, 116, '|');
	pdf.text(200, 120, '|');
	pdf.text(200, 124, '|');
	pdf.text(200, 128, '|');
	//SEGUNDA VIA DO RECIBO
	pdf.setFont("helvetica");
	pdf.setFontType("normal");
	pdf.setFontSize(22);
	pdf.text(20, 174, '                                 RECIBO');
	pdf.setTextColor(0); //isso deve ser preto
	pdf.setFontSize(18);
	pdf.text(146, 184, 'Valor  R$ ' + valor);
	pdf.setFontSize(12);
	pdf.text(20, 204, 'RECEBI DE: ' + loja);
	pdf.text(20, 212, 'CNPJ: ' + cnpj);
	pdf.text(20, 220, 'A IMPORTÂNCIA DE: ( ' + importancia + ' ).');
	pdf.text(20, 228, 'REFERENTE A: VALE TRANSPORTE.');
	pdf.text(20, 236, 'PERÍODO DE: ' + inicio + ' a ' + fim + '.');
	pdf.text(20, 244, 'REFERENTE A: ' + dias + ' DIAS.           FALTAS: ' + faltas);
	pdf.text(20, 252, 'DATA:___________________________');
	pdf.text(20, 260, 'ASSINATURA:_________________________________________');
	pdf.text(20, 268, 'NOME: ' + nome);
	pdf.text(10, 162, '_________________________________________________________________________________');
	pdf.text(10, 166, '|');
	pdf.text(10, 170, '|');
	pdf.text(10, 174, '|');
	pdf.text(10, 178, '|');
	pdf.text(10, 182, '|');
	pdf.text(10, 186, '|');
	pdf.text(10, 190, '|');
	pdf.text(10, 194, '|');
	pdf.text(10, 198, '|');
	pdf.text(10, 202, '|');
	pdf.text(10, 206, '|');
	pdf.text(10, 210, '|');
	pdf.text(10, 214, '|');
	pdf.text(10, 218, '|');
	pdf.text(10, 222, '|');
	pdf.text(10, 226, '|');
	pdf.text(10, 230, '|');
	pdf.text(10, 234, '|');
	pdf.text(10, 238, '|');
	pdf.text(10, 242, '|');
	pdf.text(10, 246, '|');
	pdf.text(10, 250, '|');
	pdf.text(10, 254, '|');
	pdf.text(10, 258, '|');
	pdf.text(10, 262, '|');
	pdf.text(10, 266, '|');
	pdf.text(10, 270, '|');
	pdf.text(10, 274, '|');
	pdf.text(10, 278, '|_________________________________________________________________________________');
	pdf.text(200, 166, '|');
	pdf.text(200, 170, '|');
	pdf.text(200, 174, '|');
	pdf.text(200, 178, '|');
	pdf.text(200, 182, '|');
	pdf.text(200, 186, '|');
	pdf.text(200, 190, '|');
	pdf.text(200, 194, '|');
	pdf.text(200, 198, '|');
	pdf.text(200, 202, '|');
	pdf.text(200, 206, '|');
	pdf.text(200, 210, '|');
	pdf.text(200, 214, '|');
	pdf.text(200, 218, '|');
	pdf.text(200, 222, '|');
	pdf.text(200, 226, '|');
	pdf.text(200, 230, '|');
	pdf.text(200, 234, '|');
	pdf.text(200, 238, '|');
	pdf.text(200, 242, '|');
	pdf.text(200, 246, '|');
	pdf.text(200, 250, '|');
	pdf.text(200, 254, '|');
	pdf.text(200, 258, '|');
	pdf.text(200, 262, '|');
	pdf.text(200, 266, '|');
	pdf.text(200, 270, '|');
	pdf.text(200, 274, '|');
	pdf.text(200, 278, '|');


	pdf.save('Recibo_' + nome + '.pdf');
	window.location.reload();

}