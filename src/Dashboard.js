import  React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { Title } from 'react-admin';

export default () => (
    <Card>
        <Title title="Bienvenue chez the treep" />
<CardHeader title =" bienvenue dans l'administration"/>
<CardContent>c'est ici que tout commence </CardContent>
    </Card>
);