import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialServerPerson = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ServerPerson'

      short_name='ServerPerson'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-800h640v800H600l-40-80H400l-40 80H160Zm80-80h70l40-80h260l40 80h70v-640H240v640Zm80-200h320v-22q0-52-50-75t-110-23q-60 0-110 23t-50 75v22Zm160-160q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520Zm0 40Z"/>
    </Icon>
  );
});

IconMaterialServerPerson.displayName = 'OnesyIconMaterialServerPerson';

export default IconMaterialServerPerson;
