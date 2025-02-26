import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBoyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoyW100'

      short_name='Boy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.8-660q-20.8 0-35.3-14.7-14.5-14.7-14.5-35.5t14.7-35.3q14.7-14.5 35.5-14.5t35.3 14.7q14.5 14.7 14.5 35.5t-14.7 35.3Q500.6-660 479.8-660ZM434-214v-180h-40v-176q0-18.97 13.51-32.49Q421.02-616 440-616h80q18.97 0 32.49 13.51Q566-588.97 566-570v176h-40v180h-92Z"/>
    </Icon>
  );
});

IconMaterialBoyW100.displayName = 'OnesyIconMaterialBoyW100';

export default IconMaterialBoyW100;
