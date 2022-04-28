
const sintomasMasHabituales=[
    {id:1, nombre:'Fiebre'},
    {id:2, nombre:'Tos'},
    {id:3, nombre:'Cansancio'},
    {id:4, nombre:'Perdida del gusto y olfato'}
];

const sintomasMenosHabituales=[
    {id:1, nombre:'Dolor de garganta'},
    {id:2, nombre:'Dolor de cabeza'},
    {id:3, nombre:'Diarrea'},
    {id:4, nombre:'Ojos rojos o irritados'},
];

const sintomasSerios=[
    {id:1, nombre:'Dificultad para respirar'},
    {id:2, nombre:'Perdida de movilidad'},
    {id:3, nombre:'Dolor en el pecho'}
];

const sintomas={
    masHabituales: sintomasMasHabituales,
    menosHabituales: sintomasMenosHabituales,
    serios: sintomasSerios
}

const reducer=(estado=sintomas,accion)=>{
    return estado;
}

export default reducer;