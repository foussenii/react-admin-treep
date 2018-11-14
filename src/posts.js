import React from 'react';
import {Edit,List,Create,Filter,SimpleForm,SelectInput,ReferenceInput,LongTextInput,TextInput,Datagrid,TextField,EditButton,ReferenceField,DisabledInput} from 'react-admin';

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

    export const PostList = props => (
        <List {...props} filters={<PostFilter />}>
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



