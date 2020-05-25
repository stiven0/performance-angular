import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UsuariosService } from '@services/users.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush // modificamos el changeDetection
})
export class UsuariosComponent implements OnInit {

  public usuarios : string[] = [];

  constructor(private _usersServices : UsuariosService,
              private cd : ChangeDetectorRef) { }

  ngOnInit(): void {
    this._usersServices.getUsers()
        .subscribe(res => {
          this.usuarios.push(...res.data);

          // le decimos que se active el changeDetection
          this.cd.markForCheck();

          // console.log(this.usuarios);
        },
        error => {
          console.log(error);
        })
  }

  eliminarUser(id): void{

    for( let [index, usuario] of this.usuarios.entries() ){

          if( usuario['id'] === id ){
              this.usuarios.splice(index, 1);
          }
    }
  };

  // funcion para mejorar el comportamiento de los ng-for
  trackByFn(index : number, item : any): number{
    return item['id'];
  }

}
