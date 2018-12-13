import React from 'react';
import { Admin, Resource,fetchUtils} from 'react-admin';
// import { createMuiTheme } from '@material-ui/core/styles';
import simpleRestProvider from 'ra-data-simple-rest';
// import dataProvider from "./dataProvider";
import Dashboard from './Dashboard';
import NotFound from './NotFound';
// import MyLoginPage from './MyLoginPage';
// import MyLogoutButton from './MyLogoutButton';
// import jsonServerProvider from 'ra-data-json-server';
import authProvider from "./authProvider";
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import customRoutes from './customRoutes';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import AssessmentIcon from '@material-ui/icons/Assessment';
import TimelineIcon from '@material-ui/icons/Timeline';

// const theme = createMuiTheme({
//   palette: {
//     type: 'dark',
//   },
// });

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
}
const dataProvider = simpleRestProvider('http://localhost:3000', httpClient);


const App = () => ( < Admin customRoutes={customRoutes} Dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider} NotFound={NotFound}>

 <Resource name="dashboard" list={Dashboard} icon={HomeIcon}/>
  <Resource name="users" list={UserList} icon={UserIcon} />
  <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
  <Resource name="transaction" list={PostList} edit={PostEdit} create={PostCreate} icon={AssessmentIcon} />
  <Resource name="bilan" list={PostList} edit={PostEdit} create={PostCreate} icon={TimelineIcon} />
    </Admin>
);
export default App;