import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { NopageComponent } from './nopage/nopage.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {
    path:"about",
    component:AboutComponent,
    // pathMatch:'full'
  },
  {
    path:"login",
    component:LoginComponent,
    children:[
      {path:'register', component:RegisterComponent},
    ]
    
  },
  {
    path:"contact",
    component:ContactComponent,
    // pathMatch:"full"
  },
  {
    path:"register",
    component:RegisterComponent,
    // pathMatch:'full'
    children:[
      {path:'login',component:LoginComponent},
      {path:'success', component:SuccessComponent},
    ]
  },
  {
    path:"app-success",
    component:SuccessComponent,
    children:[
      {path:'login', component:LoginComponent},
    ]
  },
  {
    component:NopageComponent,
    path:'**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
