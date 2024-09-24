import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CybersecurityGovernanceComponent } from './components/solutions/cybersecurity-governance/cybersecurity-governance.component';
import { CybersecurityConsultingComponent } from './components/solutions/cybersecurity-consulting/cybersecurity-consulting.component';
import { CybersecurityManagedComponent } from './components/solutions/cybersecurity-managed/cybersecurity-managed.component';
import { CybersecurityAwarenessComponent } from './components/solutions/cybersecurity-awareness/cybersecurity-awareness.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'cybersecurity-governance-service', component: CybersecurityGovernanceComponent, title: 'Governance Serrvice'},
    { path: 'cybersecurity-consulting-service', component: CybersecurityConsultingComponent, title: ' Consulting Service'},
    { path: 'cybersecurity-managed-service', component: CybersecurityManagedComponent,title: ' Managed Service'},
    { path: 'cybersecurity-awareness-service', component: CybersecurityAwarenessComponent,title: ' Awareness Service'},



];
