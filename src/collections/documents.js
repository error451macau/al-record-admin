import React from 'react';
import { List, Edit, Create, Datagrid, DateField, TextField, EditButton, DisabledInput, SimpleForm, TextInput, DateInput, ReferenceArrayInput, SelectArrayInput, FileInput, ReferenceArrayField, SingleFieldList, ChipField, FileField } from 'admin-on-rest';

export const DocumentList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField label="Title (Chinese)" source="title.zh" />
            <TextField label="Slug" source="slug" />
            <ReferenceArrayField label="Tags" reference="tags" source="tagIds">
                <SingleFieldList>
                    <ChipField source="name.zh" />
                </SingleFieldList>
            </ReferenceArrayField>
            <DateField source="date" />
            <EditButton />
        </Datagrid>
    </List>
);

const FormTitle = ({record}) => {
    return <span>Document "{record && record.title ? record.title.zh : ''}"</span>;
}

export const DocumentEdit = (props) => (
    <Edit title={<FormTitle />} {...props}>
        <SimpleForm>
            <DisabledInput label="ID" source="id" />
            <TextInput label="Title (Chinese)" source="title.zh" />
            <TextInput label="Title (English)" source="title.en" />
            <TextInput label="Slug" source="slug" />
            <ReferenceArrayInput label="Tags" source="tagIds" reference="tags" allowEmpty>
                <SelectArrayInput optionText="name.zh" />
            </ReferenceArrayInput>
            <DateInput source="date" />
            <TextInput label="Original URL" source="originalUrl" />
            <FileInput label="File" source="files">
                <FileField source="src" title="title" />
            </FileInput>
        </SimpleForm>
    </Edit>
);

export const DocumentCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Title (Chinese)" source="title.zh" />
            <TextInput label="Title (English)" source="title.en" />
            <TextInput label="Slug" source="slug" />
            <ReferenceArrayInput label="Tags" source="tagIds" reference="tags" allowEmpty>
                <SelectArrayInput optionText="name.zh" />
            </ReferenceArrayInput>
            <DateInput source="date" />
            <TextInput label="Original URL" source="originalUrl" type="url" />
            <FileInput label="File" source="files">
                <FileField source="src" title="title" />
            </FileInput>
        </SimpleForm>
    </Create>
);
