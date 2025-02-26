import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutputCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutputCircleFilled'

      short_name='OutputCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80 280-280l56-56 104 103v-407h80v407l104-103 56 56L480-80ZM146-260q-32-49-49-105T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 59-17 115t-49 105l-58-58q22-37 33-78t11-84q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 43 11 84t33 78l-58 58Z"/>
    </Icon>
  );
});

IconMaterialOutputCircleFilled.displayName = 'OnesyIconMaterialOutputCircleFilled';

export default IconMaterialOutputCircleFilled;
