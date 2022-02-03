const NamaArray = [
    {Nama: `abdul`, kelas: `XI RPl 1`},
    {Nama: `diki`, kelas: `XI RPl 1`},
    {Nama: `fatih`, kelas: `XI RPl 2`},
    {Nama: `Ilham`, kelas: `XI RPl 1`},
    {Nama: `fauzy`, kelas: `XI RPl 3`},
    {Nama: `Raihan`, kelas: `XI RPl 3`},
    {Nama: `deni`, kelas: `XI RPl 1`},
    {Nama: `Fahmi`, kelas: `XI RPl 1`},
    {Nama: `Rama`, kelas: `XI RPl 2`},
    {Nama: `romli`, kelas: `XI RPl 2`},
];
// Map
console.log(`Search Nama:`);
function NamaMap() {
    const map = NamaArray.map (itemmap => {
        const konten = {};
        konten[itemmap.Nama] = itemmap.kelas;
        konten.Pity = Math.floor(Math.random()* 90);
        return konten
    });
    console.log(map);
}
NamaMap();
// Filter
console.log(`List:`);
function NamaFilter() {
    const filter = NamaArray.filter (itemfilter => {
        return itemfilter.kelas == `XI RPl 1`;
    });
    console.log(filter);
}
NamaFilter();