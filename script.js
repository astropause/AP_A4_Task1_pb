require([
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/FeatureLayer",
      "esri/symbols/PictureMarkerSymbol",
      "dojo/domReady!"
    ], function(
      Map, MapView, FeatureLayer, PictureMarkerSymbol
    ) {

      // Create the map
      var map = new Map({
        basemap: "gray"
      });

      // Create the MapView
  
          const view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-90.1982, 38.6274],
        zoom: 13 
      });
      /*************************************************************
       * The PopupTemplate content is the text that appears inside the
       * popup. {fieldName} can be used to reference the value of an
       * attribute of the selected feature. HTML elements can be used
       * to provide structure and styles within the content. The
       * fieldInfos property is an array of objects (each object representing
       * a field) that is use to format number fields and customize field
       * aliases in the popup and legend.
       **************************************************************/

      var template = { // autocasts as new PopupTemplate()
        title: "Neighborhood: {NHD_NAME}",
        content: [{
         
          type: "fields",
          fieldInfos: [{
            fieldName: "NHD_NAME",
            label: "Neighborhood Name: ",
            visible: true
          }, {
            fieldName: "NHD_NUM",
            label: "Neighborhood Number: ",
            visible: true,
            format: {
              digitSeparator: true,
              places: 0
            }
          }, {
            fieldName: "ANGLE",
            label: "Angle: ",
            visible: true,
            format: {
              digitSeparator: true,
              places: 0
            }
          }, {
            fieldName: "Shape__Area",
            label: "Area:",
            visible: true,
            format: {
              digitSeparator: true,
              places: 0
            }
          }, {
            fieldName: "Shape__Length",
            label: "Length:",
            visible: true,
            format: {
              digitSeparator: true,
              places: 0
            }
          }
                      ]
        }]
      };

    var symbol = {
      type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
      url: "https://static.thenounproject.com/png/1994291-512.png",
      width: "12px",
      height: "12px"
    };
    var renderer = {
      type: "simple",  // autocasts as new SimpleRenderer()
      symbol: symbol
    };
  
  
      // Reference the popupTemplate instance in the
      // popupTemplate property of FeatureLayer
    var featureLayer = new FeatureLayer({
      url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/ArcGIS/rest/services/STL_Neighborhood/FeatureServer/0",
      outFields: ["*"],
      popupTemplate: template,
      renderer:renderer
    });

    map.add(featureLayer);

  });
