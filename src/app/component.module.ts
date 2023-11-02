import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { ShopBanner } from './screens/homepage/components/shopBanner';
import { Header } from './screens/homepage/sections/header';
import { NavBar } from './screens/homepage/components/navbar';
import { Hero } from './screens/homepage/components/hero';
import { Quote } from './screens/homepage/sections/quote';
import { TryNow } from './screens/homepage/sections/tryNow';
import { Categories } from './screens/homepage/sections/categories';
import { Factories } from './screens/homepage/sections/factories';
import { SolarNeeds } from './screens/homepage/sections/solarNeeds';
import { Trading } from './screens/homepage/sections/trading';
import { Testimonial } from './screens/homepage/sections/testimonial';
import { NewLetter } from './screens/homepage/sections/newsLetter';
import { States } from './screens/homepage/sections/states';
import { Footer } from './screens/homepage/sections/footer';

@NgModule({
  declarations: [
    Header,
    ShopBanner,
    NavBar,
    Hero,
    Quote,
    TryNow,
    Categories,
    Factories,
    SolarNeeds,
    Trading,
    Testimonial,
    NewLetter,
    States,
    Footer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
})
export class ComponentModule { }
