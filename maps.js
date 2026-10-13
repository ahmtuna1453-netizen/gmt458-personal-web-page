/* GMT 458 Assignment 1: OpenLayers + Leaflet map examples. */
(function () {
  const places = [
    { name: "Anıtkabir", coords: [32.8369, 39.9251] },
    { name: "Ankara Castle", coords: [32.8627, 39.9389] },
    { name: "Kızılay", coords: [32.8541, 39.9208] },
    { name: "Hacettepe University", coords: [32.7338, 39.8676] },
    { name: "Atakule", coords: [32.8628, 39.8869] },
    { name: "Gençlik Park", coords: [32.8507, 39.9407] },
    { name: "AŞTİ", coords: [32.8122, 39.9179] },
    { name: "ODTÜ", coords: [32.7780, 39.8917] },
    { name: "Kuğulu Park", coords: [32.8597, 39.9018] },
    { name: "Eymir Lake", coords: [32.8897, 39.8132] },
    { name: "Sample Point 11", coords: [32.8050, 39.9510] },
    { name: "Sample Point 12", coords: [32.8800, 39.9300] }
  ];
  const threshold = 11;
  const center = [32.854, 39.920];
  const tileUrl = "https://tile.openstreetmap.de/{z}/{x}/{y}.png";

  if (window.ol && document.getElementById("ol-map")) {
    const features = places.map(function (place) {
      return new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat(place.coords)),
        name: place.name
      });
    });
    const vectorLayer = new ol.layer.Vector({
      source: new ol.source.Vector({ features: features, wrapX: false }),
      style: function (feature) {
        return new ol.style.Style({
          image: new ol.style.Circle({ radius: 6, fill: new ol.style.Fill({ color: "#e7784f" }), stroke: new ol.style.Stroke({ color: "#ffffff", width: 2 }) }),
          text: new ol.style.Text({ text: feature.get("name"), offsetY: -15, font: "12px sans-serif", fill: new ol.style.Fill({ color: "#19352e" }), stroke: new ol.style.Stroke({ color: "#ffffff", width: 3 }) })
        });
      },
      visible: false
    });
    const view = new ol.View({ center: ol.proj.fromLonLat(center), zoom: 10, minZoom: 3, maxZoom: 19, multiWorld: false });
    const map = new ol.Map({
      target: "ol-map",
      layers: [new ol.layer.Tile({ source: new ol.source.XYZ({ url: tileUrl, attributions: '&copy; OpenStreetMap contributors', wrapX: false }) }), vectorLayer],
      view: view
    });
    function updateOl() {
      const zoom = view.getZoom();
      vectorLayer.setVisible(zoom >= threshold);
      document.getElementById("ol-zoom").textContent = "Zoom: " + zoom.toFixed(1) + " · markers " + (zoom >= threshold ? "visible" : "hidden (zoom to 11)");
    }
    view.on("change:resolution", updateOl);
    updateOl();
  }

  if (window.L && document.getElementById("leaflet-map")) {
    const map = L.map("leaflet-map", {
      minZoom: 3, maxZoom: 19, worldCopyJump: false,
      maxBounds: [[-85, -180], [85, 180]], maxBoundsViscosity: 1.0
    }).setView([center[1], center[0]], 10);
    L.tileLayer(tileUrl, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      minZoom: 3, maxZoom: 19, noWrap: true, bounds: [[-85, -180], [85, 180]]
    }).addTo(map);
    const markerLayer = L.layerGroup();
    places.forEach(function (place) {
      L.circleMarker([place.coords[1], place.coords[0]], { radius: 6, color: "#ffffff", weight: 2, fillColor: "#e7784f", fillOpacity: 1 })
        .bindPopup("<strong>" + place.name + "</strong>").addTo(markerLayer);
    });
    function updateLeaflet() {
      const zoom = map.getZoom();
      if (zoom >= threshold) { if (!map.hasLayer(markerLayer)) markerLayer.addTo(map); }
      else if (map.hasLayer(markerLayer)) map.removeLayer(markerLayer);
      document.getElementById("leaflet-zoom").textContent = "Zoom: " + zoom + " · markers " + (zoom >= threshold ? "visible" : "hidden (zoom to 11)");
    }
    map.on("zoomend", updateLeaflet);
    updateLeaflet();
  }
})();
