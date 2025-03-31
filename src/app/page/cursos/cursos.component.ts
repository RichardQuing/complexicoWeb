import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Curso } from '../../types/cursos';
import { CursosService } from '../../services/cursos/cursos.service';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = [  ];

  constructor(
    private router: Router,
    private cursosService: CursosService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.getCursos();
  }
  
  goToCurso(id: number) {
    this.router.navigate(['/cursos', id]);
  }

  getCursos() {
    this.cursosService.getCursos().subscribe((cursos) => {
      this.cursos = cursos;
    });
  }


  addToCart(event: Event, curso: Curso) {
    event.stopPropagation();
    this.cartService.addCurso(curso);
  }
}
