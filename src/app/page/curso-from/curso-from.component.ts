import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { CursosService } from '../../services/cursos/cursos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-curso-from',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './curso-from.component.html',
  styleUrl: './curso-from.component.css'
})
export class CursoFromComponent {
  form: FormGroup;
  id:number = 0;

  constructor(
    private cursosService: CursosService, 
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    
    ) {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description:  ['',],
      image:    ['',],
      duration:  ['', [Validators.required]],
      videoUrl:  ['', [Validators.required]],
    })
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if(!this.id) return;
      this.cursosService.getCurso(this.id).subscribe(curso => {
        this.form.patchValue(curso);
      });
    })
  }  

  addCurso() {
    if (this.form.invalid) return;
    this.cursosService.addCurso(this.form.value)
    .then(() => this.router.navigate(["/cursos"]))
    .catch(err => console.log(err));
  }

  updateCurso(){
    if(this.form.invalid) return;
    this.cursosService.updateCurso({ id: this.id, ...this.form.value})
      .then(() => this.router.navigate(["/cursos"]))
      .catch(err => console.log(err));
  }
}
