import './App.css';
import React, {Fragment, useState} from "react";
import  QuotesBox from'./component/QuotesBox';
import {quotes} from './component/Quotes.json';


function App() {
    /*en esta funcion iteramos con un for el array de citas (json) cambiar el orden del array **/
  const randomArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }


  const imageList = [
                     "https://www.comprarlujo.com/wp-content/uploads/2019/06/grace-santorini5.jpg",
                     "https://img.ecologiahoy.com/2017/06/fotos-paisajes-hermosos-y-verdes-del-mundo-11.jpeg",
                     "https://microsofters.com/wp-content/uploads/2021/06/img21-scaled.jpg",
                     "https://www.todoappleblog.com/wp-content/uploads/2015/08/nuevos-fondos-pantalla-ios-9-1200x900.jpg",
                     "https://wallpaperstock.net/wallpapers/thumbs1/14274wide.jpg",
                     "https://www.muycomputer.com/wp-content/uploads/2020/06/fondo_de_pantalla_bloquea_Android.jpg",
                     "https://t.ipadizate.es/2020/05/New-Macbook-Pro-13-Wallpapers-Central-Desktop-2.png",
                     "https://i.ytimg.com/vi/u5rY4e2ew8Q/maxresdefault.jpg",
                     "https://www.ecestaticos.com/image/clipping/eb5c71840cf0aef05658a65eec461c90/cientificos-revelan-que-son-las-misteriosas-huellas-del-fondo-del-gran-agujero-azul.jpg",
                     "https://i.blogs.es/202202/cascadas/1366_2000.jpeg",
                     "https://www.elagoradiario.com/wp-content/uploads/2020/06/fondo-oceanico-cartografiar.jpg",
                     "https://www.elagoradiario.com/wp-content/uploads/2021/04/cartografiar-fondo-marino.jpg",
                     "https://i.blogs.es/550f58/relax/1366_2000.jpeg",
                     "https://www.art-madrid.com/image/5e30b4b587e30628f52dcb23/0/serie-mar-de-fondo-ausencia.jpg",
                     "https://i.blogs.es/dbca7a/fondo/1366_2000.jpeg",
                     "https://media.istockphoto.com/vectors/abstract-painting-background-for-wallpapers-posters-cards-invitations-vector-id1221853200",
                     "https://thumbs.dreamstime.com/z/fondo-3d-2267390.jpg",
                     "https://1.bp.blogspot.com/-kuPZyHvLHPg/WqmEQv03c6I/AAAAAAAB0vM/Djfw2Gz7lDYiVBkk3npAmWr53T3H-BO6ACK4BGAYYCw/s1600/imagenes-paisajes-hermosos-cueva-cascada.jpg",
                     "https://s1.1zoom.me/big0/653/425846-Kycb.jpg",
                     "https://1.bp.blogspot.com/-YAqKVzYSn0U/WgPB0RCh4GI/AAAAAAADULQ/YsA3GaZMvm88_JqKdxl7U4unkSe0x-iuACLcBGAs/s1600/paisajes%2Bde%2Bla%2Bnaturaleza%2B8.jpg",
                     "http://4.bp.blogspot.com/-uZY32bKEqtA/UkG1UoCsJwI/AAAAAAAACb4/bugI9AH8VPc/s1600/im%2525C3%2525A1genes-gratis-para-fondos-y-wallpapers-de-paisajes-motos-piscinas-y-playas-fotos-libres%2B%2525288%252529.jpg",
                     "https://www.entornoturistico.com/wp-content/uploads/2021/01/Amanecer-en-la-playa-1280x720.jpg",
                     "https://i.pinimg.com/originals/69/88/79/698879ef12833226b2458b093efecc23.jpg",
                     "http://3.bp.blogspot.com/-9ljG4D8HF2w/UJ3AXzoGZaI/AAAAAAAAMxw/nTHkmkr79YY/s1600/Hermoso%252BPaisaje%252Bde%252Blas%252BMonta%2525C3%2525B1as%252B-%252BWallpaper%252BHD.jpg",
                     "https://www.10wallpaper.com/wallpaper/1366x768/1503/columbia_lake_canada-Photo_HD_Wallpaper_1366x768.jpg",
                     "https://www.diariodecuyo.com.ar/export/sites/diariodecuyo/img/2018/03/09/machu_picchu.jpg",
                     "https://www.exoticca.com/es/blog/wp-content/uploads/2019/08/Estos-son-los-lagos-m%C3%A1s-bonitos-del-mundo.jpg",
                     "http://k11.kn3.net/071012B54.jpg",
                     "https://www.heartmybackpack.com/wp-content/uploads/2016/08/IMG_0562.jpg",
                     "https://cdn.kimkim.com/files/a/content_articles/featured_photos/666b7499ad8f8b8af9c97472ae9501390990ff86/big-cb2560695d2f5a7b02c5b0581a0fed8c.jpg",
                     "https://www.codyduncan.com/blogimages/2015/04/norway-autumn-03.jpg",
                     "https://assets.afcdn.com/story/20161228/1025805_w944h530c1cx450cy250.jpg",
                     "https://i2.wp.com/i.pinimg.com/originals/d6/b2/e3/d6b2e3ba7407c2dd85c5161d938bf98e.jpg",
                     "https://3.bp.blogspot.com/-D1j-JF1vpyA/U63PPlfPprI/AAAAAAAA5pg/RsC3CkWYO7U/s1600/Hermosos-paisajes-cascadas-wallpapers-Lagos_de_Plitvice-Croacia.jpg",
                     "https://heymondo.es/blog/wp-content/uploads/2018/07/islas-mas-bonitas-del-mundo.jpg",
                     "https://blog.logitravel.com/wp-content/uploads/2020/01/portada-1.jpg",
                     "http://www.playasmexico.mx/IMG/arton11213.jpg",
                     "https://sergioariasfotografia.es/blog/wp-content/uploads/2017/10/taller-fotografia-paisaje-costa-quebrada-2801-750px.jpg",
                     "https://sergioariasfotografia.es/blog/wp-content/uploads/2017/10/taller-fotografia-paisaje-costa-quebrada-2754-750px.jpg",
                     "https://sergioariasfotografia.es/blog/wp-content/uploads/2017/10/SAR3056-750px.jpg",
                     "https://sergioariasfotografia.es/blog/wp-content/uploads/2017/10/taller-fotografia-paisaje-costa-quebrada-3040-750px.jpg",
                     "https://felipe-gomez.com/wp-content/uploads/2018/07/Amanecer-del-Llaima-850px-Felipe-Gomez.jpg",
                     "https://felipe-gomez.com/wp-content/uploads/2018/07/Ajustes-de-c%C3%A1mara-2-850px.jpg",
                     "https://felipe-gomez.com/wp-content/uploads/2018/07/Ajustes-de-camera-4.jpg",
                     "https://i.pinimg.com/originals/0c/70/a1/0c70a12c4a27f815e4bb38330feb223c.jpg",
                     "http://3.bp.blogspot.com/-pkLGs2gPYrY/UnFEI_0oB6I/AAAAAAAAAB8/v69WDAmybUs/s1600/paisajes+del+mundo.jpg",
                     "https://media.elobservadordelsur.com/p/3c139c81d3d3384187aae7d4d1bc675e/adjuntos/247/imagenes/000/114/0000114209/paine-chilejpeg.jpeg",
                     "https://www.todoappleblog.com/wp-content/uploads/2015/08/nuevos-fondos-pantalla-ios-9-1200x900.jpg",
                     "https://wallpaperstock.net/wallpapers/thumbs1/14274wide.jpg",
                     "https://www.muycomputer.com/wp-content/uploads/2020/06/fondo_de_pantalla_bloquea_Android.jpg",
                     "https://t.ipadizate.es/2020/05/New-Macbook-Pro-13-Wallpapers-Central-Desktop-2.png",
                     "https://i.ytimg.com/vi/DFpkAsQEO7c/maxresdefault.jpg",                                         
                     "https://i.ytimg.com/vi/u5rY4e2ew8Q/maxresdefault.jpg",
                     "https://www.ecestaticos.com/image/clipping/eb5c71840cf0aef05658a65eec461c90/cientificos-revelan-que-son-las-misteriosas-huellas-del-fondo-del-gran-agujero-azul.jpg",
                     "https://i.blogs.es/202202/cascadas/1366_2000.jpeg",
                     "https://www.elagoradiario.com/wp-content/uploads/2020/06/fondo-oceanico-cartografiar.jpg",
                     "https://www.elagoradiario.com/wp-content/uploads/2021/04/cartografiar-fondo-marino.jpg",
                     "https://i.blogs.es/550f58/relax/1366_2000.jpeg",
                     "https://i.blogs.es/dbca7a/fondo/1366_2000.jpeg",
                     "https://thumbs.dreamstime.com/z/fondo-3d-2267390.jpg",
                     "https://1.bp.blogspot.com/-kuPZyHvLHPg/WqmEQv03c6I/AAAAAAAB0vM/Djfw2Gz7lDYiVBkk3npAmWr53T3H-BO6ACK4BGAYYCw/s1600/imagenes-paisajes-hermosos-cueva-cascada.jpg",
                     "https://previews.123rf.com/images/coffmancmu/coffmancmu1707/coffmancmu170700210/82109986-imagen-de-la-calzada-con-d%C3%ADa-soleado-en-el-parque-para-el-uso-del-fondo-.jpg",
                     "https://s1.1zoom.me/big0/653/425846-Kycb.jpg",
                     "https://1.bp.blogspot.com/-YAqKVzYSn0U/WgPB0RCh4GI/AAAAAAADULQ/YsA3GaZMvm88_JqKdxl7U4unkSe0x-iuACLcBGAs/s1600/paisajes%2Bde%2Bla%2Bnaturaleza%2B8.jpg",
                     "http://4.bp.blogspot.com/-uZY32bKEqtA/UkG1UoCsJwI/AAAAAAAACb4/bugI9AH8VPc/s1600/im%2525C3%2525A1genes-gratis-para-fondos-y-wallpapers-de-paisajes-motos-piscinas-y-playas-fotos-libres%2B%2525288%252529.jpg",
                     "https://www.entornoturistico.com/wp-content/uploads/2021/01/Amanecer-en-la-playa-1280x720.jpg",
                     "https://i.pinimg.com/originals/69/88/79/698879ef12833226b2458b093efecc23.jpg",
                     "http://3.bp.blogspot.com/-9ljG4D8HF2w/UJ3AXzoGZaI/AAAAAAAAMxw/nTHkmkr79YY/s1600/Hermoso%252BPaisaje%252Bde%252Blas%252BMonta%2525C3%2525B1as%252B-%252BWallpaper%252BHD.jpg",
                     "https://www.10wallpaper.com/wallpaper/1366x768/1503/columbia_lake_canada-Photo_HD_Wallpaper_1366x768.jpg",
                     "https://www.diariodecuyo.com.ar/export/sites/diariodecuyo/img/2018/03/09/machu_picchu.jpg",
                     "https://www.exoticca.com/es/blog/wp-content/uploads/2019/08/Estos-son-los-lagos-m%C3%A1s-bonitos-del-mundo.jpg",
                     "http://k11.kn3.net/071012B54.jpg",
                     "https://www.heartmybackpack.com/wp-content/uploads/2016/08/IMG_0562.jpg",
                     "https://cdn.kimkim.com/files/a/content_articles/featured_photos/666b7499ad8f8b8af9c97472ae9501390990ff86/big-cb2560695d2f5a7b02c5b0581a0fed8c.jpg",
                     "https://www.codyduncan.com/blogimages/2015/04/norway-autumn-03.jpg",
                     "https://assets.afcdn.com/story/20161228/1025805_w944h530c1cx450cy250.jpg",
                     "https://i2.wp.com/i.pinimg.com/originals/d6/b2/e3/d6b2e3ba7407c2dd85c5161d938bf98e.jpg",
                     "https://3.bp.blogspot.com/-D1j-JF1vpyA/U63PPlfPprI/AAAAAAAA5pg/RsC3CkWYO7U/s1600/Hermosos-paisajes-cascadas-wallpapers-Lagos_de_Plitvice-Croacia.jpg",
                     "https://heymondo.es/blog/wp-content/uploads/2018/07/islas-mas-bonitas-del-mundo.jpg",
                     "https://blog.logitravel.com/wp-content/uploads/2020/01/portada-1.jpg",
                     "http://www.playasmexico.mx/IMG/arton11213.jpg",
                     "https://sergioariasfotografia.es/blog/wp-content/uploads/2017/10/taller-fotografia-paisaje-costa-quebrada-2801-750px.jpg",
                     "https://sergioariasfotografia.es/blog/wp-content/uploads/2017/10/taller-fotografia-paisaje-costa-quebrada-2754-750px.jpg",
                     "https://sergioariasfotografia.es/blog/wp-content/uploads/2017/10/SAR3056-750px.jpg",
                     "https://sergioariasfotografia.es/blog/wp-content/uploads/2017/10/taller-fotografia-paisaje-costa-quebrada-3040-750px.jpg",
                     "https://felipe-gomez.com/wp-content/uploads/2018/07/Amanecer-del-Llaima-850px-Felipe-Gomez.jpg",
                     "http://plazaturismo.com/usr/data/image/big/2016-04-07_45968290.jpg",
                     "https://felipe-gomez.com/wp-content/uploads/2018/07/Ajustes-de-c%C3%A1mara-2-850px.jpg",
                     "https://felipe-gomez.com/wp-content/uploads/2018/07/Ajustes-de-camera-4.jpg",
                     "https://i.pinimg.com/originals/0c/70/a1/0c70a12c4a27f815e4bb38330feb223c.jpg",
                     "http://3.bp.blogspot.com/-pkLGs2gPYrY/UnFEI_0oB6I/AAAAAAAAAB8/v69WDAmybUs/s1600/paisajes+del+mundo.jpg",
                     "https://viajes.nationalgeographic.com.es/medio/2018/08/08/age-qpx-150805115__800x800.jpg",
                     "https://media.elobservadordelsur.com/p/3c139c81d3d3384187aae7d4d1bc675e/adjuntos/247/imagenes/000/114/0000114209/paine-chilejpeg.jpeg",
                     "https://travelandleisure.mx/wp-content/uploads/2018/10/shutterstock_494482471.jpg",
                     "https://viajes.nationalgeographic.com.es/medio/2018/02/27/hemis-0061431__800x800.jpg",
                     "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Puente_Nuevo_de_Ronda.jpg/1024px-Puente_Nuevo_de_Ronda.jpg",
                     "https://imanesdeviaje.com/wp-content/uploads/2020/03/paisajes-mas-bonitos-del-mundo-bahia-de-halong.jpg",
                     "https://i.pinimg.com/originals/4c/8e/1e/4c8e1ec33295ac6295d3362b02a0ef5f.jpg",
                     "http://2.bp.blogspot.com/-pxOTHEYeONs/Tp9VN-2e8UI/AAAAAAAAEcA/jTRdqpDJUyw/s1600/fondos-paisajes-1024%252520%252816%2529.jpg",
                     "https://d36tnp772eyphs.cloudfront.net/blogs/2/2019/11/shutterstock_603844232.jpg",
                     "https://d36tnp772eyphs.cloudfront.net/blogs/2/2019/11/shutterstock_518526283.jpg",
                     "https://cdn.noticiasdequeretaro.com.mx/wp-content/uploads/2020/01/13155900/Ca%C3%B1on-del-9A.jpg",
                     
                    ];
   
  let quotesRandom = quotes;
  let [next, setNext] = useState(0);
  /**esta funcion nos permite cambiar el estado lo que hace 
    es incrementar de uno en uno y al final nos manda un alert informando que a finalizado  */
  const handleAdd = () => {
    if(next < quotes.length - 1){
      setNext(next + 1)
      setBackground(`url("${imageList[next]}")`)
    }else {
      alert("fin de la lista")
    }
    
  }

  let [background, setBackground] = useState(
    `url("${imageList[next]}")`
  )

  let header = {
    backgroundImage: background,
    backgroundSize: '100%vh',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  }
  
  return (
    <Fragment>
      <header className="App-header" style={header}>
        {/**aqui llamamos el componente quotesbox y le pasamos los parametros (json) **/}
        <QuotesBox  quote={quotesRandom[next].quote}
                    author={quotesRandom[next].author} />
        <span >{next + 1}/{quotes.length}</span> {/* este es un contador que nos muestra  el numero de citas vista y el total que hay */}
        <button onClick={handleAdd }  > 
            Next
        </button> 
      </header>
    </Fragment>
  );
}

export default App;
