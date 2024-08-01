import {
  Component,
  AfterViewInit,
  ViewContainerRef,
  ViewChild,
  ComponentRef,
  TemplateRef,
} from '@angular/core';
import { User } from './auth-form/auth-form.interface';
import { AuthFormComponent } from './auth-form/auth-form.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  component!: ComponentRef<AuthFormComponent>;
  @ViewChild('contentTemplate') contentTemplate!: TemplateRef<any>;

  constructor(private viewContainerRef: ViewContainerRef) {
    console.log(this.viewContainerRef);
  }
  ngAfterViewInit(): void {
    console.log(this.container);
    console.log(this.contentTemplate);
    /*const embededView = this.container.createEmbeddedView(
      this.contentTemplate,
      {
        title: 'Create Login',
        btnName: 'Register',
      }
    );

    this.component = this.container.createComponent(AuthFormComponent, {
      projectableNodes: [embededView.rootNodes],
    });

    this.component.instance.showMessage = true;
    this.component.instance.submitted.subscribe((data) => {
      console.log(data);
    });*/
  }

  destroyDynamicComponent() {
    this.container.move(this.component.hostView, 1);
    // this.component.destroy();
    //this.component.instanc;
  }
}
