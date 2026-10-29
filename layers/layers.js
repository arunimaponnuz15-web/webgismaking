var wms_layers = [];

var lyr_demcopy_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'dem copy<br />\
    <img src="styles/legend/demcopy_0_0.png" /> 15<br />\
    <img src="styles/legend/demcopy_0_1.png" /> 32<br />\
    <img src="styles/legend/demcopy_0_2.png" /> 49<br />\
    <img src="styles/legend/demcopy_0_3.png" /> 66<br />\
    <img src="styles/legend/demcopy_0_4.png" /> 84<br />\
    <img src="styles/legend/demcopy_0_5.png" /> 101<br />\
    <img src="styles/legend/demcopy_0_6.png" /> 118<br />\
    <img src="styles/legend/demcopy_0_7.png" /> 134<br />\
    <img src="styles/legend/demcopy_0_8.png" /> 147<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/demcopy_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8581789.616722, 939373.689740, 8587572.045778, 944844.194066]
        })
    });
var format_Panchayat_Boundary_1 = new ol.format.GeoJSON();
var features_Panchayat_Boundary_1 = format_Panchayat_Boundary_1.readFeatures(json_Panchayat_Boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Panchayat_Boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Panchayat_Boundary_1.addFeatures(features_Panchayat_Boundary_1);
var lyr_Panchayat_Boundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Panchayat_Boundary_1, 
                style: style_Panchayat_Boundary_1,
                popuplayertitle: 'Panchayat_Boundary',
                interactive: false,
                title: '<img src="styles/legend/Panchayat_Boundary_1.png" /> Panchayat_Boundary'
            });
var format_Contours_2 = new ol.format.GeoJSON();
var features_Contours_2 = format_Contours_2.readFeatures(json_Contours_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contours_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contours_2.addFeatures(features_Contours_2);
var lyr_Contours_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contours_2, 
                style: style_Contours_2,
                popuplayertitle: 'Contours',
                interactive: true,
                title: '<img src="styles/legend/Contours_2.png" /> Contours'
            });
var lyr_dem_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'dem<br />\
    <img src="styles/legend/dem_3_0.png" /> <= 29<br />\
    <img src="styles/legend/dem_3_1.png" /> 29 - 59<br />\
    <img src="styles/legend/dem_3_2.png" /> 59 - 88<br />\
    <img src="styles/legend/dem_3_3.png" /> 88 - 118<br />\
    <img src="styles/legend/dem_3_4.png" /> > 118<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/dem_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8581789.616722, 939373.689740, 8587572.045778, 944844.194066]
        })
    });

lyr_demcopy_0.setVisible(true);lyr_Panchayat_Boundary_1.setVisible(true);lyr_Contours_2.setVisible(true);lyr_dem_3.setVisible(true);
var layersList = [lyr_demcopy_0,lyr_Panchayat_Boundary_1,lyr_Contours_2,lyr_dem_3];
lyr_Panchayat_Boundary_1.set('fieldAliases', {'WARD_NO': 'WARD_NO', 'WARD_NAME': 'WARD_NAME', 'PANCHAYAT': 'PANCHAYAT', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', 'AREA_HA': 'AREA_HA', 'AREA_SQKM': 'AREA_SQKM', });
lyr_Contours_2.set('fieldAliases', {});
lyr_Panchayat_Boundary_1.set('fieldImages', {'WARD_NO': 'TextEdit', 'WARD_NAME': 'TextEdit', 'PANCHAYAT': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', 'AREA_HA': 'TextEdit', 'AREA_SQKM': 'TextEdit', });
lyr_Contours_2.set('fieldImages', {});
lyr_Panchayat_Boundary_1.set('fieldLabels', {'WARD_NO': 'no label', 'WARD_NAME': 'no label', 'PANCHAYAT': 'no label', 'DISTRICT': 'no label', 'STATE': 'no label', 'AREA_HA': 'no label', 'AREA_SQKM': 'no label', });
lyr_Contours_2.set('fieldLabels', {});
lyr_Contours_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});