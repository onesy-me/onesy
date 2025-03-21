import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRemoveModerator = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveModerator'

      short_name='RemoveModerator'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-705v189q0 35-5.5 69.5T778-378q-7 21-22 27.5t-29 1.5q-14-5-23.5-17.5T700-397q10-28 15-58.5t5-60.5v-189l-240-90-122 46q-11 4-22.5 1.5T316-758q-16-16-11-37t25-29l122-45q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45ZM480-84q-4 0-25-4-135-45-215-166.5T160-516v-172l-76-76q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11L662-186q-33 35-72.5 59T505-88q-6 2-12 3t-13 1Zm-57-341Zm91-135Zm-34 396q35-11 67-31t59-47L240-608v92q0 121 68 220t172 132Z"/>
    </Icon>
  );
});

IconMaterialRemoveModerator.displayName = 'OnesyIconMaterialRemoveModerator';

export default IconMaterialRemoveModerator;
