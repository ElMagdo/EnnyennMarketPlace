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
import { SideNav } from './screens/owner/sections/sideNav';
import { Side } from './screens/owner/sections/side';
import { Main } from './screens/owner/sections/main';
import { AmountBadge } from './screens/owner/components/amountBadge';
import { CardItem } from './screens/owner/components/cardItem';
import { ListItem } from './screens/owner/components/listItem';
import { HomePage } from './screens/homepage/homePage';

@NgModule({
  declarations: [
    HomePage,
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
    Footer,
    SideNav,
    Side,
    Main,
    AmountBadge,
    CardItem,
    ListItem,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
})
export class ComponentModule { }
