import React from 'react';
import { List, Edit, Datagrid, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, TabbedForm, FormTab, TextInput, NumberInput, RadioButtonGroupInput } from 'admin-on-rest';

export const DeputyList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField label="Name (Chi)" source="name.zh" />
            <TextField label="Name (Port)" source="name.en" />
            <TextField label="Slug" source="slug" />
            <TextField label="Elected Method" source="electedMethod" />
            <EditButton />
        </Datagrid>
    </List>
);

const FormTitle = ({record}) => {
    return <span>Deputy {record && record.name ? record.name.zh : ''}</span>;
}

export const DeputyEdit = (props) => (
    <Edit title={<FormTitle />} {...props}>
        <TabbedForm>
            <FormTab label="Basic Info">
                <DisabledInput label="ID" source="id" />

                <TextInput label="Chinese Name" source="name.zh" />
                <TextInput label="Eng/Port Name" source="name.en" />
                <TextInput label="Slug" source="slug" />
                <RadioButtonGroupInput label="Elected Method" source="electedMethod" choices={[
                    { id: 'direct', name: 'Direct' },
                    { id: 'indirect', name: 'Indirect' },
                    { id: 'appointed', name: 'Appointed' },
                ]} />

                <LongTextInput label="Qualifications (Chinese)" source="qualifications.zh" />
                <LongTextInput label="Qualifications (English)" source="qualifications.en" />
                <LongTextInput label="Job (Chinese)" source="job.zh" />
                <LongTextInput label="Job (English)" source="job.en" />
                <NumberInput label="Legco Member Since" source="memberSince" />
            </FormTab>

            <FormTab label="Contact Info">
                <TextInput label="Contact Address (Chinese)" source="contact.address.zh" />
                <TextInput label="Contact Address (English)" source="contact.address.en" />
                <TextInput label="Contact Email" source="contact.email" type="email" />
                <TextInput label="Website" source="contact.website" type="url" />
                <TextInput label="Phone" source="contact.phone" type="tel" />
            </FormTab>

            <FormTab label="Owned Properties">
                <NumberInput label="# of Owned Houses" source="property.residentialCount" />
                <NumberInput label="# of Owned Business Slots" source="property.businessCount" />
                <NumberInput label="# of Owned Parking Slots" source="property.parkingSlotCount" />
                <NumberInput label="# of Owned Land" source="property.landCount" />
                <NumberInput label="# of Owned Company" source="property.companyCount" />
                <NumberInput label="# of Owned NGO" source="property.ngoCount" />
                <ReferenceInput label="Declaration Document" source="property.declarationDocumentId" reference="documents" allowEmpty>
                    <SelectInput optionText="title.zh" />
                </ReferenceInput>
            </FormTab>
        </TabbedForm>
    </Edit>
);
