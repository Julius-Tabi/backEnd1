import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'owner-home',
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
  },
  {
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
  {
    path: 'reservation',
    loadChildren: () => import('./pages/reservation/reservation.module').then( m => m.ReservationPageModule)
  },
  {
    path: 'update-space',
    loadChildren: () => import('./pages/update-space/update-space.module').then( m => m.UpdateSpacePageModule)
  },
  {
    path: 'upload-space',
    loadChildren: () => import('./pages/upload-space/upload-space.module').then( m => m.UploadSpacePageModule)
  },
  {
    path: 'resources',
    loadChildren: () => import('./pages/resources/resources.module').then( m => m.ResourcesPageModule)
  },
  {
    path: 'upload-gallery',
    loadChildren: () => import('./pages/upload-gallery/upload-gallery.module').then( m => m.UploadGalleryPageModule)
  },  {
    path: 'user-landing',
    loadChildren: () => import('./pages/user-landing/user-landing.module').then( m => m.UserLandingPageModule)
  },
  {
    path: 'view-workspace',
    loadChildren: () => import('./pages/view-workspace/view-workspace.module').then( m => m.ViewWorkspacePageModule)
  },
  {
    path: 'user-bookings',
    loadChildren: () => import('./pages/user-bookings/user-bookings.module').then( m => m.UserBookingsPageModule)
  },



  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
