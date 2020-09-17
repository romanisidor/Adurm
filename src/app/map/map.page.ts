import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InfoModalPage } from '../info-modal/info-modal.page';

declare var google: any;
var icon = {
  url: "assets/icon/marker.svg", // url
  scaledSize: new google.maps.Size(30, 30), // size
};

var icon_int = {
  url: "assets/icon/marker_interior.svg", // url
  scaledSize: new google.maps.Size(30, 30), // size
};

var icon_fs = {
  url: "assets/icon/marker_fs.svg", // url
  scaledSize: new google.maps.Size(30, 30), // size
};

var icon_fn = {
  url: "assets/icon/marker_fn.svg", // url
  scaledSize: new google.maps.Size(30, 30), // size
};


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  
  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  infoWindows: any = [];
  markers: any = [
    {   
        title: "Aduana de Lázaro Cárdenas ",
        latitude: "17.982166 ",
        longitude: "-102.179184",
        icon: icon
    },
    {
        title: "Aduana de Acapulco",
        latitude: "16.848811",
        longitude: "-99.905043",
        icon: icon
    },
    {

        title: "Aduana de Manzanillo",
        latitude: "19.075488",
        longitude: "-104.285516",
        icon: icon
    },
    {

      title: "Aduana de Ciudad Acuña",
      latitude: "29.325995",
      longitude: "-100.929202",
      icon: icon_fn
  },
  {

    title: "Aduana de México",
    latitude: "19.474522",
    longitude: "-99.165738",
    icon: icon_int
  },
  {

    title: "Aduana del AICM",
    latitude: "19.446692",
    longitude: "-99.070763",
    icon: icon_int
  },
  {

    title: "Aduana de Agua Prieta",
    latitude: "31.333892",
    longitude: "-109.560856",
    icon: icon_fn
  },
  {

    title: "Aduana de Aguascalientes",
    latitude: "22.007755",
    longitude: "-102.250683",
    icon: icon_int
  },
  {

    title: "Aduana de Ciudad Camargo",
    latitude: "26.362562",
    longitude: "-98.806451",
    icon: icon_fn
  },
  {

    title: "Aduana de Altamira",
    latitude: "22.446580",
    longitude: "-97.887698",
    icon: icon
  },
  {

    title: "Aduana de Cancún",
    latitude: "21.038113",
    longitude: "-86.871760",
    icon: icon
  },
  {

    title: "Aduana de Chihuahua",
    latitude: "28.713568",
    longitude: "-106.100718",
    icon: icon_int
  },
  {

    title: "Aduana de Ciudad del Carmen",
    latitude: "18.650639",
    longitude: "-91.840033",
    icon: icon
  },
  {

    title: "Aduana de Ciudad Hidalgo",
    latitude: "14.702223",
    longitude: "-92.151447",
    icon: icon_fs
  },
  {

    title: "Aduana de Ciudad Juárez",
    latitude: "31.762693",
    longitude: "-106.451772",
    icon: icon_fn
  },
  {

    title: "Aduana de Ciudad Miguel Alemán",
    latitude: "26.403153",
    longitude: "-99.021083",
    icon: icon_fn
  },
  {

    title: "Aduana de Coatzacoalcos",
    latitude: "18.131398",
    longitude: "-94.420178",
    icon: icon
  },
  {

    title: "Aduana de Colombia",
    latitude: "27.698092",
    longitude: "-99.749097",
    icon: icon_fn
  },
  {

    title: "Aduana de Dos Bocas",
    latitude: "18.432712",
    longitude: "-93.199312",
    icon: icon
  },
  {

    title: "Aduana de Ensenada",
    latitude: "31.858631",
    longitude: "-116.632813",
    icon: icon  
  },
  {

    title: "Aduana de Guadalajara",
    latitude: "20.525703",
    longitude: "-103.296301",
    icon: icon_int
  },
  {

    title: "Aduana de Guanajuato",
    latitude: "21.009022",
    longitude: "-101.509830",
    icon: icon_int
  },
  {

    title: "Aduana de Guaymas",
    latitude: "27.924236",
    longitude: "-110.886499",
    icon: icon
  },
  {

    title: "Aduana de La Paz",
    latitude: "24.161520",
    longitude: "-110.317948",
    icon: icon
  },
  {

    title: "Aduana de Matamoros",
    latitude: "25.872293",
    longitude: "-97.475647",
    icon: icon_fn
  },
  {

    title: "Aduana de Mazatlán",
    latitude: "23.200632",
    longitude: "-106.413072",
    icon: icon
  },
  {

    title: "Aduana de Mexicali",
    latitude: "32.670592",
    longitude: "-115.387332",
    icon: icon_fn
  },
  {

    title: "Aduana de Monterrey",
    latitude: "25.807167",
    longitude: "-100.295821",
    icon: icon_int
  },
  {

    title: "Aduana de Naco",
    latitude: "31.333919",
    longitude: "-109.948347",
    icon: icon_fn
  },
  {

    title: "Aduana de Nogales",
    latitude: "31.332265",
    longitude: "-110.965954",
    icon: icon_fn
  },
  {

    title: "Aduana de Nuevo Laredo",
    latitude: "27.595508",
    longitude: "-99.544997",
    icon: icon_fn
  },
  {

    title: "Aduana de Ojinaga",
    latitude: "29.559930",
    longitude: "-104.396692",
    icon: icon_fn
  },
  {

    title: "Aduana de Piedras Negras",
    latitude: "28.697604",
    longitude: "-100.512986",
    icon: icon_fn
  },
  {

    title: "Aduana de Progreso",
    latitude: "21.304117",
    longitude: "-89.666413",
    icon: icon
  },
  {

    title: "Aduana de Puebla",
    latitude: "19.072367",
    longitude: "-98.160649",
    icon: icon_int
  },
  {

    title: "Aduana de Querétaro",
    latitude: "20.628112",
    longitude: "-100.193983",
    icon: icon_int
  },
  {

    title: "Aduana de Ciudad Reynosa",
    latitude: "26.042289",
    longitude: "-98.210114",
    icon: icon_fn
  },
  {

    title: "Aduana de Ciudad Puerto Palomas",
    latitude: "31.783451",
    longitude: "-107.627949",
    icon: icon_fn
  },
  {

    title: "Aduana de Salinas Cruz",
    latitude: "16.171071",
    longitude: " -95.190088",
    icon: icon
  },
  {

    title: "Aduana de San Luis Río Colorado",
    latitude: "32.457200",
    longitude: "-114.701444",
    icon: icon_fn
  },
  {

    title: "Aduana de Sonoyta",
    latitude: "31.879668",
    longitude: "-112.817382",
    icon: icon_fn
  },
  {

    title: "Aduana de Subteniente López",
    latitude: "18.493072",
    longitude: "-88.395340",
    icon: icon_fs
  },
  {
    title: "Aduana de Tampico",
    latitude: "22.211447",
    longitude: "-97.858697",
    icon: icon
  },
  {
    title: "Aduana de Tecate",
    latitude: "32.575874",
    longitude: "-116.627566",
    icon: icon_fn
  },
  {
    title: "Aduana de Tijuana",
    latitude: "32.540938",
    longitude: "-117.034707",
    icon: icon_fn
  },
  {
    title: "Aduana de Toluca",
    latitude: "19.318381",
    longitude: "-99.564788",
    icon: icon_int
  },
  {
    title: "Aduana de Torreón",
    latitude: "25.472033",
    longitude: "-103.370134",
    icon: icon_int
  },
  {
    title: "Aduana de Tuxpan",
    latitude: "20.947661",
    longitude: "-97.346047",
    icon: icon
  },
  {
    title: "Aduana de Veracruz",
    latitude: "19.214358",
    longitude: "-96.155015",
    icon: icon
  },





     
  ];
 


  constructor(private modalController: ModalController) { }


  async openModal(){
    const modal = await this.modalController.create({
      component: InfoModalPage
    });
    return await modal.present();
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.showMap();
  
  }

  addMarkersToMap(markers) {
    for (let marker of markers) {
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude,
        icon: marker.icon



      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
     

      
    }
  }

  addInfoWindowToMarker(marker) {
    let infoWindowContent = '<div id="content">' +
      '<h2 id="firstHeading" class"firstHeading" style="text-align:center;">' + marker.title + '</h2>' +
      '<ion-button id="navigate" expand="full">Navegar</ion-button>' +
      '<ion-button id="info" expand="full">Más información</ion-button>' +
      '</div>';

    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);

      google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
        document.getElementById('navigate').addEventListener('click', () => {
         
          // code to navigate using google maps app
          window.open('https://www.google.com/maps/dir/?api=1&destination=' + marker.latitude + ',' + marker.longitude);
        });
        document.getElementById('info').addEventListener('click', () => {
          this.openModal();
        });
      });
    });
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows() {
    for (let window of this.infoWindows) {
      window.close();
    }
  }

  showMap() {
    const location = new google.maps.LatLng(19.433387, -99.133195);
    const options = {
      center: location,
      zoom: 6,
      disableDefaultUI: false
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
    
  }
}