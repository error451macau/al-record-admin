import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, FileField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, FileInput, DateInput } from 'admin-on-rest';

export const TagList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EditButton />
        </Datagrid>
    </List>
);

export const TagEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput label="ID" source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export const TagCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);

