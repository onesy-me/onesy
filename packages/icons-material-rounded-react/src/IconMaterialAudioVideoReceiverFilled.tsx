import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAudioVideoReceiverFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AudioVideoReceiverFilled'

      short_name='AudioVideoReceiver'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200q-17 0-28.5-11.5T160-240v-40q-33 0-56.5-23.5T80-360v-320q0-33 23.5-56.5T160-760h640q33 0 56.5 23.5T880-680v320q0 33-23.5 56.5T800-280v40q0 17-11.5 28.5T760-200q-17 0-28.5-11.5T720-240v-40H240v40q0 17-11.5 28.5T200-200Zm460-240q33 0 56.5-23.5T740-520q0-33-23.5-56.5T660-600q-33 0-56.5 23.5T580-520q0 33 23.5 56.5T660-440Zm-380 0h200q17 0 28.5-11.5T520-480v-80q0-17-11.5-28.5T480-600H280q-17 0-28.5 11.5T240-560v80q0 17 11.5 28.5T280-440Z"/>
    </Icon>
  );
});

IconMaterialAudioVideoReceiverFilled.displayName = 'OnesyIconMaterialAudioVideoReceiverFilled';

export default IconMaterialAudioVideoReceiverFilled;
