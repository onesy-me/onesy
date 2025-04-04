import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPottedPlant = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PottedPlant'

      short_name='PottedPlant'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M342-160h276l40-160H302l40 160Zm0 80q-28 0-49-17t-28-44l-45-179h520l-45 179q-7 27-28 44t-49 17H342ZM200-400h560v-80H200v80Zm280-240q0-90 61-156t152-80q5-1 9 1t8 5q4 3 5.5 7.5t.5 9.5q-11 79-64.5 137.5T520-644v84h280q17 0 28.5 11.5T840-520v120q0 33-23.5 56.5T760-320H200q-33 0-56.5-23.5T120-400v-120q0-17 11.5-28.5T160-560h280v-84q-78-13-131.5-71.5T244-853q-1-5 .5-9.5t5.5-7.5q4-3 8-5t9-1q91 14 152 80t61 156Z"/>
    </Icon>
  );
});

IconMaterialPottedPlant.displayName = 'OnesyIconMaterialPottedPlant';

export default IconMaterialPottedPlant;
