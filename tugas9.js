function panggilObject(){
  var pekerja = {
    nama : "Budi",
    umur : 42,
    keahlian : "Tukang Batu dan Kayu",
    gaji : 3000000,
  }
  for(var x in pekerja){
    console.log(pekerja[x])
  }
}

panggilObject();