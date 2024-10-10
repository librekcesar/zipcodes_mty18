var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_mty_18_1 = new ol.format.GeoJSON();
var features_mty_18_1 = format_mty_18_1.readFeatures(json_mty_18_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mty_18_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mty_18_1.addFeatures(features_mty_18_1);
var lyr_mty_18_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mty_18_1, 
                style: style_mty_18_1,
                interactive: true,
                title: '<img src="styles/legend/mty_18_1.png" /> mty_18'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_mty_18_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_mty_18_1];
lyr_mty_18_1.set('fieldAliases', {'locality': 'locality', 'state': 'state', 'zonificacion': 'zonificacion', 'station_code': 'station_code', 'zipcode': 'zipcode', 'station_name': 'station_name', });
lyr_mty_18_1.set('fieldImages', {'locality': 'TextEdit', 'state': 'TextEdit', 'zonificacion': 'TextEdit', 'station_code': 'TextEdit', 'zipcode': 'TextEdit', 'station_name': 'TextEdit', });
lyr_mty_18_1.set('fieldLabels', {'locality': 'header label', 'state': 'header label', 'zonificacion': 'header label', 'station_code': 'header label', 'zipcode': 'header label', 'station_name': 'no label', });
lyr_mty_18_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});