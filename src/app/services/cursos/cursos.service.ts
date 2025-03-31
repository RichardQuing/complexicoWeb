import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, getDocs, setDoc } from '@angular/fire/firestore';
import { Curso } from '../../types/cursos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor(private firestore: Firestore) {}

  getCursos(): Observable<Curso[]> {
    const cursosRef = collection(this.firestore, "cursos");
    return collectionData(cursosRef) as Observable<Curso[]>;
  }
  
  getCurso(id: number): Observable<Curso> {
    const cursoRef = doc(this.firestore, "cursos", id.toString());
    return docData(cursoRef) as Observable<Curso>;
  }

  addCurso(curso: Curso) {
    const cursosRef = collection(this.firestore, "cursos");
    return getDocs(cursosRef).then(snapshot => {
      const maxId = snapshot.docs.reduce((max, curso) => Math.max(max, Number(curso.id)), 0);
      curso.id = maxId + 1;
      return this.updateCurso(curso);
    });
  }

  updateCurso(curso: Curso) {
    const cursoRef = doc(this.firestore, "cursos", curso.id.toString());
    return setDoc(cursoRef, curso, {merge:true});
  }

  deleteCurso(id: number) {
    const cursoRef = doc(this.firestore, "cursos", id.toString());
    return deleteDoc(cursoRef);
  }

  loadCursosToFirebase() {
    const cursos: Curso[] = [];
    cursos.forEach((curso) => {
      const cursoRef = doc(this.firestore, "cursos", curso.id.toString());
      setDoc(cursoRef, curso);
    });
  }
  
}
