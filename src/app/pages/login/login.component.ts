import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonSubmitComponent } from '../../components/button-submit/button-submit.component';
import { LoginService } from '../../service/login/login.service';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';
import { ModalErrorComponent } from '../../components/modals/modal-error/modal-error.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonSubmitComponent, ModalErrorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  @Input() isLoading:boolean = false
  @Input() errorMessage:string = ''
  @Input() isModalOpen : boolean = false
  
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });   
  }

  onSubmit() {
    this.isLoading = true
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe({
        next:(response) => {
          if(response.status){
            this.authService.setToken(response.item.token)
            this.isLoading = false
          }
        },
        error:(e) => {
          this.isLoading = false
        },
        complete:() => {
          this.isLoading = false
          if(this.authService.getToken() != null){
            this.router.navigate(['/home'])
          }else{
            this.errorMessage = 'Acceso incorrecto'
            this.isModalOpen = true
          }
         }
      })
    }else{
      this.isLoading = false
    }
  }

  onShow(){
    this.isModalOpen = true
  }

}
