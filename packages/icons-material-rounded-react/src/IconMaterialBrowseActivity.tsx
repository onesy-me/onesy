import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrowseActivity = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseActivity'

      short_name='BrowseActivity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-600v-160q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v160h-80v-160H160v160H80Zm80 360q-33 0-56.5-23.5T80-320v-200h80v200h640v-200h80v200q0 33-23.5 56.5T800-240H160ZM80-120q-17 0-28.5-11.5T40-160q0-17 11.5-28.5T80-200h800q17 0 28.5 11.5T920-160q0 17-11.5 28.5T880-120H80Zm400-420ZM80-520v-80h240q11 0 21 6t15 16l47 93 123-215q5-9 14-14.5t20-5.5q11 0 21 5.5t15 16.5l49 98h235v80H620q-11 0-21-5.5T584-542l-26-53-123 215q-5 10-15 15t-21 5q-11 0-20.5-6T364-382l-69-138H80Z"/>
    </Icon>
  );
});

IconMaterialBrowseActivity.displayName = 'OnesyIconMaterialBrowseActivity';

export default IconMaterialBrowseActivity;
