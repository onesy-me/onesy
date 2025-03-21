import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoNotDisturbOnTotalSilence = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotDisturbOnTotalSilence'

      short_name='DoNotDisturbOnTotalSilence'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M12,6c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S15.4,6,12,6z M15,13H9v-2h6V13z"/></g></g>
    </Icon>
  );
});

IconMaterialDoNotDisturbOnTotalSilence.displayName = 'OnesyIconMaterialDoNotDisturbOnTotalSilence';

export default IconMaterialDoNotDisturbOnTotalSilence;
