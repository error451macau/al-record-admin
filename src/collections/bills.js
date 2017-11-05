import React from 'react';
import { List, Edit, Create, Datagrid, DateField, TextField, EditButton, DisabledInput, SimpleForm, TextInput, DateInput, ReferenceArrayInput, SelectArrayInput, ReferenceArrayField, SingleFieldList, ChipField, LongTextInput, ReferenceInput, SelectInput, TabbedForm, FormTab, ReferenceField, RadioButtonGroupInput } from 'admin-on-rest';
import { EmbeddedArrayInput } from 'aor-embedded-array';

export const BillList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <ReferenceField label="Proposer" source="proposerDeputyId" reference="deputies">
                <TextField source="nameChi" />
            </ReferenceField>
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

const FormTitle = ({record}) => {
    return <span>Bill "{record ? record.title : ''}"</span>;
}

export const BillEdit = (props) => (
    <Edit title={<FormTitle />} {...props}>
        <TabbedForm>
            <FormTab label="Basic Info">
                <DisabledInput label="ID" source="id" />
                <TextInput source="title" />
                
                <ReferenceInput label="Proposer" source="proposerId" reference="deputies" allowEmpty>
                    <SelectInput optionText="nameChi" />
                </ReferenceInput>

                <LongTextInput source="synopsis" />

                <ReferenceInput label="Statement (Document)" source="statementDocumentId" reference="documents" allowEmpty>
                    <SelectInput optionText="title" />
                </ReferenceInput>

                <ReferenceInput label="Full Text (Document)" source="fullTextDocumentId" reference="documents" allowEmpty>
                    <SelectInput optionText="title" />
                </ReferenceInput>

                <ReferenceArrayInput label="Tags" source="tagIds" reference="tags" allowEmpty>
                    <SelectArrayInput optionText="name" />
                </ReferenceArrayInput>

                <DateInput source="date" />
            </FormTab>

            <FormTab label="Voting Result">
                <EmbeddedArrayInput label="" source="votingResult">
                    <ReferenceInput label="Deputy" source="deputyId" reference="deputies" allowEmpty>
                        <SelectInput optionText="nameChi" />
                    </ReferenceInput>
                    <RadioButtonGroupInput label="Vote" source="vote" options={{className: 'bill__voting-result__item__vote'}} choices={[
                        { id: 'Y', name: 'Yes' },
                        { id: 'N', name: 'No' },
                        { id: 'P', name: 'Abstain' },
                        { id: 'A', name: 'Absent' },
                    ]} />
                    <LongTextInput label="Comment (Optional)" source="comment" />
                </EmbeddedArrayInput>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export const BillCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <ReferenceArrayInput label="Tags" source="tagIds" reference="tags" allowEmpty>
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
            <DateInput source="date" />
        </SimpleForm>
    </Create>
);
