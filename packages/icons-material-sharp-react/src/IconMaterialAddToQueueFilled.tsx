import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddToQueueFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToQueueFilled'

      short_name='AddToQueue'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-360h80v-120h120v-80H520v-120h-80v120H320v80h120v120ZM320-120v-80H80v-640h800v640H640v80H320Z"/>
    </Icon>
  );
});

IconMaterialAddToQueueFilled.displayName = 'OnesyIconMaterialAddToQueueFilled';

export default IconMaterialAddToQueueFilled;
