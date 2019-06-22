nomes.sort((a,b)=>{
    let aTemp = typeof a.Nome == 'string'? a.Nome.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase(): a.Nome;
    let bTemp = typeof b.Nome == 'string'? b.Nome.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase(): b.Nome;
    return aTemp > bTemp? 1:-1;
});
