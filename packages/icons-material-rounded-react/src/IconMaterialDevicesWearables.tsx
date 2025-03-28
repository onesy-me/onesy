import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDevicesWearables = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesWearables'

      short_name='DevicesWearables'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-760h320v-40H160v40Zm0 680q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h320q33 0 56.5 23.5T560-800v145q0 17-11.5 28.5T520-615q-17 0-28.5-11.5T480-655v-25H160v400h233q17 0 28.5 11.5T433-240q0 16-11.5 28T393-200H160v40h349q17 0 28.5 11.5T549-120q0 17-11.5 28.5T509-80H160Zm540-160q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM640-80q-17 0-28.5-11.5T600-120v-64q-54-27-87-79t-33-117q0-65 33-117t87-79v-64q0-17 11.5-28.5T640-680h120q17 0 28.5 11.5T800-640v64q54 27 87 79t33 117q0 65-33 117t-87 79v64q0 17-11.5 28.5T760-80H640ZM160-200v40-40Zm0-560v-40 40Z"/>
    </Icon>
  );
});

IconMaterialDevicesWearables.displayName = 'OnesyIconMaterialDevicesWearables';

export default IconMaterialDevicesWearables;
