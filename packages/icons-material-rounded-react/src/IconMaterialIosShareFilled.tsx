import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIosShareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IosShareFilled'

      short_name='IosShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-40q-33 0-56.5-23.5T160-120v-440q0-33 23.5-56.5T240-640h80q17 0 28.5 11.5T360-600q0 17-11.5 28.5T320-560h-80v440h480v-440h-80q-17 0-28.5-11.5T600-600q0-17 11.5-28.5T640-640h80q33 0 56.5 23.5T800-560v440q0 33-23.5 56.5T720-40H240Zm200-727-36 36q-12 12-28 11.5T348-732q-11-12-11.5-28t11.5-28l104-104q12-12 28-12t28 12l104 104q11 11 11 27.5T612-732q-12 12-28.5 12T555-732l-35-35v407q0 17-11.5 28.5T480-320q-17 0-28.5-11.5T440-360v-407Z"/>
    </Icon>
  );
});

IconMaterialIosShareFilled.displayName = 'OnesyIconMaterialIosShareFilled';

export default IconMaterialIosShareFilled;
