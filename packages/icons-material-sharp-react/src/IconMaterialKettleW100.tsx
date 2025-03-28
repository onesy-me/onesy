import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKettleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KettleW100'

      short_name='Kettle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-260v-443l-94-125h490v120h80q24.75 0 42.38 17.62Q828-672.75 828-648v200q0 24.75-17.62 42.37Q792.75-388 768-388h-80v128H292Zm28-28h340v-512H253l67 87v425Zm368-128h80q14 0 23-9t9-23v-200q0-14-9-23t-23-9h-80v264Zm-168 48h60v-352h-60v352ZM172-132v-28h616v28H172Zm285-412Z"/>
    </Icon>
  );
});

IconMaterialKettleW100.displayName = 'OnesyIconMaterialKettleW100';

export default IconMaterialKettleW100;
