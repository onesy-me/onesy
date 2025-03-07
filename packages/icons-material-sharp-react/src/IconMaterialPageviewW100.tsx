import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPageviewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageviewW100'

      short_name='Pageview'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M628-212H132v-536h696v536h-86L548-406q-18 17-40 25.5t-48 8.5q-53 0-90.5-37.5T332-500q0-53 37.5-90.5T460-628q53 0 90.5 37.5T588-500q0 20-4 36t-18 36l188 188h46v-480H160v480h440l28 28ZM460-400q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM160-240v-480 480Z"/>
    </Icon>
  );
});

IconMaterialPageviewW100.displayName = 'OnesyIconMaterialPageviewW100';

export default IconMaterialPageviewW100;
