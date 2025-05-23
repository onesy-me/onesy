import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNextWeek = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NextWeek'

      short_name='NextWeek'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 20h16V9H4v11zm6-8.5l1-1 4 4-4 4-1-1 3-3-3-3z" opacity=".3"/><path d="M11 18.5l4-4-4-4-1 1 3 3-3 3zM20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm10 15H4V9h16v11z"/>
    </Icon>
  );
});

IconMaterialNextWeek.displayName = 'OnesyIconMaterialNextWeek';

export default IconMaterialNextWeek;
