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
      <path d="M440-480v80q0 17 11.5 28.5T480-360q17 0 28.5-11.5T520-400v-80h80q17 0 28.5-11.5T640-520q0-17-11.5-28.5T600-560h-80v-80q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v80h-80q-17 0-28.5 11.5T320-520q0 17 11.5 28.5T360-480h80ZM160-200q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v40q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160v-40H160Z"/>
    </Icon>
  );
});

IconMaterialAddToQueueFilled.displayName = 'OnesyIconMaterialAddToQueueFilled';

export default IconMaterialAddToQueueFilled;
