import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { RoomComponent } from './room/room.component';
import { RoomsComponent } from './rooms/rooms.component';
import { Routes } from '@angular/router';
import { PagenotfoundComponent } from './errors/pagenotfound/pagenotfound.component';
import { InternalservererrorComponent } from './errors/internalservererror/internalservererror.component';

export const AllRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'rooms/:roomId', component: RoomComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PagenotfoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    AuthComponent,
    AdminComponent,
    RoomComponent,
    RoomsComponent,
    PagenotfoundComponent,
    InternalservererrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
