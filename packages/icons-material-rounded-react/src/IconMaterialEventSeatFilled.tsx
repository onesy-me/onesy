import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEventSeatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventSeatFilled'

      short_name='EventSeat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-17 0-28.5-11.5T160-160v-120q0-33 23.5-56.5T240-360h480q33 0 56.5 23.5T800-280v120q0 17-11.5 28.5T760-120q-17 0-28.5-11.5T720-160v-120H240v120q0 17-11.5 28.5T200-120Zm-20-280q-25 0-42.5-17.5T120-460q0-25 17.5-42.5T180-520q25 0 42.5 17.5T240-460q0 25-17.5 42.5T180-400Zm100 0v-360q0-33 23.5-56.5T360-840h240q33 0 56.5 23.5T680-760v360H280Zm500 0q-25 0-42.5-17.5T720-460q0-25 17.5-42.5T780-520q25 0 42.5 17.5T840-460q0 25-17.5 42.5T780-400Z"/>
    </Icon>
  );
});

IconMaterialEventSeatFilled.displayName = 'OnesyIconMaterialEventSeatFilled';

export default IconMaterialEventSeatFilled;
