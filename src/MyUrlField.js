import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';



const styles = {
    link: {
        textDecoration: 'none',
    },
    icon: {
        width: '0.5em',
        paddingLeft: 2,
    },
};

const MyUrlField = ({ record = {}, source, classes }) =>
    <a href={record[source]} classeName={ classes.link }>
        {record[source]}
        <LaunchIcon classeName={classes.link}/>
    </a>;

export default withStyles(styles)(MyUrlField);