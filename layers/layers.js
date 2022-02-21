var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Molle_RM_1 = new ol.format.GeoJSON();
var features_Molle_RM_1 = format_Molle_RM_1.readFeatures(json_Molle_RM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Molle_RM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Molle_RM_1.addFeatures(features_Molle_RM_1);
var lyr_Molle_RM_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Molle_RM_1, 
                style: style_Molle_RM_1,
                interactive: true,
                title: '<img src="styles/legend/Molle_RM_1.png" /> Molle_RM'
            });
var format_Bellotodelnorte_RM_2 = new ol.format.GeoJSON();
var features_Bellotodelnorte_RM_2 = format_Bellotodelnorte_RM_2.readFeatures(json_Bellotodelnorte_RM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bellotodelnorte_RM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bellotodelnorte_RM_2.addFeatures(features_Bellotodelnorte_RM_2);
var lyr_Bellotodelnorte_RM_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bellotodelnorte_RM_2, 
                style: style_Bellotodelnorte_RM_2,
                interactive: true,
                title: '<img src="styles/legend/Bellotodelnorte_RM_2.png" /> Belloto del norte_RM'
            });
var format_Maitn_RM_3 = new ol.format.GeoJSON();
var features_Maitn_RM_3 = format_Maitn_RM_3.readFeatures(json_Maitn_RM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Maitn_RM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Maitn_RM_3.addFeatures(features_Maitn_RM_3);
var lyr_Maitn_RM_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Maitn_RM_3, 
                style: style_Maitn_RM_3,
                interactive: true,
                title: '<img src="styles/legend/Maitn_RM_3.png" /> Maitén_RM'
            });
var format_Bolln_RM_4 = new ol.format.GeoJSON();
var features_Bolln_RM_4 = format_Bolln_RM_4.readFeatures(json_Bolln_RM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bolln_RM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bolln_RM_4.addFeatures(features_Bolln_RM_4);
var lyr_Bolln_RM_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bolln_RM_4, 
                style: style_Bolln_RM_4,
                interactive: true,
                title: '<img src="styles/legend/Bolln_RM_4.png" /> Bollén_RM'
            });
var format_PeumosRM_5 = new ol.format.GeoJSON();
var features_PeumosRM_5 = format_PeumosRM_5.readFeatures(json_PeumosRM_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PeumosRM_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PeumosRM_5.addFeatures(features_PeumosRM_5);
var lyr_PeumosRM_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PeumosRM_5, 
                style: style_PeumosRM_5,
                interactive: true,
                title: '<img src="styles/legend/PeumosRM_5.png" /> Peumos RM'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Molle_RM_1.setVisible(false);lyr_Bellotodelnorte_RM_2.setVisible(false);lyr_Maitn_RM_3.setVisible(false);lyr_Bolln_RM_4.setVisible(false);lyr_PeumosRM_5.setVisible(false);
var layersList = [lyr_GoogleHybrid_0,lyr_Molle_RM_1,lyr_Bellotodelnorte_RM_2,lyr_Maitn_RM_3,lyr_Bolln_RM_4,lyr_PeumosRM_5];
lyr_Molle_RM_1.set('fieldAliases', {'ESPECIE': 'ESPECIE', });
lyr_Bellotodelnorte_RM_2.set('fieldAliases', {'ESPECIE': 'ESPECIE', });
lyr_Maitn_RM_3.set('fieldAliases', {'ESPECIE': 'ESPECIE', });
lyr_Bolln_RM_4.set('fieldAliases', {'ESPECIE': 'ESPECIE', });
lyr_PeumosRM_5.set('fieldAliases', {'ESPECIE': 'ESPECIE', });
lyr_Molle_RM_1.set('fieldImages', {'ESPECIE': '', });
lyr_Bellotodelnorte_RM_2.set('fieldImages', {'ESPECIE': '', });
lyr_Maitn_RM_3.set('fieldImages', {'ESPECIE': '', });
lyr_Bolln_RM_4.set('fieldImages', {'ESPECIE': '', });
lyr_PeumosRM_5.set('fieldImages', {'ESPECIE': '', });
lyr_Molle_RM_1.set('fieldLabels', {'ESPECIE': 'no label', });
lyr_Bellotodelnorte_RM_2.set('fieldLabels', {'ESPECIE': 'no label', });
lyr_Maitn_RM_3.set('fieldLabels', {'ESPECIE': 'no label', });
lyr_Bolln_RM_4.set('fieldLabels', {'ESPECIE': 'no label', });
lyr_PeumosRM_5.set('fieldLabels', {'ESPECIE': 'no label', });
lyr_PeumosRM_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});