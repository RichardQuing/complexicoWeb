import { Component } from '@angular/core';
import { Curso } from '../../types/cursos';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CursosService } from '../../services/cursos/cursos.service';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent {
  curso: Curso | undefined;

  constructor(private activatedRoute: ActivatedRoute , private cursosService: CursosService) {}

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.cursosService.getCurso(id).subscribe(curso => {
        this.curso = curso
      })
    })
  }  
}
