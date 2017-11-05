import React from 'react';
import { jsonServerRestClient, fetchUtils, Admin, Resource, Delete } from 'admin-on-rest';

import { DeputyList, DeputyEdit } from './collections/deputies';
import { BillList, BillEdit, BillCreate } from './collections/bills';
import { DocumentList, DocumentEdit, DocumentCreate } from './collections/documents';
import { TagList, TagEdit, TagCreate } from './collections/tags';

import DeputyIcon from 'material-ui/svg-icons/action/supervisor-account';
import BillIcon from 'material-ui/svg-icons/action/check-circle';
import DocumentIcon from 'material-ui/svg-icons/editor/insert-drive-file';
import TagIcon from 'material-ui/svg-icons/action/label';

import authClient from './authClient';

const httpClient = (url, options = {}) => {
    options.credentials = 'include'; // attach credential/cookie to fetch requests
    return fetchUtils.fetchJson(url, options);
}


const App = () => (
  <Admin restClient={jsonServerRestClient('http://127.0.0.1/api', httpClient)} authClient={authClient} title="ERROR 451 Legco Monitor Admin">
    <Resource name="deputies" icon={DeputyIcon} list={DeputyList} edit={DeputyEdit} />
    <Resource name="bills" icon={BillIcon} list={BillList} edit={BillEdit} create={BillCreate} remove={Delete} />
    <Resource name="documents" icon={DocumentIcon} list={DocumentList} edit={DocumentEdit} create={DocumentCreate} remove={Delete} />
    <Resource name="tags" icon={TagIcon} list={TagList} edit={TagEdit} create={TagCreate} remove={Delete} />
  </Admin>
);

export default App;
