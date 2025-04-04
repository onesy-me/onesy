import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIronFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IronFilled'

      short_name='Iron'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-720q17 0 28.5 11.5T880-680q0 17-11.5 28.5T840-640t-28.5 11.5Q800-617 800-600v160q0 50-35 85t-85 35v40q0 17-11.5 28.5T640-240H120q-17 0-28.5-11.5T80-280v-80q0-66 47-113t113-47h360v-40q0-17-11.5-28.5T560-600H400q-8 0-15.5 3.5T372-588q-5 5-12.5 8t-15.5 3q-17 0-28.5-11.5T304-617q0-8 3-15.5t8-12.5q17-17 38.5-26t46.5-9h160q50 0 85 35t35 85v160q17 0 28.5-11.5T720-440v-160q0-50 35-85t85-35Z"/>
    </Icon>
  );
});

IconMaterialIronFilled.displayName = 'OnesyIconMaterialIronFilled';

export default IconMaterialIronFilled;
