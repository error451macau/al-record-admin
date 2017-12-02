import React from 'react';
import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput} from 'admin-on-rest';

export const TagList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField label="ID"  source="id" />
            <TextField label="Name (Chinese)" source="name.zh" />
            <TextField label="Name (English)" source="name.en" />
            <TextField label="Slug" source="slug" />
            <EditButton />
        </Datagrid>
    </List>
);

const FormTitle = ({record}) => {
    return <span>Tag "{record && record.name ? record.name.zh : ''}"</span>;
}

export const TagEdit = (props) => (
    <Edit title={<FormTitle />} {...props}>
        <SimpleForm>
            <DisabledInput label="ID" source="id" />
            <TextInput label="Name (Chinese)" source="name.zh" />
            <TextInput label="Name (English)" source="name.en" />
            <TextInput label="Slug" source="slug" />
        </SimpleForm>
    </Edit>
);

export const TagCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Name (Chinese)" source="name.zh" />
            <TextInput label="Name (English)" source="name.en" />
            <TextInput label="Slug" source="slug" />
        </SimpleForm>
    </Create>
);

