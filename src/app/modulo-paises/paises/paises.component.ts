import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PaisesService } from '@services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class PaisesComponent implements OnInit {
  public titulo : string = 'Paises de habla hispana';
  public paisesES : string[] = [];

  constructor(private _paisesService : PaisesService, private cd : ChangeDetectorRef) {
  }

  ngOnInit(): void {

    this._paisesService.getPaisesEs()
        .then(paises => {
          this.paisesES.push(...paises);

          this.cd.markForCheck();

          // console.log(this.paisesES);
        })
        .catch(err => console.log(err));
  }

  eliminarPais(name : string){
    for( let [index, pais] of this.paisesES.entries() ){

          if( pais['name'] === name ){
              this.paisesES.splice(index, 1);
          }
    }
  };

  // funcion para mejorar el comportamiento de los ng-for
  trackByFn(index : number, item : any): number{
    return item['id'];
  }

}
