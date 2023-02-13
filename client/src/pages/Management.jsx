import React from 'react';

import Amount from '../components/Amount';
import ListAmount from '../components/ListAmount';
import NewEntry from '../components/NewEntry';
import Topbar from '../components/Topbar';

export default function Management() {
  return (
    <div>
      <Topbar />
      <Amount />
      <NewEntry />
      <ListAmount />
    </div>
  );
}
