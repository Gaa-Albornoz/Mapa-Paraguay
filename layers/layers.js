var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_1 = new ol.format.GeoJSON();
var features_Departamentos_1 = format_Departamentos_1.readFeatures(json_Departamentos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_1.addFeatures(features_Departamentos_1);
var lyr_Departamentos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamentos_1, 
                style: style_Departamentos_1,
                popuplayertitle: 'Departamentos',
                interactive: true,
    title: 'Departamentos<br />\
    <img src="styles/legend/Departamentos_1_0.png" /> ALTO PARAGUAY<br />\
    <img src="styles/legend/Departamentos_1_1.png" /> ALTO PARANÁ<br />\
    <img src="styles/legend/Departamentos_1_2.png" /> AMAMBAY<br />\
    <img src="styles/legend/Departamentos_1_3.png" /> ASUNCIÓN<br />\
    <img src="styles/legend/Departamentos_1_4.png" /> BOQUERÓN<br />\
    <img src="styles/legend/Departamentos_1_5.png" /> CAAGUAZÚ<br />\
    <img src="styles/legend/Departamentos_1_6.png" /> CAAZAPÁ<br />\
    <img src="styles/legend/Departamentos_1_7.png" /> CANINDEYÚ<br />\
    <img src="styles/legend/Departamentos_1_8.png" /> CENTRAL<br />\
    <img src="styles/legend/Departamentos_1_9.png" /> CONCEPCIÓN<br />\
    <img src="styles/legend/Departamentos_1_10.png" /> CORDILLERA<br />\
    <img src="styles/legend/Departamentos_1_11.png" /> GUAIRÁ<br />\
    <img src="styles/legend/Departamentos_1_12.png" /> ITAPÚA<br />\
    <img src="styles/legend/Departamentos_1_13.png" /> MISIONES<br />\
    <img src="styles/legend/Departamentos_1_14.png" /> ÑEEMBUCÚ<br />\
    <img src="styles/legend/Departamentos_1_15.png" /> PARAGUARÍ<br />\
    <img src="styles/legend/Departamentos_1_16.png" /> PRESIDENTE HAYES<br />\
    <img src="styles/legend/Departamentos_1_17.png" /> SAN PEDRO<br />' });
var format_Hidrografa_2 = new ol.format.GeoJSON();
var features_Hidrografa_2 = format_Hidrografa_2.readFeatures(json_Hidrografa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hidrografa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hidrografa_2.addFeatures(features_Hidrografa_2);
var lyr_Hidrografa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hidrografa_2, 
                style: style_Hidrografa_2,
                popuplayertitle: 'Hidrografía',
                interactive: true,
                title: '<img src="styles/legend/Hidrografa_2.png" /> Hidrografía'
            });
var format_ViasTerrestres_3 = new ol.format.GeoJSON();
var features_ViasTerrestres_3 = format_ViasTerrestres_3.readFeatures(json_ViasTerrestres_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViasTerrestres_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViasTerrestres_3.addFeatures(features_ViasTerrestres_3);
var lyr_ViasTerrestres_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ViasTerrestres_3, 
                style: style_ViasTerrestres_3,
                popuplayertitle: 'Vias Terrestres',
                interactive: true,
    title: 'Vias Terrestres<br />\
    <img src="styles/legend/ViasTerrestres_3_0.png" /> Avenida<br />\
    <img src="styles/legend/ViasTerrestres_3_1.png" /> Ruta Departamental<br />\
    <img src="styles/legend/ViasTerrestres_3_2.png" /> Ruta Nacional<br />\
    <img src="styles/legend/ViasTerrestres_3_3.png" /> Vía Férrea<br />' });
var format_CapitalesDepartamentales_4 = new ol.format.GeoJSON();
var features_CapitalesDepartamentales_4 = format_CapitalesDepartamentales_4.readFeatures(json_CapitalesDepartamentales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapitalesDepartamentales_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapitalesDepartamentales_4.addFeatures(features_CapitalesDepartamentales_4);
var lyr_CapitalesDepartamentales_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapitalesDepartamentales_4, 
                style: style_CapitalesDepartamentales_4,
                popuplayertitle: 'Capitales Departamentales',
                interactive: true,
                title: '<img src="styles/legend/CapitalesDepartamentales_4.png" /> Capitales Departamentales'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Departamentos_1.setVisible(true);lyr_Hidrografa_2.setVisible(true);lyr_ViasTerrestres_3.setVisible(true);lyr_CapitalesDepartamentales_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Departamentos_1,lyr_Hidrografa_2,lyr_ViasTerrestres_3,lyr_CapitalesDepartamentales_4];
lyr_Departamentos_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'dpto': 'Codigo', 'dpto_desc': 'Nombre', 'id': 'id', });
lyr_Hidrografa_2.set('fieldAliases', {'id': 'id', 'fid': 'Id', 'NOMBRE': 'Nombre', });
lyr_ViasTerrestres_3.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'DPTO': 'DPTO', 'DPTO_DESC': 'Departamento', 'DISTRITO': 'DISTRITO', 'DIST_DESC': 'Distrito', 'AREA': 'AREA', 'NOMBRE': 'Nombre', 'TIPO_VIA': 'Tipo de Via', 'DesTipoVia': 'Descripcion', 'RODA_VIA': 'RODA_VIA', 'DesRodaVia': 'DesRodaVia', 'Long_Metro': 'Long_Metro', });
lyr_CapitalesDepartamentales_4.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'dpto': 'Codigo', 'dpto_desc': 'Nombre', 'id': 'id', });
lyr_Departamentos_1.set('fieldImages', {'ogc_fid': 'Range', 'dpto': 'TextEdit', 'dpto_desc': 'TextEdit', 'id': 'TextEdit', });
lyr_Hidrografa_2.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_ViasTerrestres_3.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'DPTO': 'TextEdit', 'DPTO_DESC': 'TextEdit', 'DISTRITO': 'TextEdit', 'DIST_DESC': 'TextEdit', 'AREA': 'TextEdit', 'NOMBRE': 'TextEdit', 'TIPO_VIA': 'TextEdit', 'DesTipoVia': 'TextEdit', 'RODA_VIA': 'TextEdit', 'DesRodaVia': 'TextEdit', 'Long_Metro': 'TextEdit', });
lyr_CapitalesDepartamentales_4.set('fieldImages', {'ogc_fid': 'Range', 'dpto': 'TextEdit', 'dpto_desc': 'TextEdit', 'id': 'TextEdit', });
lyr_Departamentos_1.set('fieldLabels', {'ogc_fid': 'no label', 'dpto': 'inline label - visible with data', 'dpto_desc': 'inline label - visible with data', 'id': 'no label', });
lyr_Hidrografa_2.set('fieldLabels', {'id': 'no label', 'fid': 'inline label - visible with data', 'NOMBRE': 'inline label - visible with data', });
lyr_ViasTerrestres_3.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'DPTO': 'no label', 'DPTO_DESC': 'inline label - visible with data', 'DISTRITO': 'no label', 'DIST_DESC': 'inline label - visible with data', 'AREA': 'no label', 'NOMBRE': 'inline label - visible with data', 'TIPO_VIA': 'inline label - visible with data', 'DesTipoVia': 'inline label - visible with data', 'RODA_VIA': 'no label', 'DesRodaVia': 'inline label - visible with data', 'Long_Metro': 'no label', });
lyr_CapitalesDepartamentales_4.set('fieldLabels', {'ogc_fid': 'no label', 'dpto': 'inline label - visible with data', 'dpto_desc': 'inline label - visible with data', 'id': 'no label', });
lyr_CapitalesDepartamentales_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});