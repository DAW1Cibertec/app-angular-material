import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detalle',
  standalone: true,
  imports: [],
  templateUrl: './post-detalle.component.html',
  styleUrl: './post-detalle.component.scss'
})
export class PostDetalleComponent {

  id!:string;

  constructor(private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const postId = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = `${postId}`

  }


}
