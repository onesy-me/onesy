import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutboxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboxFilled'

      short_name='Outbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm360-200q38 0 69-22t43-58h168v-360H200v360h168q12 36 43 58t69 22Zm-40-80v-166l-64 64-56-58 160-160 160 160-56 58-64-64v166h-80Z"/>
    </Icon>
  );
});

IconMaterialOutboxFilled.displayName = 'OnesyIconMaterialOutboxFilled';

export default IconMaterialOutboxFilled;
