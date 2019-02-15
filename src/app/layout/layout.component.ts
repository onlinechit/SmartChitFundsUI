import { Component, OnInit } from '@angular/core';
import { ScfService } from '../service/scf.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private route: ActivatedRoute, private scfService: ScfService) { }

  ngOnInit() {
    



  }

}
