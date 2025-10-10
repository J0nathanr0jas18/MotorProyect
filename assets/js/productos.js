// 1) Catálogo (puedes migrar a JSON externo si deseas)
const MOTOS = [
{ id:1, marca:'Honda', modelo:'CB125F', anio:2019, km:18000, cc:125, precio:1100, img:'assets/img/motos/Honda CB125F.png' },
{ id:2, marca:'Yamaha', modelo:'FZ-S', anio:2018, km:23000, cc:150, precio:1400, img:'assets/img/motos/Yamaha FZ-S.jpg' },
{ id:3, marca:'Bajaj', modelo:'Pulsar 200NS', anio:2020, km:15000, cc:200, precio:1850, img:'assets/img/motos/Bajaj Pulsar 200NS.png' },
{ id:4, marca:'Suzuki', modelo:'Gixxer 250', anio:2021, km:12000, cc:250, precio:2600, img:'assets/img/motos/Suzuki Gixxer 250.png' }
];


// 2) Render
function card(m){
return `<article class="card">
<img src="${m.img}" alt="${m.marca} ${m.modelo} ${m.anio}">
<div class="p">
<h3>${m.marca} ${m.modelo}</h3>
<p class="meta">${m.anio} · ${m.cc}cc · ${m.km.toLocaleString()} km</p>
<p class="price">USD ${m.precio.toLocaleString()}</p>
<a class="btn ghost" href="contacto.html?ref=${m.id}">Me interesa</a>
</div>
</article>`
}


function render(list){
const grid=document.getElementById('grid');
grid.innerHTML = list.map(card).join('');
}


// 3) Filtros
function unique(arr, key){ return [...new Set(arr.map(o=>o[key]))]; }


function initFiltros(){
const selMarca=document.getElementById('f-marca');
selMarca.innerHTML = ['','Honda','Yamaha','Bajaj','Suzuki','TVS','Italika']
.map(v=>`<option value="${v}">${v||'Todas'}</option>`).join('');


document.getElementById('btn-filtrar').addEventListener('click',()=>{
const marca = selMarca.value;
const cc = document.getElementById('f-cc').value;
const max = parseFloat(document.getElementById('f-precio').value||'');


let out = [...MOTOS];
if(marca) out = out.filter(m=>m.marca===marca);
if(cc) out = out.filter(m=>String(m.cc)===cc);
if(!Number.isNaN(max)) out = out.filter(m=>m.precio<=max);


render(out);
});


document.getElementById('btn-limpiar').addEventListener('click',()=>{
render(MOTOS);
});
}


// 4) Init
document.addEventListener('DOMContentLoaded',()=>{ render(MOTOS); initFiltros(); const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();});