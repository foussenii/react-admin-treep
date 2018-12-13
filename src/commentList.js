import React from 'react';
import { List, downloadCSV, CommentList} from 'react-admin';
import { unparse as convertToCSV } from 'papaparse/papaparse.min';

const exporter = (records, fetchRelatedRecords) => {
    fetchRelatedRecords(records, 'post_id', 'posts').then(posts => {
        const data = records.map(record => ({
                ...record,
                post_title: posts[record.post_id].title,
        }));
        const csv = convertToCSV({
            data,
            fields: ['id', 'post_id', 'post_title', 'body'],
        });
        downloadCSV(csv, 'comments');
    });
};

const CommentList = props => (
    <List {...props} exporter={exporter}>
    
    </List>
)