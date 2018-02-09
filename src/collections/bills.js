import React from 'react';
import { List, Edit, Create, Datagrid, DateField, TextField, EditButton, BooleanInput, DisabledInput, SimpleForm, TextInput, DateInput, ReferenceArrayInput, SelectArrayInput, LongTextInput, ReferenceInput, SelectInput, TabbedForm, FormTab, ReferenceField, RadioButtonGroupInput } from 'admin-on-rest';
import { EmbeddedArrayInput } from 'aor-embedded-array';

export const BillList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField label="Title (Chinese)" source="title.zh" />
            <TextField label="Slug" source="slug" />
            <ReferenceField label="Proposer" source="proposerDeputyId" reference="deputies">
                <TextField source="name.zh" />
            </ReferenceField>
            <TextField source="result" />
            <DateField source="date" />
            <EditButton />
        </Datagrid>
    </List>
);

const FormTitle = ({record}) => {
    return <span>Bill "{record ? record.title.zh : ''}"</span>;
}

export const BillEdit = (props) => (
    <Edit title={<FormTitle />} {...props}>
        <TabbedForm>
            <FormTab label="Basic Info">
                <DisabledInput label="ID" source="id" />
                <TextInput label="Title (Chinese)" source="title.zh" />
                <TextInput label="Title (English)" source="title.en" />
                <TextInput label="Slug" source="slug" />
                
                <BooleanInput label="Propsed by Government?" source="proposedByGovernment" />
                <ReferenceInput label="Proposer (Ignored if Proposed by Goverment)" source="proposerDeputyId" reference="deputies" perPage={1000} allowEmpty>
                    <SelectInput optionText="name.zh" />
                </ReferenceInput>

                <LongTextInput label="Synopsis (Chinese)" source="synopsis.zh" />
                <LongTextInput label="Synopsis (English)" source="synopsis.en" />

                <ReferenceArrayInput label="Documents" source="documentIds" reference="documents" perPage={1000} allowEmpty>
                    <SelectArrayInput optionText="title.zh" />
                </ReferenceArrayInput>

                <RadioButtonGroupInput label="Result" source="result" choices={[
                    { id: 'Y', name: 'Approved' },
                    { id: 'N', name: 'Not Approved' },
                    { id: 'P', name: 'Pending' },
                    { id: 'W', name: 'Withdrawn' },
                ]} />

                <ReferenceArrayInput label="Tags" source="tagIds" reference="tags" perPage={1000} allowEmpty>
                    <SelectArrayInput optionText="name.zh" />
                </ReferenceArrayInput>

                <DateInput source="date" />
            </FormTab>

            <FormTab label="Deputy Votes">
                <EmbeddedArrayInput label="" source="deputyVotes">
                    <ReferenceInput label="Deputy" source="deputyId" reference="deputies" perPage={1000} allowEmpty>
                        <SelectInput optionText="name.zh" />
                    </ReferenceInput>
                    <RadioButtonGroupInput label="Vote" source="vote" options={{className: 'bill__voting-result__item__vote'}} choices={[
                        { id: 'Y', name: 'Yes' },
                        { id: 'N', name: 'No' },
                        { id: 'P', name: 'Abstain' },
                        { id: 'A', name: 'Absent' },
                    ]} />
                    <LongTextInput label="Comment (Chinese, Optional)" source="comment.zh" />
                    <LongTextInput label="Comment (English, Optional)" source="comment.en" />
                </EmbeddedArrayInput>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export const BillCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Title (Chinese)" source="title.zh" />
            <TextInput label="Title (English)" source="title.en" />
            <ReferenceArrayInput label="Tags" source="tagIds" reference="tags" perPage={1000} allowEmpty>
                <SelectArrayInput optionText="name.zh" />
            </ReferenceArrayInput>
            <DateInput source="date" />
        </SimpleForm>
    </Create>
);
