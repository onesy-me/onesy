import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutboxAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboxAltFilled'

      short_name='OutboxAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m240-240 480-240-480-240v174l200 66-200 66v174Zm480-240ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialOutboxAltFilled.displayName = 'OnesyIconMaterialOutboxAltFilled';

export default IconMaterialOutboxAltFilled;
