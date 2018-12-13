import React from 'react';
import Button from '@material-ui/core/Button';

import {Edit,List,Create,Filter,SimpleForm,SelectInput,ReferenceInput,LongTextInput,TextInput,Datagrid,TextField,EditButton,ReferenceField,DisabledInput,CardActions, CreateButton, ExportButton, RefreshButton} from 'react-admin';


const PostTitle = ({ record }) => {
       return <span>Post {record ? `"${record.title}"` : ''}</span>;
    };

 
    const PostFilter = (props) => (
        <Filter {...props}>
            <TextInput label="Search" source="q" alwaysOn />
            <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </Filter>
    );

    const PostActions = ({
        bulkActions,
        basePath,
        currentSort,
        displayedFilters,
        exporter,
        filters,
        filterValues,
        onUnselectItems,
        resource,
        selectedIds,
        showFilter
    }) => (
        <CardActions>
            {bulkActions && React.cloneElement(bulkActions, {
                basePath,
                filterValues,
                resource,
                selectedIds,
                onUnselectItems,
            })}
            {filters && React.cloneElement(filters, {
                resource,
                showFilter,
                displayedFilters,
                filterValues,
                context: 'button',
            }) }
            <CreateButton basePath={basePath} />
            <ExportButton
                resource={resource}
                sort={currentSort}
                filter={filterValues}
                exporter={exporter}
            />
            <RefreshButton />
            
            <Button primary onClick={exporter}>Test</Button>
            <ExportButton primary onClick={exporter}>Test</ExportButton>
        </CardActions>
    );
    
    export const PostList = ({permissions, ...props}) => (
        <List {...props} actions={<PostActions permissions={permissions}/>} title="Liste des agences" filters={<PostFilter />}>
           <Datagrid>
              <TextField source="id" />
                <ReferenceField source="userId" reference="users">
                    <TextField source="name" />
                </ReferenceField>
                <TextField source="title" />
               <EditButton />
            </Datagrid>
        </List>
    );

export const PostCreate = props => (
    <Create {...props}>
    <SimpleForm>
        <ReferenceInput source="userId" reference="users">
            <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="title" />
        <LongTextInput source="body" />
    </SimpleForm>
</Create>
);


export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
           <DisabledInput source="id" />
            <ReferenceInput source="userId" reference="users">
               <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
           <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);



