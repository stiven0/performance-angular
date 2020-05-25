import { Component, OnInit } from '@angular/core';
import { format, formatDistance, subDays, addDays, getMilliseconds,
         getUnixTime, getDay, getMinutes, getTime, formatDuration,
         isBefore, isFuture } from 'date-fns';
import { es } from 'date-fns/locale'; // importar formato español para darle a las fechas

@Component({
  selector: 'app-fechas',
  templateUrl: './fechas.component.html',
  styleUrls: ['./fechas.component.css']
})
export class FechasComponent implements OnInit {

  titulo : string = 'Date-Fns';
  formatDate : string;
  dateDistance : string;
  miliseconds : number;
  day : number;
  minutes : number;
  timeUnix : number;
  dateMiliseconds : number;
  dateDuration : string;
  beforeDate : boolean;
  futureDate : boolean;


  constructor() { }

  ngOnInit(): void {
    this.pruebaDateFns();
  }

  pruebaDateFns(): void{
    this.formatDate = format( new Date(), 'dd/MM/yyyy' );

    this.dateDistance = formatDistance( subDays( new Date(), 3), new Date(), { locale : es } );

    this.miliseconds = getMilliseconds( new Date() );

    this.minutes = getMinutes( new Date() );

    this.day = getDay( new Date() );

    this.timeUnix = getUnixTime( new Date() );

    this.dateMiliseconds = getTime( new Date() );

    this.dateDuration = formatDuration({
      years: 5,
      months : 5,
      weeks : 5,
      days : 5,
      hours : 5,
      minutes : 5,
      seconds : 5,
    });

    this.beforeDate = isBefore( new Date(2018,2,10), new Date(2019,1,20) );

    this.futureDate = isFuture( new Date(2021,2,10)  );


  };

}
