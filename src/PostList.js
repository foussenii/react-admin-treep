import { List, downloadCSV } from 'react-admin';
import { unparse as convertToCSV } from 'papaparse/papaparse.min';

const exporter = posts => {
    const postsForExport = posts.map(post => {
        const { postForExport, backlinks, author } = post;
        postForExport.author_name = post.author.name; 
        return postForExport;
    });

    const csv = convertToCSV({
        data: postsForExport,
        fields: ['id', 'title', 'author_name', 'body'] 
    });
    downloadCSV(csv, 'posts'); 
});

const PostList = props => (
    <List {...props} exporter={exporter}>
        ...
    </List>
)
