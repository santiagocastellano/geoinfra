

import 'ol/ol.css';
import {Map, View} from 'ol';
import Control from 'ol/control/Control';
import TileLayer from 'ol/layer/Tile';

import TileWMS from 'ol/source/TileWMS';
import OSM from 'ol/source/OSM';
import $ from "jquery";
import {ZoomSlider} from 'ol/control';
import { scale } from 'ol/size';
//import {Sidebar} from 'ol/control.js';
//import {LayerSwitcher} from 'ol/ol-layerswitcher/dist/ol-layerswitcher';
//import { html, LitElement } from './lit-element/lit-element.js';


var my_map = {                       // <-- add this line to declare the object
    display: function () {           // <-- add this line to declare a method 

////////////////SOURCES///////////////////////////////

const sourceParcelas = new TileWMS(({
    url: "http://geo.arba.gov.ar/geoserver/idera/wms",
    attributions: ' ',
    params: {
        "LAYERS": "Parcela",
        "TILED": "true",
        "VERSION": "1.3.0"},
    
}));
const sourceZUsos = new ol.source.TileWMS(({
    url: "http://www.urbasig.gob.gba.gob.ar/geoserver/urbasig/wms",
      attributions: ' ',
    params: {
      "LAYERS": "zonificacion_zonas_espe",
      "TILED": "true",
      "VERSION": "1.3.0"},
  }));

  const sourceMunicipalidades = new ol.source.TileWMS(({
    url: "http://www.urbasig.gob.gba.gob.ar/geoserver/urbasig/wms",
      attributions: ' ',
    params: {
      "LAYERS": "municipalidades",
      "TILED": "true",
      "VERSION": "1.3.0"},
  }));
const sourceDepartamentos = new ol.source.TileWMS(({

    url: "http://geo.arba.gov.ar/geoserver/idera/wms",
      attributions: ' ',
    params: {
      "LAYERS": "Departamento",
      "TILED": "true",
      "VERSION": "1.3.0"},
  }));
const sourceHidro = new ol.source.TileWMS(({
    url: "http://www.mosp.gba.gov.ar/sig_hidraulica/ms/publico/wms.xml",
      attributions: ' ',
    params: {
      "LAYERS": "HidrografiaBuenosAires",
      "TILED": "true",
      "VERSION": "1.3.0"},
  }));

////////declaracion de capas//////////////////////////////

        const googleSat = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type': 'base',
            'opacity': 1.000000,
            source: new ol.source.XYZ({
                attributions: ' ',
                        url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        const OSM = new ol.layer.Tile({
            // A layer must have a title to appear in the layerswitcher
            title: 'OSM',
            // Again set this layer as a base layer
            type: 'base',
            visible: true,
            source: new ol.source.OSM()
        });

        const parcelas =  new ol.layer.Tile({
            source: sourceParcelas,
            title: "Parcelas",
            visible: false,
            opacity: 1.000000,                                 
            
        });

        const zUsos = new ol.layer.Tile({
            source: sourceZUsos,
            title: "Zonificación segun Usos",
            opacity: 1.000000,
            visible: false,
            
          });

          const municipalidades =  new ol.layer.Tile({
            source: sourceMunicipalidades,
            title: "Municipalidades",
            opacity: 1.000000,
            visible: false,
            
          });

          const departamentos = new ol.layer.Tile({
            source: sourceDepartamentos,
            title: "Departamentos",
            opacity: 1.000000,
            visible: false,
            crossOrigin: 'no-cors'
          });

          const hidrografia =  new ol.layer.Tile({
            source: sourceHidro,
            title: "Hidrografia",
            opacity: 1.000000,
            visible: false,
            
          });
          const wmsSource = new TileWMS({
            url: 'https://ahocevar.com/geoserver/wms',
            params: {'LAYERS': 'ne:ne', 'TILED': true},
            serverType: 'geoserver',
            crossOrigin: 'anonymous'
          });

///////////////////fin declaracion de capas////////////////////////////////

        var view = new View({
            extent: [-7765583.071159, -5055260.408855, -5601262.345613, -3864750.244618], maxZoom: 28, minZoom: 1
            
        });
        const map = new Map({
            target: 'osm_map',
            layers: [
                new ol.layer.Group({
                    // A layer must have a title to appear in the layerswitcher
                    'title': 'Capas Base',
                    layers: [
                        googleSat,
                        OSM, 
                    ]
                }),
                new ol.layer.Group({
                    // A layer must have a title to appear in the layerswitcher
                    title: 'Capas Info.',
                    // Adding a 'fold' property set to either 'open' or 'close' makes the group layer
                    // collapsible
                    fold: 'open',
                    layers: [
                            ///////////////////////catastro////////////////////
                        new ol.layer.Group({
                            // A layer must have a title to appear in the layerswitcher
                            title: 'Catastro',
                            fold: 'open',                           
                            layers: [
                                parcelas,
                                zUsos,
                                municipalidades,
                                departamentos,
                               
                            ]
                        }),
                        ////////////////hidraulica///////////////////////
                        new ol.layer.Group({
                            // A layer must have a title to appear in the layerswitcher
                            title: 'Hidraulica',
                            fold: 'open',
                            layers: [
                                hidrografia,
                               
                            ]
                        })
                        ///////////////////////////////////////////////////////////
                    ]
                })
            ],
            view: view
            
        });
        map.getView().fit([-7765583.071159, -5055260.408855, -5601262.345613, -3864750.244618], map.getSize());
        console.log('aca va algo'); 
       // var zoomslider = new ZoomSlider();
       // map.addControl(zoomslider);
       // var sidebar = new ol.control.Sidebar({ element: 'sidebar', position: 'left' });

        //map.addControl(sidebar);
       // $("#titulo").html("Hello World");

        var sidebar = new ol.control.Sidebar({ element: 'sidebar', position: 'left' });
        map.addControl(sidebar);
        var toc = document.getElementById("layers");
        
        ol.control.LayerSwitcher.renderPanel(map, toc);
       // var registro = '';
       // var viewResolution = view.getResolution();
       var elementos = [];
       function myCallback(response) {
        result = response;
        console.log("Inside ajax: "+result);                
        // Do whatever you need with result variable
      }
  
       
        map.on('singleclick', function(evt) {
      
           // var r= '';
            $("#spin").addClass("is-active"); //entro a consultar
            var pixel = map.getEventPixel(evt.originalEvent);
            var pixelcoord = evt.coordinate;
            //console.log(pixelcoord);
            var viewResolution = /** @type {number} */ (view.getResolution());
            //var array_contenido_campos=[];
           
            var fila = '';
           // var direccionesWMS = [];
            // array_contenido_campos = [];
             //var s;
            map.forEachLayerAtPixel(pixel, function(feature, layer) {
              // console.log(feature);
              //imprimir('skkkkdd');
                //$("#info").html('');//limpio la tabla del popup
                $("#tabla").html("");//limpio la tabla del popup
               var tipo = feature.values_.type;
               console.log(feature);
               if (tipo!='base'){//si es una cobertura
                  // feature.getSource()
                 // var url=fuente.getGetFeatureInfoUrl(  
                   // coordenada, viewResolution, view.getProjection(),{'INFO_FORMAT': 'application/json'}); 
                    var url = feature.getSource().getFeatureInfoUrl(
                    evt.coordinate, viewResolution, 'EPSG:3857',
                    {'INFO_FORMAT': 'application/json'});
                
                    var originalURL = url;
                    var queryURL = "https://cors-anywhere.herokuapp.com/" + originalURL
                //direccionesWMS.push(queryURL);
                    var tituloCapa = feature.values_.title;   
                    $.ajax({ //esta llamada se tendra que hacer tantas veces como capas existan, cambiando el cgi del url, en cada respeusta exitosa se arma la tabla
                        jsonp: true,
                        jsonpCallback: 'getJson',
                        type: 'GET',
                        url: queryURL,
                        crossDomain:true,
                        async: true, 
                        dataType: 'json',
                            headers: {
                                "x-requested-with": "xhr" 
                            },
                        success: function(data) {
                           // array_contenido_campos.push(data.features[0].id);
                            var id = data.features[0].id;
                            //leo las tablas del objeto que devuelve la consulta
                            var propVal = Object.values(data.features[0].properties);
                            var propKeys = Object.keys(data.features[0].properties);

                            console.log(data);
                            console.log("id: "+id);
                            console.log("keys: "+propKeys);
                            console.log("valores: "+propVal);
                            console.log('titulo capa : '+tituloCapa);
                            var headers = '';
                            var valores = '';
                            propKeys.forEach(key => {
                                // console.log('key: '+key);
                                headers += '<th scope="col">'+ key +'</th>';
                            });
                            propVal.forEach(val => {
                                valores += '<td >'+ val +'</td>';
                            })
                            var fila = '<table class="tg">\
                            <thead>\
                            <tr>'+ headers +'</tr>\
                            </thead>\
                            <tbody>\
                                <tr>'+ valores +'</tr>\
                            </tbody>\
                            </table>';
                        //  window.myFancyResponseData = 'santiago';
                            // $("#info").append('<div>'+data.features[0].id+'</div></br>');
                        
                            var tablaent = '<div class="table-responsive text-nowrap ">\
                                <table style="font-size:13px" class="table table-sm">\
                                <thead>\
                                    <tr style="text-align: center;">'+headers+'</tr>\
                                </thead>\
                                <tbody>\
                                    <tr style="text-align: center;">'+valores+'</tr>\
                                </tbody>\
                                </table>\
                                </div>';

                           // $("#info").append('<div>'+fila+'</div></br>');
                          //  $("#tabla").append('<div>'+fila+'</div></br>');
                            $("#tabla").append('<div>'+tablaent+'</div></br>'); //cuando termino la tabla la agrego al div del popup (tener en cuenta de que en cada nuevo click khay que borrar lo anterior)
                            $("#spin").removeClass("is-active"); //saco el spinner
                            //  imprimir('santiago');
                            
                        // registro +=  data.features[0].id;
                        // document.getElementById('info').innerHTML =  data.features[0].id;
                        // console.log(typeof(data.features[0].id));
                            
                        } //fin funcion
                    }); //fin ajax
                    $('#ventana_info').modal('toggle'); //despliego el popup de info
                  
               // console.log(s);
               // registro='';
                //registro +=  data.features[0].id;

                    
  /*                  if (url) {
                        fetch(url)
                          .then(function (response) { return response.text(); })
                          .then(function (html) {
                            document.getElementById('info').innerHTML = url;
                            console.log('devolvio algo');
                          });
                    }*/
               }// fin del if del tipo cobertura
               
            });//fin del foreach cada capa activa
            //console.log(array_contenido_campos);
           // console.log(window.myFancyResponseData);
           /* map.forEachFeatureAtPixel(pixel, function(feature, layer) {
                console.log(feature);
            });*/
            //var layers = map.getLayers();
            //layers.array_.forEach(elemento => console.log(elemento.state_.visible));
            
          
           /* var url = departamentos.getSource().getFeatureInfoUrl(
              evt.coordinate, viewResolution, 'EPSG:3857',
              {'INFO_FORMAT': 'text/html'});*/
             // alert(url);
           // console.log(url);
            /*if (url) {
              fetch(url)
                .then(function (response) { return response.text(); })
                .then(function (html) {
                  document.getElementById('info').innerHTML = html;
                });
            }*/
           // console.log(array_contenido_campos);
            //document.getElementById('info').innerHTML =  array_contenido_campos;
           /* function logArrayElements(element, index, array) {
                console.log("a[" + index + "] = " + element);
            }
            array_contenido_campos.forEach(logArrayElements);*/

            /*  cars.forEach(elemento => console.log(elemento));
              console.log(typeof(array_contenido_campos));
              console.log(array_contenido_campos);
              //console.log(Object.values(array_contenido_campos))
              console.log('cantidad: '+array_contenido_campos.length);
              santi.push('santiago');
              santi.push('caste');
              console.log('largo del santi: '+santi.length);
              console.log(santi);
              console.log('contenido del objeto: '+array_contenido_campos[0]);*/
              //console.log(cars);
           /* array_contenido_campos.forEach(function s(){
                console.log('sjsjsjs');
            });*/

          });//onclick

       // map.addControl(switcher);
    }//fin de la funcion display
                              
};                                   // <-- close the object



/*

var my_map = {                       // <-- add this line to declare the object
    display: 
    function() {
    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Group({
                // A layer must have a title to appear in the layerswitcher
                'title': 'Base maps',
                layers: [
                    new ol.layer.Group({
                        // A layer must have a title to appear in the layerswitcher
                        title: 'Water color with labels',
                        // Setting the layers type to 'base' results
                        // in it having a radio button and only one
                        // base layer being visibile at a time
                        type: 'base',
                        // Setting combine to true causes sub-layers to be hidden
                        // in the layerswitcher, only the parent is shown
                        combine: true,
                        visible: false,
                        layers: [
                            new ol.layer.Tile({
                                source: new ol.source.Stamen({
                                    layer: 'watercolor'
                                })
                            }),
                            new ol.layer.Tile({
                                source: new ol.source.Stamen({
                                    layer: 'terrain-labels'
                                })
                            })
                        ]
                    }),
                    new ol.layer.Tile({
                        // A layer must have a title to appear in the layerswitcher
                        title: 'Water color',
                        // Again set this layer as a base layer
                        type: 'base',
                        visible: false,
                        source: new ol.source.Stamen({
                            layer: 'watercolor'
                        })
                    }),
                    new ol.layer.Tile({
                        // A layer must have a title to appear in the layerswitcher
                        title: 'OSM',
                        // Again set this layer as a base layer
                        type: 'base',
                        visible: true,
                        source: new ol.source.OSM()
                    })
                ]
            }),
            new ol.layer.Group({
                // A layer must have a title to appear in the layerswitcher
                title: 'Overlays',
                // Adding a 'fold' property set to either 'open' or 'close' makes the group layer
                // collapsible
                fold: 'open',
                layers: [
                    new ol.layer.Image({
                        // A layer must have a title to appear in the layerswitcher
                        title: 'Countries',
                        source: new ol.source.ImageArcGISRest({
                            ratio: 1,
                            params: {'LAYERS': 'show:0'},
                            url: "https://ons-inspire.esriuk.com/arcgis/rest/services/Administrative_Boundaries/Countries_December_2016_Boundaries/MapServer"
                        })
                    }),
                    new ol.layer.Group({
                        // A layer must have a title to appear in the layerswitcher
                        title: 'Census',
                        fold: 'open',
                        layers: [
                            new ol.layer.Image({
                                // A layer must have a title to appear in the layerswitcher
                                title: 'Districts',
                                source: new ol.source.ImageArcGISRest({
                                    ratio: 1,
                                    params: {'LAYERS': 'show:0'},
                                    url: "https://ons-inspire.esriuk.com/arcgis/rest/services/Census_Boundaries/Census_Merged_Local_Authority_Districts_December_2011_Boundaries/MapServer"
                                })
                            }),
                            new ol.layer.Image({
                                // A layer must have a title to appear in the layerswitcher
                                title: 'Wards',
                                visible: false,
                                source: new ol.source.ImageArcGISRest({
                                    ratio: 1,
                                    params: {'LAYERS': 'show:0'},
                                    url: "https://ons-inspire.esriuk.com/arcgis/rest/services/Census_Boundaries/Census_Merged_Wards_December_2011_Boundaries/MapServer"
                                })
                            })
                        ]
                    })
                ]
            })
        ],
        view: new ol.View({
            center: ol.proj.transform([-0.92, 52.96], 'EPSG:4326', 'EPSG:3857'),
            zoom: 6
        })
    });

    // Get out-of-the-map div element with the ID "layers" and renders layers to it.
    // NOTE: If the layers are changed outside of the layer switcher then you
    // will need to call ol.control.LayerSwitcher.renderPanel again to refesh
    // the layer tree. Style the tree via CSS.
  
    var sidebar = new ol.control.Sidebar({ element: 'sidebar', position: 'left' });
    var toc = document.getElementById("layers");
    ol.control.LayerSwitcher.renderPanel(map, toc);
    map.addControl(sidebar);

}};*/
export default my_map; 