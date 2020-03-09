import {
    NgModule,
    ApplicationRef,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {
    removeNgStyles,
    createNewHosts,
    createInputTransfer,
} from '@angularclass/hmr';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import {RecipesModule} from "./recipes/recipes.module";
import {CreateRecipeModule} from "../components/modals/create-recipe.module";
import {UpdateRecipeModule} from "../components/modals/update-recipe.module";
import {RatingModule} from "ngx-bootstrap";
import {CreateReviewModule} from "../components/modals/create-review.module";
import {DeleteReviewModule} from "../components/modals/delete-review.module";
import {DeleteRecipeComponent} from "../components/modals/delete-recipe.component";
import {DeleteRecipeModule} from "../components/modals/delete-recipe.module";

export function tokenGetter() {
    return localStorage.getItem('id_token');
}

const appRoutes: Routes = [{ path: '',
    redirectTo: '/home',
    pathMatch: 'full'
}];

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        RecipesModule,
        CreateRecipeModule,
        UpdateRecipeModule,
        DeleteRecipeModule,
        RatingModule.forRoot(),
        CreateReviewModule,
        UpdateRecipeModule,
        DeleteReviewModule,
        RouterModule.forRoot(appRoutes, { enableTracing: process.env.NODE_ENV === 'development' }),
        MainModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    static parameters = [ApplicationRef];
    constructor(private appRef: ApplicationRef) {
        this.appRef = appRef;
    }

    hmrOnInit(store) {
        if (!store || !store.state) return;
        console.log('HMR store', store);
        console.log('store.state.data:', store.state.data);
        // inject AppStore here and update it
        // this.AppStore.update(store.state)
        if ('restoreInputValues' in store) {
            store.restoreInputValues();
        }
        // change detection
        this.appRef.tick();
        Reflect.deleteProperty(store, 'state');
        Reflect.deleteProperty(store, 'restoreInputValues');
    }

    hmrOnDestroy(store) {
        var cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // inject your AppStore and grab state then set it on store
        // var appState = this.AppStore.get()
        store.state = {data: 'yolo'};
        // store.state = Object.assign({}, appState)
        // save input values
        store.restoreInputValues = createInputTransfer();
        // remove styles
        removeNgStyles();
    }

    hmrAfterDestroy(store) {
        // display new elements
        store.disposeOldHosts();
        Reflect.deleteProperty(store, 'disposeOldHosts');
        // anything you need done the component is removed
    }
}
