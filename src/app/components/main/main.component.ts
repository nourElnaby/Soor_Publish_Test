import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { ApiService } from '../../services/Api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule, TruncatePipe, CommonModule,RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  providers: [TruncatePipe]
})

export class MainComponent {

  private apiService = inject(ApiService)
  private translate = inject(TranslateService)

  newsList: any[] = []
  products: any[] = [];
  isLoading = false; // Loader flag
  successMessage: string | null = null;
  errorMessage: string | null = null;
  currentLang?: string = 'ar';

  registerForm = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    subject: new FormControl("", Validators.required),
    message: new FormControl("", Validators.required)
  });


  ngOnInit(): void {

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang = event.lang;
    });

    // Get News
    this.apiService.getNews().subscribe(response => {
      if (response.succeeded && response.data && response.data.news) {
        this.newsList = response.data.news;
      }
    }, error => {
      console.error('Error fetching news:', error);
    });


    // Get Products
    this.apiService.getProducts().subscribe(response => {
      if (response.succeeded && response.data && response.data.products) {
        this.products = response.data.products;
        console.log(this.products)
      }
    }, error => {
      console.error('Error fetching products:', error);
    });
  }

  getFormattedImagePath(path: string): string {
    return path.replace(/\\/g, '/');
  }

  getGroupedProducts() {
    const grouped = [];
    for (let i = 0; i < this.products.length; i += 4) {
      grouped.push(this.products.slice(i, i + 4));
    }
    return grouped;
  }



  onSubmit() {
    if (this.registerForm.valid) {
      this.isLoading = true; // Start loader
      this.successMessage = null; // Reset success message
      this.errorMessage = null; // Reset error message

      this.apiService.sendMessage(this.registerForm.value).subscribe(
        (response: any) => {
          this.isLoading = false; // Stop loader
          this.successMessage = 'Message sent successfully!'; // Show success message
          console.log('Message sent successfully', response);
          this.registerForm.reset(); // Optionally reset the form
        },
        (error: any) => {
          this.isLoading = false; // Stop loader
          this.errorMessage = 'Failed to send the message. Please try again.'; // Show error message
          console.error('Error sending message', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  // Check if form control is invalid and touched to show validation errors
  isInvalid(controlName: string): boolean | undefined {
    const control = this.registerForm.get(controlName);
    return control?.invalid && control?.touched;
  }

  getErrorMessage(controlName: string): string {
    const control = this.registerForm.get(controlName);

    if (control?.hasError('required')) {
      return 'This field is required';
    } else if (control?.hasError('email')) {
      return 'Please enter a valid email';
    }

    return '';
  }



}


