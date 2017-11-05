import React from 'react';
import { List, Edit, Create, Datagrid, DateField, TextField, EditButton, DisabledInput, SimpleForm, TextInput, DateInput, ReferenceArrayInput, SelectArrayInput, ReferenceArrayField, SingleFieldList, ChipField } from 'admin-on-rest';

export const DocumentList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <ReferenceArrayField label="Tags" reference="tags" source="tagIds">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <DateField source="date" />
            <EditButton />
        </Datagrid>
    </List>
);

export const DocumentEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput label="ID" source="id" />
            <TextInput source="title" />
            <ReferenceArrayInput label="Tags" source="tagIds" reference="tags" allowEmpty>
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
            <TextInput label="Original URL" source="originalUrl" />
        </SimpleForm>
    </Edit>
);

export const DocumentCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <ReferenceArrayInput label="Tags" source="tagIds" reference="tags" allowEmpty>
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
            <DateInput source="date" />
            <TextInput label="Original URL" source="originalUrl" type="url" />
        </SimpleForm>
    </Create>
);
