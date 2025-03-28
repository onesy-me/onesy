import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSnoozeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnoozeFilled'

      short_name='Snooze'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m468-394 107-120q1-1 5-14v-16q0-13-8.5-21.5T550-574H410q-13 0-21.5 8.5T380-544q0 13 8.5 21.5T410-514h84L385-392q-1 1-5 14v14q0 13 8.5 21.5T410-334h140q13 0 21.5-8.5T580-364q0-13-8.5-21.5T550-394h-82Zm12 314q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80ZM82-668q-11-11-11-28t11-28l114-114q11-11 28-11t28 11q11 11 11 28t-11 28L138-668q-11 11-28 11t-28-11Zm796 0q-11 11-28 11t-28-11L708-782q-11-11-11-28t11-28q11-11 28-11t28 11l114 114q11 11 11 28t-11 28Z"/>
    </Icon>
  );
});

IconMaterialSnoozeFilled.displayName = 'OnesyIconMaterialSnoozeFilled';

export default IconMaterialSnoozeFilled;
