import {
  NgModule
} from '@angular/core';

import {
  SkyAvatarModule
} from '@skyux/avatar';

import {
  SkyAlertModule,
  SkyKeyInfoModule
} from '@skyux/indicators';

import {
  SkyFluidGridModule
} from '@skyux/layout';

import {
  SkyNavbarModule
} from '@skyux/navbar';

import {
  SkySortModule
} from '@skyux/lists';

import {
  SkyListViewGridModule
} from '@skyux/list-builder-view-grids';

import {
  SkyListModule,
  SkyListToolbarModule,
  SkyListFiltersModule,
  SkyListSecondaryActionsModule,
  SkyListPagingModule
} from '@skyux/list-builder';

@NgModule({
  exports: [
    SkyAvatarModule,
    SkyAlertModule,
    SkyKeyInfoModule,
    SkyFluidGridModule,
    SkyNavbarModule,
    SkyListModule,
    SkyListToolbarModule,
    SkyListFiltersModule,
    SkyListSecondaryActionsModule,
    SkyListPagingModule,
    SkySortModule,
    SkyListViewGridModule
  ]
})
export class AppSkyModule { }
