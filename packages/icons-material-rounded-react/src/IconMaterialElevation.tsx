import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElevation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Elevation'

      short_name='Elevation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-120H160q-25 0-35.5-21.5T128-183l188-264q11-16 28-24.5t37-8.5h161l228-266q18-21 44-11.5t26 37.5v520q0 33-23.5 56.5T760-120ZM300-560 176-385q-10 14-26 16.5t-30-7.5q-14-10-16.5-26t7.5-30l125-174q11-16 28-25t37-9h161l162-189q11-13 27-14t29 10q13 11 14 27t-10 29L522-588q-11 14-27 21t-33 7H300Zm-62 360h522v-412L602-428q-11 14-27 21t-33 7H380L238-200Zm522 0Z"/>
    </Icon>
  );
});

IconMaterialElevation.displayName = 'OnesyIconMaterialElevation';

export default IconMaterialElevation;
