<script setup>
  import { Map, Marker, Popup } from "maplibre-gl";
  import {
    onMounted,
    reactive,
    onBeforeUnmount,
    onBeforeMount
  } from "vue";
  import { getUserLocation } from "@/utils/getUserLocation";
  import StoreUtils from "../utils/storeUtils";
  import BaseLayout from "../layout/BaseLayout.vue";
  import { MapPin } from "@iconoir/vue";

  // Map Resource Details
  const mapName = "LocateMe.map";
  const apiKey = import.meta.env.VITE_AWS_API_KEY;
  const region = "eu-north-1";

  // User Location
  const mapValue = reactive({
    error: null,
    lngLat: null,
    zoom: 15,
    show: false,
    isAddress: false,
    interval: null,
    timeToRender: 0,
    map: null,
    marker: null,
    deviceSpeed: null
  });

  const friends = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnrJY-fDaAmzAxdLGa3LHEyP4YkOkTOCiHcw&s",
      name: "CodeX Kelvin",
      last_seen: "3hrs ago",
      location: [6.9244, 3.5792]
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnrJY-fDaAmzAxdLGa3LHEyP4YkOkTOCiHcw&s",
      name: "CodeX Kelvin",
      last_seen: "3hrs ago",
      location: [3.5218155, 6.4408676]
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7kPUVBXaug6iM3wIFuPZmijI-G5ayVcl5Ag&s",
      name: "Pascal Chidi",
      last_seen: "1hr ago",
      location: [3.5108155, 6.4408676]
    },
    {
      img: "https://e7.pngegg.com/pngimages/273/154/png-clipart-cats-cats-thumbnail.png",
      name: "Chisomaga Onwukaife",
      last_seen: "2hrs ago",
      location: [3.6208155, 6.4408676]
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7kPUVBXaug6iM3wIFuPZmijI-G5ayVcl5Ag&s",
      name: "Clark Kent",
      last_seen: "active",
      location: [3.3208155, 6.4408676]
    },
    {
      img: "https://e7.pngegg.com/pngimages/273/154/png-clipart-cats-cats-thumbnail.png",
      name: "Chizzy Jnr",
      last_seen: "30hrs ago",
      location: [3.4208155, 6.4408676]
    }
  ]; //sample payload from backend

  const friendsGeoJSON = {
    type: "FeatureCollection",
    features: friends.map(friend => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: friend.location // Assuming [longitude, latitude]
      },
      properties: {
        img: friend.img,
        name: friend.name,
        last_seen: friend.last_seen
      }
    }))
  };

  const initializeMap = async (lngLat, zoom) => {
    return new Map({
      container: "map",
      style: `https://maps.geo.${region}.amazonaws.com/maps/v0/maps/${mapName}/style-descriptor?key=${apiKey}`,
      center: lngLat,
      zoom: zoom,
      attributionControl: false
    });

    //removed navigation control
    // mapWrapper.addControl(new maplibregl.NavigationControl(), 'top-left');
  };

  const main = async () => {
    // Initialize map and Amazon Location SDK client:
    mapValue.map = await initializeMap(
      mapValue.lngLat,
      mapValue.zoom
    );

    mapValue.map.on("load", async () => {
      // Add an image to use as a custom marker
      const image = await mapValue.map.loadImage(
        "https://maplibre.org/maplibre-gl-js/docs/assets/custom_marker.png"
      );
      mapValue.map.addImage("custom-marker", image.data);
      // Add a GeoJSON source with 3 points.

      mapValue.marker = new Marker({
        draggable: false
      })
        .setLngLat(mapValue.lngLat)
        .addTo(mapValue.map);

<<<<<<< HEAD
    mapValue.map.addSource('friends', {
        type: 'geojson',
        data: friendsGeoJSON // friendsGeoJSON data
      });

    // mapValue.map.on('click', (e) => {
    //
    // })

    friends.forEach(friend => {
=======
      mapValue.map.addSource("friends", {
        type: "geojson",
        data: friendsGeoJSON
      });

      friends.forEach(friend => {
>>>>>>> 37e48801750bde4cd6c89fbf20ef645e90c6b162
        // Create a DOM element for the marker
        const el = document.createElement("div");
        el.className = "marker";
        el.style.backgroundImage = `url(${friend.img})`;
        el.style.width = "50px";
        el.style.height = "50px";
        el.style.backgroundSize = "cover";
        el.style.borderRadius = "50%";

        // Add a marker to the map
        new Marker({
          element: el, // Use the custom element
<<<<<<< HEAD
          anchor: 'bottom' // Position the marker to align correctly (optional)
        }).setLngLat(friend.location)
            .setPopup(new Popup({ offset: 25 }) // add popups
            .setHTML(`<strong>${friend.name}</strong><br>Last seen: ${friend.last_seen}`))
            .addTo(mapValue.map);


      });
  });
=======
          anchor: "bottom" // Position the marker to align correctly (optional)
        })
          .setLngLat(friend.location)
          .setPopup(
            new Popup({
              offset: 25
            }) // add popups
              .setHTML(
                `<strong>${friend.name}</strong><br>Last seen: ${friend.last_seen}`
              )
          )
          .addTo(mapValue.map);
      });

      // Add a symbol layer
      // mapValue.map.addLayer({
      //   id: 'friends-layer',
      //   type: 'circle', // Or 'symbol' if you want to use icons
      //   source: 'friends',
      //   paint: {
      //     'circle-radius': 6,
      //     'circle-color': 'rgba(0,0,0,0.28)'
      //   }
      // });

      // Center the map on the coordinates of any clicked symbol from the 'symbols' layer.
      mapValue.map.on("click", "symbols", e => {
        mapValue.map.flyTo({
          center: e.features[0].geometry.coordinates
        });
      });

      // Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
      mapValue.map.on("mouseenter", "symbols", () => {
        mapValue.map.getCanvas().style.cursor = "pointer";
      });

      // Change it back to a pointer when it leaves.
      mapValue.map.on("mouseleave", "symbols", () => {
        mapValue.map.getCanvas().style.cursor = "";
      });
    });
>>>>>>> 37e48801750bde4cd6c89fbf20ef645e90c6b162

    // prevents from draging the map around
    mapValue.map.dragPan.enable();
  };

  onMounted(() => {
    // First, get the user's initial location
    getUserLocation({
      enableHighAccuracy: true,
      timeout: 5000
    })
      .then(coords => {
        // Set initial coordinates
        console.log(coords);
        mapValue.lngLat = [
          coords.longitude,
          coords.latitude
        ];
        StoreUtils.commit("map", "lngLat", mapValue.lngLat);
        mapValue.deviceSpeed = coords.speed;

        // Initialize the map and marker with the initial coordinates
        if (!mapValue.map) {
          main(); // Assuming this sets up the map
        }
      })
      .catch(err => {
        mapValue.error = err.message;
      });

    // Then, continuously watch the user's location for changes
    const watchId = navigator.geolocation.watchPosition(
      position => {
        const coords = position.coords;
        mapValue.lngLat = [
          coords.longitude,
          coords.latitude
        ];
        mapValue.deviceSpeed = coords.speed;
        StoreUtils.commit("map", "lngLat", mapValue.lngLat);

        // Update the marker's position on the map
        if (mapValue.marker && mapValue.map) {
          mapValue.marker.setLngLat(mapValue.lngLat);
        }
      },
      err => {
        mapValue.error = err.message;
      },
      {
        enableHighAccuracy: true,
        timeout: 5000
      }
    );

    // Clear the watcher when the component is unmounted
    onBeforeUnmount(() => {
      navigator.geolocation.clearWatch(watchId);
    });
  });
</script>

<template>
  <BaseLayout>
    <template v-slot:screens>
      <div
        v-if="mapValue.deviceSpeed"
        class="transition-all absolute z-30 m-5 ease-out delay-10 duration-100 bg-white cursor-pointer p-2 rounded-full shadow-sm flex items-center gap-2"
      >
        <p class="text-sm font-light">
          {{ mapValue?.deviceSpeed?.toFixed(1) }}/MPH
        </p>
      </div>
      <div
        id="map"
        class="w-full h-screen overflow-hidden"
      ></div>
    </template>
  </BaseLayout>
</template>

<style scoped>
  #map {
    width: 100%;
    height: 100vh;
  }
</style>
