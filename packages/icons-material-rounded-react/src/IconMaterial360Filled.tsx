import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial360Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='360Filled'

      short_name='360'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M374-288q-128-17-211-70T80-480q0-83 115.5-141.5T480-680q169 0 284.5 58.5T880-480q0 56-54.5 101.5T681-307q-16 5-28.5-4.5T640-337q0-18 10.5-32t27.5-20q60-20 91-45.5t31-45.5q0-32-85.5-76T480-600q-149 0-234.5 44T160-480q0 24 51 57.5T356-372l-24-24q-11-11-11-28t11-28q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L388-188q-11 11-27.5 11.5T332-188q-11-11-11.5-27.5T331-244l43-44Z"/>
    </Icon>
  );
});

IconMaterial360Filled.displayName = 'OnesyIconMaterial360Filled';

export default IconMaterial360Filled;
