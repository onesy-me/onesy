import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrowseActivityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseActivityFilled'

      short_name='BrowseActivity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120q-17 0-28.5-11.5T40-160q0-17 11.5-28.5T80-200h800q17 0 28.5 11.5T920-160q0 17-11.5 28.5T880-120H80Zm80-120q-33 0-56.5-23.5T80-320v-200h215l69 138q5 10 14.5 16t20.5 6q11 0 21-5t15-15l123-215 26 53q5 11 15 16.5t21 5.5h260v200q0 33-23.5 56.5T800-240H160Zm243-245-47-93q-5-10-15-16t-21-6H80v-160q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v160H645l-49-98q-5-11-15-16.5t-21-5.5q-11 0-20 5.5T526-700L403-485Z"/>
    </Icon>
  );
});

IconMaterialBrowseActivityFilled.displayName = 'OnesyIconMaterialBrowseActivityFilled';

export default IconMaterialBrowseActivityFilled;
