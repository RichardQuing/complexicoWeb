import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Curso } from '../../types/cursos';
import { CursosService } from '../../services/cursos/cursos.service';
import { CartService } from '../../services/cart/cart.service';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = [  ];
  role: string = "user";

  constructor(
    private router: Router,
    private cursosService: CursosService,
    private cartService: CartService,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.getCursos();
    this.getRole();
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

  deleteCurso(event: Event, id: number) {
    this.cursosService.deleteCurso(id)
    .then(()=> console.log("Curso eliminado con exito"))
    .catch(err => console.log(err));
  }

  getRole() {
    this.usersService.getCurrentUser()!
      .then(user => {
        console.log(user);
        this.role = user?.["role"]
      });
  }
}
