import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAttachEmail = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachEmail'

      short_name='AttachEmail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-240q-33 0-56.5-23.5T40-320v-480q0-33 23.5-56.5T120-880h640q33 0 56.5 23.5T840-800v160q0 17-11.5 28.5T800-600q-17 0-28.5-11.5T760-640v-80L461-533q-5 3-10.5 4.5T440-527q-5 0-10.5-1.5T419-533L120-720v400h360q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240H120Zm320-360 320-200H120l320 200ZM120-720v10-59 1-32 32-1 59-10 400-400ZM760-80q-66 0-113-47t-47-113v-180q0-42 29-71t71-29q42 0 71 29t29 71v140q0 17-11.5 28.5T760-240q-17 0-28.5-11.5T720-280v-140q0-8-6-14t-14-6q-8 0-14 6t-6 14v180q0 33 23.5 56.5T760-160q33 0 56.5-23.5T840-240v-120q0-17 11.5-28.5T880-400q17 0 28.5 11.5T920-360v120q0 66-47 113T760-80Z"/>
    </Icon>
  );
});

IconMaterialAttachEmail.displayName = 'OnesyIconMaterialAttachEmail';

export default IconMaterialAttachEmail;
