import React from 'react';

import Account from '../components/Account';
import Amount from '../components/Amount';
import ListAmount from '../components/ListAmount';
import NewEntry from '../components/NewEntry';
import Topbar from '../components/Topbar';

export default function Management() {
  return (
    <div>
      <Topbar />
      <Account />
      <NewEntry />
      <Amount />
      <ListAmount />
    </div>
  );
}
