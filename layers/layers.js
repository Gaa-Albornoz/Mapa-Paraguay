var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_DepartamentosParaguay_1 = new ol.format.GeoJSON();
var features_DepartamentosParaguay_1 = format_DepartamentosParaguay_1.readFeatures(json_DepartamentosParaguay_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DepartamentosParaguay_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartamentosParaguay_1.addFeatures(features_DepartamentosParaguay_1);
var lyr_DepartamentosParaguay_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DepartamentosParaguay_1, 
                style: style_DepartamentosParaguay_1,
                popuplayertitle: 'Departamentos Paraguay',
                interactive: true,
    title: 'Departamentos Paraguay<br />\
    <img src="styles/legend/DepartamentosParaguay_1_0.png" /> ALTO PARAGUAY<br />\
    <img src="styles/legend/DepartamentosParaguay_1_1.png" /> ALTO PARANÁ<br />\
    <img src="styles/legend/DepartamentosParaguay_1_2.png" /> AMAMBAY<br />\
    <img src="styles/legend/DepartamentosParaguay_1_3.png" /> ASUNCIÓN<br />\
    <img src="styles/legend/DepartamentosParaguay_1_4.png" /> BOQUERÓN<br />\
    <img src="styles/legend/DepartamentosParaguay_1_5.png" /> CAAGUAZÚ<br />\
    <img src="styles/legend/DepartamentosParaguay_1_6.png" /> CAAZAPÁ<br />\
    <img src="styles/legend/DepartamentosParaguay_1_7.png" /> CANINDEYÚ<br />\
    <img src="styles/legend/DepartamentosParaguay_1_8.png" /> CENTRAL<br />\
    <img src="styles/legend/DepartamentosParaguay_1_9.png" /> CONCEPCIÓN<br />\
    <img src="styles/legend/DepartamentosParaguay_1_10.png" /> CORDILLERA<br />\
    <img src="styles/legend/DepartamentosParaguay_1_11.png" /> GUAIRÁ<br />\
    <img src="styles/legend/DepartamentosParaguay_1_12.png" /> ITAPÚA<br />\
    <img src="styles/legend/DepartamentosParaguay_1_13.png" /> MISIONES<br />\
    <img src="styles/legend/DepartamentosParaguay_1_14.png" /> ÑEEMBUCÚ<br />\
    <img src="styles/legend/DepartamentosParaguay_1_15.png" /> PARAGUARÍ<br />\
    <img src="styles/legend/DepartamentosParaguay_1_16.png" /> PRESIDENTE HAYES<br />\
    <img src="styles/legend/DepartamentosParaguay_1_17.png" /> SAN PEDRO<br />' });
var format_HidrografiaParaguay_2 = new ol.format.GeoJSON();
var features_HidrografiaParaguay_2 = format_HidrografiaParaguay_2.readFeatures(json_HidrografiaParaguay_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HidrografiaParaguay_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HidrografiaParaguay_2.addFeatures(features_HidrografiaParaguay_2);
var lyr_HidrografiaParaguay_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HidrografiaParaguay_2, 
                style: style_HidrografiaParaguay_2,
                popuplayertitle: 'Hidrografia Paraguay',
                interactive: true,
                title: '<img src="styles/legend/HidrografiaParaguay_2.png" /> Hidrografia Paraguay'
            });
var format_ViasTerrestresParaguay_3 = new ol.format.GeoJSON();
var features_ViasTerrestresParaguay_3 = format_ViasTerrestresParaguay_3.readFeatures(json_ViasTerrestresParaguay_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViasTerrestresParaguay_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViasTerrestresParaguay_3.addFeatures(features_ViasTerrestresParaguay_3);
var lyr_ViasTerrestresParaguay_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ViasTerrestresParaguay_3, 
                style: style_ViasTerrestresParaguay_3,
                popuplayertitle: 'Vias Terrestres Paraguay',
                interactive: true,
    title: 'Vias Terrestres Paraguay<br />\
    <img src="styles/legend/ViasTerrestresParaguay_3_0.png" /> Avenida<br />\
    <img src="styles/legend/ViasTerrestresParaguay_3_1.png" /> Ruta Departamental<br />\
    <img src="styles/legend/ViasTerrestresParaguay_3_2.png" /> Ruta Nacional<br />\
    <img src="styles/legend/ViasTerrestresParaguay_3_3.png" /> Vía Férrea<br />' });
var format_CapitalNacional_4 = new ol.format.GeoJSON();
var features_CapitalNacional_4 = format_CapitalNacional_4.readFeatures(json_CapitalNacional_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapitalNacional_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapitalNacional_4.addFeatures(features_CapitalNacional_4);
var lyr_CapitalNacional_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapitalNacional_4, 
                style: style_CapitalNacional_4,
                popuplayertitle: 'Capital Nacional',
                interactive: true,
    title: 'Capital Nacional<br />\
    <img src="styles/legend/CapitalNacional_4_0.png" /> ASUNCIÓN<br />' });

lyr_GoogleMaps_0.setVisible(true);lyr_DepartamentosParaguay_1.setVisible(true);lyr_HidrografiaParaguay_2.setVisible(true);lyr_ViasTerrestresParaguay_3.setVisible(true);lyr_CapitalNacional_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_DepartamentosParaguay_1,lyr_HidrografiaParaguay_2,lyr_ViasTerrestresParaguay_3,lyr_CapitalNacional_4];
lyr_DepartamentosParaguay_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'dpto': 'Codigo', 'dpto_desc': 'Nombre', 'id': 'id', });
lyr_HidrografiaParaguay_2.set('fieldAliases', {'id': 'id', 'fid': 'Id', 'NOMBRE': 'Nombre', });
lyr_ViasTerrestresParaguay_3.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'DPTO': 'DPTO', 'DPTO_DESC': 'Departamento', 'DISTRITO': 'DISTRITO', 'DIST_DESC': 'Distrito', 'AREA': 'AREA', 'NOMBRE': 'Nombre', 'TIPO_VIA': 'Tipo de Via', 'DesTipoVia': 'Descripcion', 'RODA_VIA': 'RODA_VIA', 'DesRodaVia': 'Tipo de Material', 'Long_Metro': 'Longitud(Metros)', });
lyr_CapitalNacional_4.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'dpto': 'Codigo', 'dpto_desc': 'Nombre', 'id': 'id', });
lyr_DepartamentosParaguay_1.set('fieldImages', {'ogc_fid': 'Range', 'dpto': 'TextEdit', 'dpto_desc': 'TextEdit', 'id': 'TextEdit', });
lyr_HidrografiaParaguay_2.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_ViasTerrestresParaguay_3.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'DPTO': 'TextEdit', 'DPTO_DESC': 'TextEdit', 'DISTRITO': 'TextEdit', 'DIST_DESC': 'TextEdit', 'AREA': 'TextEdit', 'NOMBRE': 'TextEdit', 'TIPO_VIA': 'TextEdit', 'DesTipoVia': 'TextEdit', 'RODA_VIA': 'TextEdit', 'DesRodaVia': 'TextEdit', 'Long_Metro': 'TextEdit', });
lyr_CapitalNacional_4.set('fieldImages', {'ogc_fid': 'Range', 'dpto': 'TextEdit', 'dpto_desc': 'TextEdit', 'id': 'TextEdit', });
lyr_DepartamentosParaguay_1.set('fieldLabels', {'ogc_fid': 'no label', 'dpto': 'inline label - visible with data', 'dpto_desc': 'inline label - visible with data', 'id': 'no label', });
lyr_HidrografiaParaguay_2.set('fieldLabels', {'id': 'no label', 'fid': 'inline label - visible with data', 'NOMBRE': 'inline label - visible with data', });
lyr_ViasTerrestresParaguay_3.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'DPTO': 'no label', 'DPTO_DESC': 'inline label - visible with data', 'DISTRITO': 'no label', 'DIST_DESC': 'inline label - visible with data', 'AREA': 'no label', 'NOMBRE': 'inline label - visible with data', 'TIPO_VIA': 'inline label - visible with data', 'DesTipoVia': 'inline label - visible with data', 'RODA_VIA': 'inline label - visible with data', 'DesRodaVia': 'inline label - visible with data', 'Long_Metro': 'no label', });
lyr_CapitalNacional_4.set('fieldLabels', {'ogc_fid': 'no label', 'dpto': 'inline label - visible with data', 'dpto_desc': 'inline label - visible with data', 'id': 'no label', });
lyr_CapitalNacional_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});