<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">GMap</span>
          <span>GMap component provides integration with Google Maps API. This sample demontrates various uses cases like binding, overlays and events. Click the map to add a new item.</span>
        </div>
      </div>
      <div id="wrapper">

        <h2>Features</h2>

        <h3>1. Basic</h3>

        <p>Displays the google map with given options.</p>

        <vf-growl :value="msgs"></vf-growl>

        <vf-gmap ref="gmap"
          :style="{'width':'100%','min-height':'320px'}"
          :options="options"
          :overlays="overlays"
          @click="handleMapClick"
          @overlayclick="handleOverlayClick"
          @overlaydragend="handleDragEnd">
        </vf-gmap>
        <vf-button type="button" label="Clear" icon="fa-close"
          @click="clear()" style="margin-top:10px"></vf-button>
        <vf-button type="button" label="Zoom In" icon="fa-search-plus"
          @click="zoomIn($refs.gmap.getMap())" style="margin-top:10px"></vf-button>
        <vf-button type="button" label="Zoom Out" icon="fa-search-minus"
          @click="zoomOut($refs.gmap.getMap())" style="margin-top:10px"></vf-button>

      </div>
  </div>
</template>
<script>
  const google = window.google;
  export default {
    name: 'gmapdemo',
    data () {
      return {
        options: null,
        overlays: [],
        dialogVisible: false,
        markerTitle: null,
        selectedPosition: null,
        infoWindow: null,
        draggable: false,
        msgs: []
      };
    },
    methods: {
      handleMapClick (event) {
        this.dialogVisible = true;
        this.selectedPosition = event.latLng;
        alert(event.latLng);
      },
      handleOverlayClick (event) {
        // this.msgs = [];
        let isMarker = typeof event.overlay.getTitle !== 'undefined';
        if(isMarker) {
          let title = event.overlay.getTitle();
          this.infoWindow.setContent('' + title + '');
          this.infoWindow.open(event.map, event.overlay);
          event.map.setCenter(event.overlay.getPosition());
          // this.msgs.push({severity:'info', summary:'Marker Selected', detail: title});
        } else {
          // this.msgs.push({severity:'info', summary:'Shape Selected', detail: ''});
        }
      },
      addMarker () {
        this.overlays.push(new google.maps.Marker({
          position: {
            lat: this.selectedPosition.lat(),
            lng: this.selectedPosition.lng()
          },
          title: this.markerTitle,
          draggable: this.draggable
        }));
        this.markerTitle = null;
        this.dialogVisible = false;
      },
      handleDragEnd (event) {
        let title = event.overlay.getTitle();
        alert('Dragged: ' + title);
        // this.msgs = [];
        // this.msgs.push({severity:'info', summary:'Marker Dragged', detail: event.overlay.getTitle()});
      },
      initOverlays () {
        if (!this.overlays || !this.overlays.length) {
          this.overlays = [
            new google.maps.Marker({position: {lat: 14.6188043, lng: 79.9630253}, title: 'Talamanchi', draggable: true }),
            new google.maps.Marker({position: {lat: 14.4290442, lng: 79.9456852}, title: 'Nellore', draggable: true }),
            new google.maps.Polygon({paths: [
              {lat: 14.1413809, lng: 79.8254154}, {lat: 11.1513809, lng: 78.8354154},
              {lat: 15.1313809, lng: 78.8254154}, {lat: 15.1613809, lng: 79.8854154}
            ], strokeOpacity: 0.5, strokeWeight: 1, fillColor: '#1976D2', fillOpacity: 0.35
            }),
            new google.maps.Circle({center: {lat: 14.1413809, lng: 79.9513809},
              fillColor: '#197642', fillOpacity: 0.25, strokeWeight: 1, radius: 25000}),
            new google.maps.Polyline({path: [{lat: 14.1413809, lng: 79.9254154},
              {lat: 14.6413809, lng: 79.9254154}], geodesic: true, strokeColor: '#F0F000', strokeOpacity: 0.5, strokeWeight: 2})
          ];
        }
      },
      zoomIn (map) {
        map.setZoom(map.getZoom() + 1);
      },
      zoomOut (map) {
        map.setZoom(map.getZoom() - 1);
      },
      clear () {
        this.overlays = [];
      }
    },
    mounted () {
      this.options = {
        center: {
          lat: 14.4426, lng: 79.9865
        },
        zoom: 8
      };
      this.initOverlays();
      this.infoWindow = new google.maps.InfoWindow();
    }
  };
</script>

