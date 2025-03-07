import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEnergySavingsLeafFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnergySavingsLeafFilled'

      short_name='EnergySavingsLeaf'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m422-298 195-173-11-32-144-14 93-130-16-17-195 174 11 32 144 14-94 129 17 17Zm58 138q-56 0-105.5-17.5T284-227l-84 84-57-57 84-84q-32-41-49.5-90.5T160-480q0-134 93-227t227-93h320v320q0 134-93 227t-227 93Z"/>
    </Icon>
  );
});

IconMaterialEnergySavingsLeafFilled.displayName = 'OnesyIconMaterialEnergySavingsLeafFilled';

export default IconMaterialEnergySavingsLeafFilled;
