import config from '@/config';
import { HomePage, DetailPage, GuestsPage, HostPage } from '@/pages';
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout';


export const publicRoutes = [
    {path: config.routes.HomePage, component: HomePage, layout:DefaultLayout },
    {path: config.routes.DetailPage, component: DetailPage},
    {path: config.routes.GuestsPage, component: GuestsPage},
    {path: config.routes.HostPage, component: HostPage}
];

export const privateRoutes = [
    
];