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
      <path d="M160-120v-240h640v240h-80v-160H240v160h-80Zm-40-280v-120h120v120H120Zm160 0v-440h400v440H280Zm440 0v-120h120v120H720Z"/>
    </Icon>
  );
});

IconMaterialEventSeatFilled.displayName = 'OnesyIconMaterialEventSeatFilled';

export default IconMaterialEventSeatFilled;
