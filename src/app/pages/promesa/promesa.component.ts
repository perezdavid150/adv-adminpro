import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html'
})
export class PromesaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then( usuario => {
      console.log(usuario);
    });

    // const promesa = new Promise( (resolve, reject) => {

    //   if (false){
    //     resolve('object');
    //   }else{
    //     reject('mal');
    //   }

    // });

    // promesa.then( (mensaje) => {
    //   console.log(mensaje);
    // })
    // .catch( error => console.log('Error promesa ' + error));

    // console.log('object2');

  }

  getUsuarios() {

    return new Promise(resolve => {

      fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(body => console.log(body.data));

    });
  }

}
