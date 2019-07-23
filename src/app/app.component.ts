import { CubeComponent } from './../modules/cube/cube.component';
import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  title = 'app works!';
  cubeColor = 'blue';
  @ViewChild('cubeContainer', {read: ViewContainerRef}) cubeContainer: ViewContainerRef;
  cube1: ComponentRef<CubeComponent>;
  cube2: ComponentRef<CubeComponent>;

  constructor(private resolver: ComponentFactoryResolver) {

  }

  ngAfterContentInit() {
    const factory = this.resolver.resolveComponentFactory(CubeComponent);
    this.cube1 = this.cubeContainer.createComponent(factory, 0);
    this.cube2 = this.cubeContainer.createComponent(factory, 1);
    this.cube1.instance.color = 'orange';
  }

  cubeUpdated($event) {
    const {isUpdated, event} = $event;
  }

  checkCube($event) {
    this.cubeColor = $event ? 'violet' : 'blue';
    console.log('isChecked', $event);
  }

  moveCube() {
    this.cubeContainer.move(this.cube1.hostView, 1);
  }
}
