var size = 0;
var placement = 'point';

var style_peskizaKNI_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "15.600000000000001px \'Arial\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#313131";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Title") !== null) {
        labelText = String(feature.get("Title"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
             fill: new ol.style.Fill({color: 'rgba(11,27,241,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
