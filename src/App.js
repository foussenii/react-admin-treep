import React from 'react';
import { Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from './Dashboard';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => ( < Admin Dashboard={Dashboard} dataProvider = { dataProvider } >

 <Resource name="dashboard" list={Dashboard} icon={HomeIcon}/>
  <Resource name="users" list={UserList} icon={UserIcon} />
  <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    </Admin>
);
export default App;