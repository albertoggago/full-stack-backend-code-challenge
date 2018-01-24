import { Component, OnInit } from '@angular/core';
import {GitInformation} from '../interfaces/git-information.interface';
import {GitApiService} from '../git-api.service'

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {

searching : string = "";
gitInformation  : GitInformation  ;

  constructor(
  	private gitApiService: GitApiService
  	) { }

  ngOnInit() {
  }

  onSearching() {
  	this.gitApiService.finding(this.searching)
       .subscribe(elementos => {
       	console.log(elementos);
       	this.gitInformation = elementos;
        console.log(this.gitInformation.items);
       	  //this.correos = elementos;
          //this.tipoSearch = this.selecciones[0].value;
          //this.cantidad = this.correos.length;
          //if (this.correos.length>0) {
		  //	    this.renumerarCorreos();
          //  this.seleccionado = 0;
          //  this.onSelect(this.correos[this.seleccionado]);
        })
  }

}
