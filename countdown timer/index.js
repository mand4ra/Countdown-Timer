const DiasEL = document.getElementById("Dias");
const HorasEL = document.getElementById("Horas");
const MinutosEL = document.getElementById("Minutos");
const SegundosEL = document.getElementById("Segundos");




const Anonovo = "1 jan 2024";

function countdown () {
    const dataanonovo = new Date(Anonovo);
    const dataatual = new Date();

    const SegundosTotais = (dataanonovo - dataatual) / 1000;

    const Dias = Math.floor(SegundosTotais / 3600 / 24);
    const Horas = Math.floor(SegundosTotais/ 3600) % 24;
    const Minutos = Math.floor(SegundosTotais / 60 ) % 60;
    const Segundos = Math.floor(SegundosTotais) % 60;

    DiasEL.innerHTML = Dias;
    HorasEL.innerHTML = Horas;
    MinutosEL.innerHTML = Minutos;
    SegundosEL.innerHTML = Segundos;
    

}
countdown();

setInterval(countdown, 1000);