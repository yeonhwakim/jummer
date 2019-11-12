import React from 'react';

import RlUl from '../elements/ul';
import RlLi from './rlLi';

export default ({ data }) => (
  <RlUl>
    {data.map((d) => (
      <RlLi key={d.name} room={d} />
    ))}
  </RlUl>
);
