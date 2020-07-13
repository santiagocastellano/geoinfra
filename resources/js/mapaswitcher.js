import 'ol/ol.css';
import {Map, View} from 'ol';
import Control from 'ol/control/Control';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import $ from "jquery";
import {ZoomSlider} from 'ol/control';
import {Sidebar} from 'ol/control.js';


var switcher= {                       // <-- add this line to declare the object
    display: function () {           // <-- add this line to declare a method 

        const map = new Map({
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
            view: new View({
                center: ol.proj.transform([-0.92, 52.96], 'EPSG:4326', 'EPSG:3857'),
                zoom: 6
                
            })
        });
        console.log('aca va algo'); 
       // var zoomslider = new ZoomSlider();
      //  map.addControl(zoomslider);
       // var sidebar = new ol.control.Sidebar({ element: 'sidebar', position: 'left' });

        //map.addControl(sidebar);
       // $("#titulo").html("Hello World");


       var sidebar = new ol.control.Sidebar({ element: 'sidebar', position: 'left' });

       map.addControl(sidebar);
       
       // Add a layer switcher outside the map
       var switcher = new ol.control.LayerSwitcher(
         {	target: $("#profile > div").get(0)
         });
       map.addControl(switcher);
    }
                               // <-- close the method
};                                   // <-- close the object


export default switcher; 