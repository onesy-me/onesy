import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeStandby = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeStandby'

      short_name='ModeStandby'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M12,2C6.49,2,2,6.49,2,12s4.49,10,10,10s10-4.49,10-10S17.51,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M15,12c0,1.66-1.34,3-3,3s-3-1.34-3-3s1.34-3,3-3S15,10.34,15,12z"/></g></g>
    </Icon>
  );
});

IconMaterialModeStandby.displayName = 'OnesyIconMaterialModeStandby';

export default IconMaterialModeStandby;
