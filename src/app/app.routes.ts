import { Routes } from '@angular/router';
import { ConnexionComponent } from './components/pages/connexion/connexion.component';
import { InscriptionComponent } from './components/pages/inscription/inscription.component';
import { MessagerieComponent } from './components/pages/messagerie/messagerie.component';
import { authenticatedGuard } from './guard/authenticated.guard';

export const routes: Routes = [
    { path: "connexion", component: ConnexionComponent},
    { path: "inscription", component: InscriptionComponent},
    { path: "messagerie", component: MessagerieComponent, canActivate: [authenticatedGuard]},
    { path: "**", redirectTo: "/connexion"}
];
