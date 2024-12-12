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
      <path d="M360-640q17 0 28.5-11.5T400-680v-40q0-17-11.5-28.5T360-760q-17 0-28.5 11.5T320-720v40q0 17 11.5 28.5T360-640Zm0 360q17 0 28.5-11.5T400-320v-120q0-17-11.5-28.5T360-480q-17 0-28.5 11.5T320-440v120q0 17 11.5 28.5T360-280ZM240-80q-33 0-56.5-23.5T160-160v-360h640v360q0 33-23.5 56.5T720-80H240Zm-80-520v-200q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v200H160Z"/>
    </Icon>
  );
});

IconMaterialKitchenFilled.displayName = 'OnesyIconMaterialKitchenFilled';

export default IconMaterialKitchenFilled;
