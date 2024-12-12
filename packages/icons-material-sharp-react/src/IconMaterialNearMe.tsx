import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNearMe = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMe'

      short_name='NearMe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M516-120 402-402 120-516v-56l720-268-268 720h-56Zm26-148 162-436-436 162 196 78 78 196Zm-78-196Z"/>
    </Icon>
  );
});

IconMaterialNearMe.displayName = 'OnesyIconMaterialNearMe';

export default IconMaterialNearMe;
