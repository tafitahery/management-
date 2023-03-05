import React, { useState } from 'react';

import Account from '../components/Account';
import Amount from '../components/Amount';
import ListAmount from '../components/ListAmount';
import ModifyEntry from '../components/ModifyEntry';
import NewEntry from '../components/NewEntry';
import Topbar from '../components/Topbar';

export default function Management() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Topbar />
      <Account />
      <NewEntry />
      <Amount />
      <ListAmount setShow={setShow} />
      <ModifyEntry show={show} setShow={setShow} />
    </div>
  );
}
