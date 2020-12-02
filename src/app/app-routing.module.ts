import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'owner-home',
    loadChildren: () => import('./pages/owner-home/owner-home.module').then( m => m.OwnerHomePageModule)
  },
  {
    path: 'bookings',
    loadChildren: () => import('./pages/bookings/bookings.module').then( m => m.BookingsPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./pages/onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'new-bookings',
    loadChildren: () => import('./pages/new-bookings/new-bookings.module').then( m => m.NewBookingsPageModule)
  },
  {
    path: 'manage-spaces',
    loadChildren: () => import('./pages/manage-spaces/manage-spaces.module').then( m => m.ManageSpacesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'add-space-modal',
    loadChildren: () => import('./pages/add-space-modal/add-space-modal.module').then( m => m.AddSpaceModalPageModule)
  },
  {
    path: 'add-profile-modal',
    loadChildren: () => import('./pages/add-profile-modal/add-profile-modal.module').then( m => m.AddProfileModalPageModule)
  },
  {
    path: 'user-group',
    loadChildren: () => import('./user-group/user-group.module').then( m => m.UserGroupPageModule)
  },  {
    path: 'walkin',
    loadChildren: () => import('./pages/walkin/walkin.module').then( m => m.WalkinPageModule)
  },
  {
    path: 'profiles',
    loadChildren: () => import('./pages/profiles/profiles.module').then( m => m.ProfilesPageModule)
  },
  {
    path: 'model',
    loadChildren: () => import('./pages/model/model.module').then( m => m.ModelPageModule)
  },


  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
