import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAspectRatioFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AspectRatioFilled'

      short_name='AspectRatio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-360h-80q-17 0-28.5 11.5T560-320q0 17 11.5 28.5T600-280h120q17 0 28.5-11.5T760-320v-120q0-17-11.5-28.5T720-480q-17 0-28.5 11.5T680-440v80ZM280-600h80q17 0 28.5-11.5T400-640q0-17-11.5-28.5T360-680H240q-17 0-28.5 11.5T200-640v120q0 17 11.5 28.5T240-480q17 0 28.5-11.5T280-520v-80ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z"/>
    </Icon>
  );
});

IconMaterialAspectRatioFilled.displayName = 'OnesyIconMaterialAspectRatioFilled';

export default IconMaterialAspectRatioFilled;
