var wms_layers = [];

var lyr_DEM_Kab_Pasuruan_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM_Kab_Pasuruan<br />\
    <img src="styles/legend/DEM_Kab_Pasuruan_0_0.png" /> -1<br />\
    <img src="styles/legend/DEM_Kab_Pasuruan_0_1.png" /> 2381<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEM_Kab_Pasuruan_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12531766.196170, -888626.088636, 12590266.196170, -842333.038819]
        })
    });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_pasuruandissolve_2 = new ol.format.GeoJSON();
var features_pasuruandissolve_2 = format_pasuruandissolve_2.readFeatures(json_pasuruandissolve_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pasuruandissolve_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pasuruandissolve_2.addFeatures(features_pasuruandissolve_2);
var lyr_pasuruandissolve_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pasuruandissolve_2, 
                style: style_pasuruandissolve_2,
                popuplayertitle: 'pasuruan dissolve',
                interactive: false,
                title: '<img src="styles/legend/pasuruandissolve_2.png" /> pasuruan dissolve'
            });
var format_TinggiElevasi_3 = new ol.format.GeoJSON();
var features_TinggiElevasi_3 = format_TinggiElevasi_3.readFeatures(json_TinggiElevasi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TinggiElevasi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TinggiElevasi_3.addFeatures(features_TinggiElevasi_3);
var lyr_TinggiElevasi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TinggiElevasi_3, 
                style: style_TinggiElevasi_3,
                popuplayertitle: 'Tinggi Elevasi',
                interactive: true,
    title: 'Tinggi Elevasi<br />\
    <img src="styles/legend/TinggiElevasi_3_0.png" /> 0-400m<br />\
    <img src="styles/legend/TinggiElevasi_3_1.png" /> 400-1000m<br />\
    <img src="styles/legend/TinggiElevasi_3_2.png" /> 1000-1800m<br />\
    <img src="styles/legend/TinggiElevasi_3_3.png" /> 1800-2400m<br />\
    <img src="styles/legend/TinggiElevasi_3_4.png" /> 2400-3248m<br />' });

lyr_DEM_Kab_Pasuruan_0.setVisible(true);lyr_ESRISatellite_1.setVisible(true);lyr_pasuruandissolve_2.setVisible(true);lyr_TinggiElevasi_3.setVisible(true);
var layersList = [lyr_DEM_Kab_Pasuruan_0,lyr_ESRISatellite_1,lyr_pasuruandissolve_2,lyr_TinggiElevasi_3];
lyr_pasuruandissolve_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Kelas': 'Kelas', 'Luas': 'Luas', 'Persentase': 'Persentase', 'Persentase1': 'Persentase1', 'Presentase2': 'Presentase2', 'Presentase3': 'Presentase3', 'persen': 'persen', });
lyr_TinggiElevasi_3.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Ketinggian': 'Ketinggian', });
lyr_pasuruandissolve_2.set('fieldImages', {'fid': '', 'DN': '', 'Kelas': '', 'Luas': '', 'Persentase': '', 'Persentase1': '', 'Presentase2': '', 'Presentase3': '', 'persen': '', });
lyr_TinggiElevasi_3.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Ketinggian': 'TextEdit', });
lyr_pasuruandissolve_2.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'Kelas': 'no label', 'Luas': 'no label', 'Persentase': 'no label', 'Persentase1': 'no label', 'Presentase2': 'no label', 'Presentase3': 'no label', 'persen': 'no label', });
lyr_TinggiElevasi_3.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Ketinggian': 'no label', });
lyr_TinggiElevasi_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});