import { CanDeactivateFn } from '@angular/router';
import { CursoFromComponent } from '../../page/curso-from/curso-from.component';


export const warningsGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  const currentComponent = component as CursoFromComponent;
  
  if(currentComponent.form.touched){
    return window.confirm("Estas seguro que deseas abandonar la pagina?");
  }
  return true;
};
