import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRunningWithErrorsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RunningWithErrorsFilled'

      short_name='RunningWithErrors'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-240q-17 0-28.5-11.5T800-280v-240q0-17 11.5-28.5T840-560q17 0 28.5 11.5T880-520v240q0 17-11.5 28.5T840-240Zm0 160q-17 0-28.5-11.5T800-120q0-17 11.5-28.5T840-160q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80Zm-360 0q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q75 0 147.5 28T754-770q12 12 12 28t-12 28L548-508q-19 19-43.5 8.5T480-537v-263q-134 0-227 93t-93 227q0 134 93 227t227 93q54 0 104-18.5t92-50.5q14-11 30-8t26 17q10 14 7.5 30.5T723-163q-54 40-115.5 61.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialRunningWithErrorsFilled.displayName = 'OnesyIconMaterialRunningWithErrorsFilled';

export default IconMaterialRunningWithErrorsFilled;
