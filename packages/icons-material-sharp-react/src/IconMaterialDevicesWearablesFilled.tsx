import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDevicesWearablesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesWearablesFilled'

      short_name='DevicesWearables'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700-240q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM80-80v-800h480v234q-23 12-43 27.5T480-584v-96H160v400h257q17 51 51 92t81 68v40H80Zm520 0v-104q-56-28-88-80.5T480-380q0-63 32-115.5t88-80.5v-104h200v104q56 28 88 80.5T920-380q0 63-32 115.5T800-184v104H600Z"/>
    </Icon>
  );
});

IconMaterialDevicesWearablesFilled.displayName = 'OnesyIconMaterialDevicesWearablesFilled';

export default IconMaterialDevicesWearablesFilled;
