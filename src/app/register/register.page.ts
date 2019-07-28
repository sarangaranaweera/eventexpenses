import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import { DataService } from '../data.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  success = false;
  selectedFile = null;

  constructor(
    private formBuilder: FormBuilder,
    private data: DataService,
    public loadingController: LoadingController,
    private router: Router
    ) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  async onSubmit() {
    
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();

    const formData = new FormData();
    formData.append('name', this.registerForm.value.name);
    formData.append('email', this.registerForm.value.email);
    formData.append('password', this.registerForm.value.password);
    formData.append('image', this.selectedFile);

    console.log(this.registerForm.value.email);
    this.data.setUser(formData);
    this.success = true;
    loading.dismiss();

  }

}
