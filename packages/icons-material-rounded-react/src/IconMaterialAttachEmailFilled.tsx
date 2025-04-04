import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAttachEmailFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachEmailFilled'

      short_name='AttachEmail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-240q-33 0-56.5-23.5T40-320v-480q0-33 23.5-56.5T120-880h640q33 0 56.5 23.5T840-800v200q0 17-11.5 28.5T800-560H700q-58 0-99 41t-41 99v140q0 17-11.5 28.5T520-240H120Zm320-360L172-768q-17-11-34.5-1T120-739q0 9 4 16.5t12 12.5l283 177q10 6 21 6t21-6l283-177q8-5 12-12.5t4-16.5q0-20-17.5-30t-34.5 1L440-600ZM760-80q-66 0-113-47t-47-113v-180q0-42 29-71t71-29q42 0 71 29t29 71v140q0 17-11.5 28.5T760-240q-17 0-28.5-11.5T720-280v-140q0-8-6-14t-14-6q-8 0-14 6t-6 14v180q0 33 23.5 56.5T760-160q33 0 56.5-23.5T840-240v-120q0-17 11.5-28.5T880-400q17 0 28.5 11.5T920-360v120q0 66-47 113T760-80Z"/>
    </Icon>
  );
});

IconMaterialAttachEmailFilled.displayName = 'OnesyIconMaterialAttachEmailFilled';

export default IconMaterialAttachEmailFilled;
