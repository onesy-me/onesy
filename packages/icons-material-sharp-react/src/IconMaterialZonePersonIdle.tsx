import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialZonePersonIdle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZonePersonIdle'

      short_name='ZonePersonIdle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M819-78 528-370l-16 78H352l40-204-72 28v136h-80v-188l96-41L27-870l57-57 792 792-57 57ZM80-132v-200h80v120h120v80H80Zm720-600v-120H680v-80h200v200h-80Zm-720 0v-120h80v120H80Zm600 600v-80h120v80H680ZM273-852l-80-80h87v80h-7Zm607 607-80-80v-7h80v87ZM540-632q-33 0-56.5-23.5T460-712q0-33 23.5-56.5T540-792q33 0 56.5 23.5T620-712q0 33-23.5 56.5T540-632Z"/>
    </Icon>
  );
});

IconMaterialZonePersonIdle.displayName = 'OnesyIconMaterialZonePersonIdle';

export default IconMaterialZonePersonIdle;
