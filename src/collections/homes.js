import React from 'react';
import { BooleanField, BooleanInput, Create, Datagrid, Edit, EditButton, List, ReferenceField, ReferenceInput, SelectInput, SimpleForm, TextField, TextInput } from 'admin-on-rest';

export const HomeList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField label="Featured Bill" source="featuredBillId" reference="bills">
                <TextField source="title.zh" />
            </ReferenceField>
            <ReferenceField label="Featured Deputy" source="featuredDeputyId" reference="deputies">
                <TextField source="name.zh" />
            </ReferenceField>
            <BooleanField label="Active?" source="active" />
            <EditButton />
        </Datagrid>
    </List>
);

export const HomeEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput label="Featured Bill" source="featuredBillId" reference="bills" perPage={1000} allowEmpty>
                <SelectInput optionText="title.zh" />
            </ReferenceInput>
            <ReferenceInput label="Featured Deputy" source="featuredDeputyId" reference="deputies" perPage={1000} allowEmpty>
                <SelectInput optionText="name.zh" />
            </ReferenceInput>
            <TextInput label="Featured Deputy Speech (Chinese)" source="featuredDeputySpeech.zh" />
            <TextInput label="Featured Deputy Speech (English)" source="featuredDeputySpeech.en" />
            <BooleanInput label="Active?" source="active" />
        </SimpleForm>
    </Edit>
);

export const HomeCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Featured Bill" source="featuredBillId" reference="bills" perPage={1000} allowEmpty>
                <SelectInput optionText="title.zh" />
            </ReferenceInput>
            <ReferenceInput label="Featured Deputy" source="featuredDeputyId" reference="deputies" perPage={1000} allowEmpty>
                <SelectInput optionText="name.zh" />
            </ReferenceInput>
            <TextInput label="Featured Deputy Speech (Chinese)" source="featuredDeputySpeech.zh" />
            <TextInput label="Featured Deputy Speech (English)" source="featuredDeputySpeech.en" />
            <BooleanInput label="Active?" source="active" />
        </SimpleForm>
    </Create>
);
