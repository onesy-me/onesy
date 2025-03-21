import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkunreadMailboxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkunreadMailboxFilled'

      short_name='MarkunreadMailbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h80v-200q0-17 11.5-28.5T280-880h240q17 0 28.5 11.5T560-840v80q0 17-11.5 28.5T520-720H320v280q0 17 11.5 28.5T360-400q17 0 28.5-11.5T400-440v-200h400q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Z"/>
    </Icon>
  );
});

IconMaterialMarkunreadMailboxFilled.displayName = 'OnesyIconMaterialMarkunreadMailboxFilled';

export default IconMaterialMarkunreadMailboxFilled;
