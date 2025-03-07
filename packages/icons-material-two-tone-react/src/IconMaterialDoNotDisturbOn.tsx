import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoNotDisturbOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotDisturbOn'

      short_name='DoNotDisturbOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8s8-3.59,8-8S16.41,4,12,4z M17,13H7v-2 h10V13z" enableBackground="new" opacity=".3"/><rect height="2" width="10" x="7" y="11"/><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z"/></g></g></g>
    </Icon>
  );
});

IconMaterialDoNotDisturbOn.displayName = 'OnesyIconMaterialDoNotDisturbOn';

export default IconMaterialDoNotDisturbOn;
