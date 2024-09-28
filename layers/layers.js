ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4324").setExtent([72.903209, 19.079109, 72.908008, 19.081238]);
var wms_layers = [];


        var lyr_CartoDark_0 = new ol.layer.Tile({
            'title': 'Carto Dark',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4324'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_1, 
                style: style_building_1,
                popuplayertitle: "building",
                interactive: false,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_main_transport_2 = new ol.format.GeoJSON();
var features_main_transport_2 = format_main_transport_2.readFeatures(json_main_transport_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4324'});
var jsonSource_main_transport_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_main_transport_2.addFeatures(features_main_transport_2);
var lyr_main_transport_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_main_transport_2, 
                style: style_main_transport_2,
                popuplayertitle: "main_transport",
                interactive: false,
                title: '<img src="styles/legend/main_transport_2.png" /> main_transport'
            });
var format_roads_3 = new ol.format.GeoJSON();
var features_roads_3 = format_roads_3.readFeatures(json_roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4324'});
var jsonSource_roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_3.addFeatures(features_roads_3);
var lyr_roads_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_3, 
                style: style_roads_3,
                popuplayertitle: "roads",
                interactive: false,
                title: '<img src="styles/legend/roads_3.png" /> roads'
            });
var format_other_shops_4 = new ol.format.GeoJSON();
var features_other_shops_4 = format_other_shops_4.readFeatures(json_other_shops_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4324'});
var jsonSource_other_shops_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_other_shops_4.addFeatures(features_other_shops_4);
var lyr_other_shops_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_other_shops_4, 
                style: style_other_shops_4,
                popuplayertitle: "other_shops",
                interactive: false,
                title: '<img src="styles/legend/other_shops_4.png" /> other_shops'
            });
var format_medical_5 = new ol.format.GeoJSON();
var features_medical_5 = format_medical_5.readFeatures(json_medical_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4324'});
var jsonSource_medical_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_medical_5.addFeatures(features_medical_5);
var lyr_medical_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_medical_5, 
                style: style_medical_5,
                popuplayertitle: "medical",
                interactive: true,
    title: 'medical<br />\
    <img src="styles/legend/medical_5_0.png" /> ayurvedic and panchkarma center<br />\
    <img src="styles/legend/medical_5_1.png" /> clinic<br />\
    <img src="styles/legend/medical_5_2.png" /> medical<br />\
    <img src="styles/legend/medical_5_3.png" /> optician<br />'
        });
var format_tapri_6 = new ol.format.GeoJSON();
var features_tapri_6 = format_tapri_6.readFeatures(json_tapri_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4324'});
var jsonSource_tapri_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tapri_6.addFeatures(features_tapri_6);
var lyr_tapri_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tapri_6, 
                style: style_tapri_6,
                popuplayertitle: "tapri",
                interactive: true,
                title: '<img src="styles/legend/tapri_6.png" /> tapri'
            });
var format_home_7 = new ol.format.GeoJSON();
var features_home_7 = format_home_7.readFeatures(json_home_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4324'});
var jsonSource_home_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_home_7.addFeatures(features_home_7);
var lyr_home_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_home_7, 
                style: style_home_7,
                popuplayertitle: "home",
                interactive: true,
    title: 'home<br />\
    <img src="styles/legend/home_7_0.png" /> frame<br />\
    <img src="styles/legend/home_7_1.png" /> furnishing and fabrics<br />\
    <img src="styles/legend/home_7_2.png" /> furniture<br />\
    <img src="styles/legend/home_7_3.png" /> matresses<br />\
    <img src="styles/legend/home_7_4.png" /> services<br />\
    <img src="styles/legend/home_7_5.png" /> soaps<br />\
    <img src="styles/legend/home_7_6.png" /> span polyster thread<br />'
        });
var format_accessories_8 = new ol.format.GeoJSON();
var features_accessories_8 = format_accessories_8.readFeatures(json_accessories_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4324'});
var jsonSource_accessories_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_accessories_8.addFeatures(features_accessories_8);
var lyr_accessories_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_accessories_8, 
                style: style_accessories_8,
                popuplayertitle: "accessories",
                interactive: true,
    title: 'accessories<br />\
    <img src="styles/legend/accessories_8_0.png" /> clothing<br />\
    <img src="styles/legend/accessories_8_1.png" /> footwear<br />\
    <img src="styles/legend/accessories_8_2.png" /> jwellery<br />'
        });
var format_education_9 = new ol.format.GeoJSON();
var features_education_9 = format_education_9.readFeatures(json_education_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4324'});
var jsonSource_education_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_education_9.addFeatures(features_education_9);
var lyr_education_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_education_9, 
                style: style_education_9,
                popuplayertitle: "education",
                interactive: true,
    title: 'education<br />\
    <img src="styles/legend/education_9_0.png" /> art<br />\
    <img src="styles/legend/education_9_1.png" /> books and stationary<br />\
    <img src="styles/legend/education_9_2.png" /> classes<br />\
    <img src="styles/legend/education_9_3.png" /> gift shop<br />\
    <img src="styles/legend/education_9_4.png" /> xerox and stationary<br />'
        });
var format_agency_10 = new ol.format.GeoJSON();
var features_agency_10 = format_agency_10.readFeatures(json_agency_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4324'});
var jsonSource_agency_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agency_10.addFeatures(features_agency_10);
var lyr_agency_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_agency_10, 
                style: style_agency_10,
                popuplayertitle: "agency",
                interactive: true,
                title: '<img src="styles/legend/agency_10.png" /> agency'
            });
var format_clothing_11 = new ol.format.GeoJSON();
var features_clothing_11 = format_clothing_11.readFeatures(json_clothing_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4324'});
var jsonSource_clothing_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clothing_11.addFeatures(features_clothing_11);
var lyr_clothing_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clothing_11, 
                style: style_clothing_11,
                popuplayertitle: "clothing",
                interactive: true,
                title: '<img src="styles/legend/clothing_11.png" /> clothing'
            });
var format_food_12 = new ol.format.GeoJSON();
var features_food_12 = format_food_12.readFeatures(json_food_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4324'});
var jsonSource_food_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_food_12.addFeatures(features_food_12);
var lyr_food_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_food_12, 
                style: style_food_12,
                popuplayertitle: "food",
                interactive: true,
    title: 'food<br />\
    <img src="styles/legend/food_12_0.png" /> dairy<br />\
    <img src="styles/legend/food_12_1.png" /> dessert<br />\
    <img src="styles/legend/food_12_2.png" /> fast food<br />\
    <img src="styles/legend/food_12_3.png" /> fruits<br />\
    <img src="styles/legend/food_12_4.png" /> grocery<br />\
    <img src="styles/legend/food_12_5.png" /> juice<br />\
    <img src="styles/legend/food_12_6.png" /> masala<br />\
    <img src="styles/legend/food_12_7.png" /> pancakes<br />\
    <img src="styles/legend/food_12_8.png" /> restaurant<br />'
        });
var format_hawkers_13 = new ol.format.GeoJSON();
var features_hawkers_13 = format_hawkers_13.readFeatures(json_hawkers_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4324'});
var jsonSource_hawkers_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hawkers_13.addFeatures(features_hawkers_13);
var lyr_hawkers_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hawkers_13, 
                style: style_hawkers_13,
                popuplayertitle: "hawkers",
                interactive: true,
                title: '<img src="styles/legend/hawkers_13.png" /> hawkers'
            });

lyr_CartoDark_0.setVisible(true);lyr_building_1.setVisible(true);lyr_main_transport_2.setVisible(true);lyr_roads_3.setVisible(true);lyr_other_shops_4.setVisible(true);lyr_medical_5.setVisible(true);lyr_tapri_6.setVisible(true);lyr_home_7.setVisible(true);lyr_accessories_8.setVisible(true);lyr_education_9.setVisible(true);lyr_agency_10.setVisible(true);lyr_clothing_11.setVisible(true);lyr_food_12.setVisible(true);lyr_hawkers_13.setVisible(true);
var layersList = [lyr_CartoDark_0,lyr_building_1,lyr_main_transport_2,lyr_roads_3,lyr_other_shops_4,lyr_medical_5,lyr_tapri_6,lyr_home_7,lyr_accessories_8,lyr_education_9,lyr_agency_10,lyr_clothing_11,lyr_food_12,lyr_hawkers_13];
lyr_building_1.set('fieldAliases', {'name': 'name', 'type': 'type', 'amenity': 'amenity', 'building': 'building', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'office': 'office', 'shop': 'shop', 'build_ht': 'build_ht', 'picture': 'picture', });
lyr_main_transport_2.set('fieldAliases', {'name': 'name', 'tyype': 'tyype', });
lyr_roads_3.set('fieldAliases', {'name': 'name', 'type': 'type', 'z_order': 'z_order', });
lyr_other_shops_4.set('fieldAliases', {'name': 'name', 'type': 'type', 'picture': 'picture', 'age': 'age', 'item sold': 'item sold', 'area': 'area', });
lyr_medical_5.set('fieldAliases', {'name': 'name', 'type': 'type', 'picture': 'picture', 'age': 'age', 'item sold': 'item sold', 'area': 'area', });
lyr_tapri_6.set('fieldAliases', {'name': 'name', 'type': 'type', 'picture': 'picture', 'age': 'age', 'item sold': 'item sold', 'area': 'area', });
lyr_home_7.set('fieldAliases', {'name': 'name', 'type': 'type', 'picture': 'picture', 'age': 'age', 'item sold': 'item sold', 'area': 'area', });
lyr_accessories_8.set('fieldAliases', {'name': 'name', 'type': 'type', 'picture': 'picture', 'age': 'age', 'item sold': 'item sold', 'area': 'area', });
lyr_education_9.set('fieldAliases', {'name': 'name', 'type': 'type', 'picture': 'picture', 'age': 'age', 'item sold': 'item sold', 'area': 'area', });
lyr_agency_10.set('fieldAliases', {'name': 'name', 'type': 'type', 'picture': 'picture', 'age': 'age', 'item sold': 'item sold', 'area': 'area', });
lyr_clothing_11.set('fieldAliases', {'name': 'name', 'type': 'type', 'age': 'age', 'item sold': 'item sold', 'area': 'area', });
lyr_food_12.set('fieldAliases', {'name': 'name', 'type': 'type', 'picture': 'picture', 'age': 'age', 'item sold': 'item sold', 'area': 'area', });
lyr_hawkers_13.set('fieldAliases', {'Name_of_In': 'Name_of_In', 'Gender': 'Gender', 'Age': 'Age', 'Purpose': 'Purpose', 'Name_of_th': 'Name_of_th', 'vending_ex': 'vending_ex', 'setup': 'setup', 'picture': 'picture', 'length': 'length', 'width': 'width', 'workers': 'workers', 'weekday_cl': 'weekday_cl', 'material_t': 'material_t', 'storage': 'storage', 'waste_segr': 'waste_segr', });
lyr_building_1.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', 'amenity': 'TextEdit', 'building': 'TextEdit', 'historic': 'TextEdit', 'land_area': 'TextEdit', 'landuse': 'TextEdit', 'office': 'TextEdit', 'shop': 'TextEdit', 'build_ht': 'TextEdit', 'picture': 'TextEdit', });
lyr_main_transport_2.set('fieldImages', {'name': 'TextEdit', 'tyype': 'TextEdit', });
lyr_roads_3.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', 'z_order': 'TextEdit', });
lyr_other_shops_4.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', 'picture': 'ExternalResource', 'age': 'TextEdit', 'item sold': 'TextEdit', 'area': 'TextEdit', });
lyr_medical_5.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', 'picture': 'ExternalResource', 'age': 'TextEdit', 'item sold': 'TextEdit', 'area': 'TextEdit', });
lyr_tapri_6.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', 'picture': 'ExternalResource', 'age': 'TextEdit', 'item sold': 'TextEdit', 'area': 'TextEdit', });
lyr_home_7.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', 'picture': 'ExternalResource', 'age': 'TextEdit', 'item sold': 'TextEdit', 'area': 'TextEdit', });
lyr_accessories_8.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', 'picture': 'ExternalResource', 'age': 'TextEdit', 'item sold': 'TextEdit', 'area': 'TextEdit', });
lyr_education_9.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', 'picture': 'ExternalResource', 'age': 'TextEdit', 'item sold': 'TextEdit', 'area': 'TextEdit', });
lyr_agency_10.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', 'picture': 'ExternalResource', 'age': 'TextEdit', 'item sold': 'TextEdit', 'area': 'TextEdit', });
lyr_clothing_11.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', 'age': 'TextEdit', 'item sold': 'TextEdit', 'area': 'TextEdit', });
lyr_food_12.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', 'picture': 'ExternalResource', 'age': 'TextEdit', 'item sold': 'TextEdit', 'area': 'TextEdit', });
lyr_hawkers_13.set('fieldImages', {'Name_of_In': 'TextEdit', 'Gender': 'TextEdit', 'Age': 'TextEdit', 'Purpose': 'TextEdit', 'Name_of_th': 'TextEdit', 'vending_ex': 'TextEdit', 'setup': 'TextEdit', 'picture': 'TextEdit', 'length': 'TextEdit', 'width': 'TextEdit', 'workers': 'TextEdit', 'weekday_cl': 'TextEdit', 'material_t': 'TextEdit', 'storage': 'TextEdit', 'waste_segr': 'TextEdit', });
lyr_building_1.set('fieldLabels', {'name': 'no label', 'type': 'no label', 'amenity': 'no label', 'building': 'no label', 'historic': 'no label', 'land_area': 'no label', 'landuse': 'no label', 'office': 'no label', 'shop': 'no label', 'build_ht': 'no label', 'picture': 'no label', });
lyr_main_transport_2.set('fieldLabels', {'name': 'no label', 'tyype': 'no label', });
lyr_roads_3.set('fieldLabels', {'name': 'no label', 'type': 'no label', 'z_order': 'no label', });
lyr_other_shops_4.set('fieldLabels', {'name': 'header label - always visible', 'type': 'inline label - visible with data', 'picture': 'inline label - visible with data', 'age': 'inline label - visible with data', 'item sold': 'hidden field', 'area': 'hidden field', });
lyr_medical_5.set('fieldLabels', {'name': 'header label - always visible', 'type': 'inline label - visible with data', 'picture': 'inline label - visible with data', 'age': 'inline label - visible with data', 'item sold': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_tapri_6.set('fieldLabels', {'name': 'header label - always visible', 'type': 'inline label - visible with data', 'picture': 'inline label - visible with data', 'age': 'inline label - visible with data', 'item sold': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_home_7.set('fieldLabels', {'name': 'header label - always visible', 'type': 'inline label - visible with data', 'picture': 'inline label - visible with data', 'age': 'inline label - visible with data', 'item sold': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_accessories_8.set('fieldLabels', {'name': 'header label - always visible', 'type': 'inline label - visible with data', 'picture': 'inline label - visible with data', 'age': 'inline label - visible with data', 'item sold': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_education_9.set('fieldLabels', {'name': 'header label - always visible', 'type': 'inline label - visible with data', 'picture': 'inline label - visible with data', 'age': 'inline label - visible with data', 'item sold': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_agency_10.set('fieldLabels', {'name': 'header label - always visible', 'type': 'inline label - visible with data', 'picture': 'inline label - visible with data', 'age': 'inline label - visible with data', 'item sold': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_clothing_11.set('fieldLabels', {'name': 'header label - always visible', 'type': 'inline label - visible with data', 'age': 'inline label - visible with data', 'item sold': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_food_12.set('fieldLabels', {'name': 'header label - always visible', 'type': 'inline label - visible with data', 'picture': 'inline label - visible with data', 'age': 'inline label - visible with data', 'item sold': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_hawkers_13.set('fieldLabels', {'Name_of_In': 'inline label - visible with data', 'Gender': 'inline label - visible with data', 'Age': 'inline label - visible with data', 'Purpose': 'inline label - visible with data', 'Name_of_th': 'inline label - visible with data', 'vending_ex': 'inline label - visible with data', 'setup': 'inline label - visible with data', 'picture': 'inline label - visible with data', 'length': 'inline label - visible with data', 'width': 'inline label - visible with data', 'workers': 'inline label - visible with data', 'weekday_cl': 'inline label - visible with data', 'material_t': 'inline label - visible with data', 'storage': 'inline label - visible with data', 'waste_segr': 'inline label - visible with data', });
lyr_hawkers_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});