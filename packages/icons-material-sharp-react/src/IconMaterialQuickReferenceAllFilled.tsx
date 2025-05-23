import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuickReferenceAllFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReferenceAllFilled'

      short_name='QuickReferenceAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-200q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM864-40 756-147q-21 13-45.5 20t-50.5 7q-75 0-127.5-52.5T480-300q0-75 52.5-127.5T660-480q75 0 127.5 52.5T840-300q0 27-7.5 51.5T812-203L920-96l-56 56ZM120-80v-800h400l240 240v100q-24-10-49-15t-51-5q-56 0-104.5 21T472-480H280v80h140q-8 19-12.5 39t-6.5 41H280v80h127q11 50 40 91.5T521-80H120Zm360-520h200L480-800l200 200-200-200v200Z"/>
    </Icon>
  );
});

IconMaterialQuickReferenceAllFilled.displayName = 'OnesyIconMaterialQuickReferenceAllFilled';

export default IconMaterialQuickReferenceAllFilled;
