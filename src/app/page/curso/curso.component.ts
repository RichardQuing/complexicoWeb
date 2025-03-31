import { Component } from '@angular/core';
import { Curso } from '../../types/cursos';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CursosService } from '../../services/cursos/cursos.service';
import { SafeResourceUrl,DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent {
  curso: Curso | undefined;

  constructor(private activatedRoute: ActivatedRoute , private cursosService: CursosService,private sanitizer: DomSanitizer ) {}

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.cursosService.getCurso(id).subscribe(curso => {
        this.curso = curso
      })
    })
  }  
  getSafeYouTubeUrl(url: string): SafeResourceUrl {
    const videoId = this.getYouTubeId(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
}

getYouTubeId(url: string): string {
    const regExp = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"\s&?]+)/;
    const match = url.match(regExp);
    return match && match[1] ? match[1] : '';
}

}
