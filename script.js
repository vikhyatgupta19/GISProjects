require(["esri/config", "esri/Map", "esri/views/MapView"], function(esriConfig, Map, MapView){
    esriConfig.apiKey = "AAPKcd5dfc47a8364d949db24f83de49ac1dBfySJpI-cU4UPi21B1AxnPO2p98CQnW3Kh5DXzn3eomcmzTXq7C8mcF5spH1ONUx";
    const myMap = new Map({
        basemap: "arcgis-topographic"
    });
    const view = new MapView({
        map: myMap,
        container: "viewDiv"
    });
});