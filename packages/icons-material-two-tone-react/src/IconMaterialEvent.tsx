import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEvent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Event'

      short_name='Event'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 8h14V6H5z" opacity=".3"/><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"/>
    </Icon>
  );
});

IconMaterialEvent.displayName = 'OnesyIconMaterialEvent';

export default IconMaterialEvent;
