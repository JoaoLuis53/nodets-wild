let dt = new Date();
let ano = dt.getFullYear();
let dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let dia = dias[dt.getDay()];
let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let mes = meses[dt.getMonth()];
let d = dt.getDate();
let dataMenu = document.querySelector('.menu');
let dateItem = document.querySelector('.data').innerHTML = dia + ' , ' + d + ' de ' + mes + ' de ' + ano + '.';
let dataFooter = document.querySelector('.footer').innerHTML =
    'Copyright © wildscheine Trail Club - ' + ano + '.';

dateItem.innerHTML = dataMenu;