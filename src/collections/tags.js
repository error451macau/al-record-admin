import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, FileField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, FileInput, DateInput } from 'admin-on-rest';

export const TagList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField label="ID"  source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Slug" source="slug" />
            <EditButton />
        </Datagrid>
    </List>
);

const FormTitle = ({record}) => {
    return <span>Tag "{record ? record.name : ''}"</span>;
}

export const TagEdit = (props) => (
    <Edit title={<FormTitle />} {...props}>
        <SimpleForm>
            <DisabledInput label="ID" source="id" />
            <TextInput label="Name" source="name" />
            <TextInput label="Slug" source="slug" />
        </SimpleForm>
    </Edit>
);

export const TagCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Name" source="name" />
            <TextInput label="Slug" source="slug" />
        </SimpleForm>
    </Create>
);

