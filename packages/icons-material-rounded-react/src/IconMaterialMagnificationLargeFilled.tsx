import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMagnificationLargeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnificationLargeFilled'

      short_name='MagnificationLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-360h400q17 0 28.5-11.5T680-400v-240q0-17-11.5-28.5T640-680H240q-17 0-28.5 11.5T200-640v240q0 17 11.5 28.5T240-360Zm-80 200q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z"/>
    </Icon>
  );
});

IconMaterialMagnificationLargeFilled.displayName = 'OnesyIconMaterialMagnificationLargeFilled';

export default IconMaterialMagnificationLargeFilled;
