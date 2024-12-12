import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKitchenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KitchenFilled'

      short_name='Kitchen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-640h80v-120h-80v120Zm0 360h80v-200h-80v200Zm160-200ZM160-80v-440h640v440H160Zm0-520v-280h640v280H160Z"/>
    </Icon>
  );
});

IconMaterialKitchenFilled.displayName = 'OnesyIconMaterialKitchenFilled';

export default IconMaterialKitchenFilled;
