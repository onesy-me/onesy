import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKettleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KettleW100Filled'

      short_name='Kettle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-260v-443l-94-125h490v120h80q24.75 0 42.38 17.62Q828-672.75 828-648v200q0 24.75-17.62 42.37Q792.75-388 768-388h-80v128H292Zm396-156h80q14 0 23-9t9-23v-200q0-14-9-23t-23-9h-80v264Zm-168 48h60v-352h-60v352ZM172-132v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialKettleW100Filled.displayName = 'OnesyIconMaterialKettleW100Filled';

export default IconMaterialKettleW100Filled;
