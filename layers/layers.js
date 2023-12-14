var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_peskizaKNI_1 = new ol.format.GeoJSON();
var features_peskizaKNI_1 = format_peskizaKNI_1.readFeatures(json_peskizaKNI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_peskizaKNI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_peskizaKNI_1.addFeatures(features_peskizaKNI_1);
var lyr_peskizaKNI_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_peskizaKNI_1, 
                style: style_peskizaKNI_1,
                interactive: true,
                title: '<img src="styles/legend/peskizaKNI_1.png" /> peskiza KNI'
            });
var format_BENEFISIARIUSKNI_2 = new ol.format.GeoJSON();
var features_BENEFISIARIUSKNI_2 = format_BENEFISIARIUSKNI_2.readFeatures(json_BENEFISIARIUSKNI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BENEFISIARIUSKNI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BENEFISIARIUSKNI_2.addFeatures(features_BENEFISIARIUSKNI_2);
var lyr_BENEFISIARIUSKNI_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BENEFISIARIUSKNI_2, 
                style: style_BENEFISIARIUSKNI_2,
                interactive: true,
                title: '<img src="styles/legend/BENEFISIARIUSKNI_2.png" /> BENEFISIARIUS KNI'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_peskizaKNI_1.setVisible(true);lyr_BENEFISIARIUSKNI_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_peskizaKNI_1,lyr_BENEFISIARIUSKNI_2];
lyr_peskizaKNI_1.set('fieldAliases', {'Title': 'Title', 'Date Created': 'Date Created', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Northing': 'Northing', 'Easting': 'Easting', 'Description': 'Description', 'Elevation': 'Elevation', 'Aldeia': 'Aldeia', 'ATIVIDADE SETORIAIS': 'ATIVIDADE SETORIAIS', 'MUNICIPIO': 'MUNICIPIO', 'NARAN DIRETOR': 'NARAN DIRETOR', 'NARAN KOMPANIA': 'NARAN KOMPANIA', 'No.  TELEMOVEL': 'No.  TELEMOVEL', 'POSTO ADMIN': 'POSTO ADMIN', 'Rendimentu Mensal': 'Rendimentu Mensal', 'SEXU NAIN BA KOMPANIA': 'SEXU NAIN BA KOMPANIA', 'Suco': 'Suco', 'Tinan Apoiu': 'Tinan Apoiu', 'TIPU AKTIVIDADE': 'TIPU AKTIVIDADE', 'TOTAL FUNDU APOIU': 'TOTAL FUNDU APOIU', 'Total Trabalhador': 'Total Trabalhador', 'Total Trabalhador Feto': 'Total Trabalhador Feto', 'Total Trabalhador Mane': 'Total Trabalhador Mane', 'Total Trabalhador Seluk (Generu)': 'Total Trabalhador Seluk (Generu)', });
lyr_BENEFISIARIUSKNI_2.set('fieldAliases', {'Title': 'Title', 'Date Created': 'Date Created', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Northing': 'Northing', 'Easting': 'Easting', 'Description': 'Description', 'Elevation': 'Elevation', 'AKTIVIDADE SETORIAIS': 'AKTIVIDADE SETORIAIS', 'ALDEIA': 'ALDEIA', 'MUNICIPIO': 'MUNICIPIO', 'NARAN DIRETOR': 'NARAN DIRETOR', 'NARAN KOMPANIA': 'NARAN KOMPANIA', 'No. TELEMOVEL': 'No. TELEMOVEL', 'POSTU ADMIN': 'POSTU ADMIN', 'RENDIMENTO MENSAL': 'RENDIMENTO MENSAL', 'SEXU NAIN BA KOMPANIA': 'SEXU NAIN BA KOMPANIA', 'SUCO': 'SUCO', 'TINAN APOIO': 'TINAN APOIO', 'TIPU AKTIVIDADE': 'TIPU AKTIVIDADE', 'TOTAL FUNDO APOIO': 'TOTAL FUNDO APOIO', 'TOTAL TRABALHADOR': 'TOTAL TRABALHADOR', 'TOTAL TRABALHADOR FETO': 'TOTAL TRABALHADOR FETO', 'TOTAL TRABALHADOR MANE': 'TOTAL TRABALHADOR MANE', 'TOTAL TRABALHADOR SELUK (Genero)': 'TOTAL TRABALHADOR SELUK (Genero)', });
lyr_peskizaKNI_1.set('fieldImages', {'Title': 'TextEdit', 'Date Created': 'DateTime', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Northing': 'TextEdit', 'Easting': 'TextEdit', 'Description': 'TextEdit', 'Elevation': 'TextEdit', 'Aldeia': 'TextEdit', 'ATIVIDADE SETORIAIS': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'NARAN DIRETOR': 'TextEdit', 'NARAN KOMPANIA': 'TextEdit', 'No.  TELEMOVEL': 'Range', 'POSTO ADMIN': 'TextEdit', 'Rendimentu Mensal': 'Range', 'SEXU NAIN BA KOMPANIA': 'TextEdit', 'Suco': 'TextEdit', 'Tinan Apoiu': 'Range', 'TIPU AKTIVIDADE': 'TextEdit', 'TOTAL FUNDU APOIU': 'Range', 'Total Trabalhador': 'Range', 'Total Trabalhador Feto': 'Range', 'Total Trabalhador Mane': 'Range', 'Total Trabalhador Seluk (Generu)': 'CheckBox', });
lyr_BENEFISIARIUSKNI_2.set('fieldImages', {'Title': 'TextEdit', 'Date Created': 'DateTime', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Northing': 'TextEdit', 'Easting': 'TextEdit', 'Description': 'TextEdit', 'Elevation': 'TextEdit', 'AKTIVIDADE SETORIAIS': 'TextEdit', 'ALDEIA': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'NARAN DIRETOR': 'TextEdit', 'NARAN KOMPANIA': 'TextEdit', 'No. TELEMOVEL': 'Range', 'POSTU ADMIN': 'TextEdit', 'RENDIMENTO MENSAL': 'TextEdit', 'SEXU NAIN BA KOMPANIA': 'TextEdit', 'SUCO': 'TextEdit', 'TINAN APOIO': 'Range', 'TIPU AKTIVIDADE': 'TextEdit', 'TOTAL FUNDO APOIO': 'TextEdit', 'TOTAL TRABALHADOR': 'Range', 'TOTAL TRABALHADOR FETO': 'Range', 'TOTAL TRABALHADOR MANE': 'Range', 'TOTAL TRABALHADOR SELUK (Genero)': 'TextEdit', });
lyr_peskizaKNI_1.set('fieldLabels', {'Title': 'no label', 'Date Created': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'Northing': 'inline label', 'Easting': 'inline label', 'Description': 'inline label', 'Elevation': 'inline label', 'Aldeia': 'inline label', 'ATIVIDADE SETORIAIS': 'inline label', 'MUNICIPIO': 'inline label', 'NARAN DIRETOR': 'inline label', 'NARAN KOMPANIA': 'inline label', 'No.  TELEMOVEL': 'inline label', 'POSTO ADMIN': 'inline label', 'Rendimentu Mensal': 'inline label', 'SEXU NAIN BA KOMPANIA': 'inline label', 'Suco': 'inline label', 'Tinan Apoiu': 'inline label', 'TIPU AKTIVIDADE': 'inline label', 'TOTAL FUNDU APOIU': 'inline label', 'Total Trabalhador': 'inline label', 'Total Trabalhador Feto': 'inline label', 'Total Trabalhador Mane': 'inline label', 'Total Trabalhador Seluk (Generu)': 'inline label', });
lyr_BENEFISIARIUSKNI_2.set('fieldLabels', {'Title': 'no label', 'Date Created': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'Northing': 'inline label', 'Easting': 'inline label', 'Description': 'inline label', 'Elevation': 'inline label', 'AKTIVIDADE SETORIAIS': 'inline label', 'ALDEIA': 'inline label', 'MUNICIPIO': 'inline label', 'NARAN DIRETOR': 'inline label', 'NARAN KOMPANIA': 'inline label', 'No. TELEMOVEL': 'inline label', 'POSTU ADMIN': 'inline label', 'RENDIMENTO MENSAL': 'inline label', 'SEXU NAIN BA KOMPANIA': 'inline label', 'SUCO': 'inline label', 'TINAN APOIO': 'inline label', 'TIPU AKTIVIDADE': 'inline label', 'TOTAL FUNDO APOIO': 'inline label', 'TOTAL TRABALHADOR': 'inline label', 'TOTAL TRABALHADOR FETO': 'inline label', 'TOTAL TRABALHADOR MANE': 'inline label', 'TOTAL TRABALHADOR SELUK (Genero)': 'inline label', });
lyr_BENEFISIARIUSKNI_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});