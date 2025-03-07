import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNearMeDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeDisabled'

      short_name='NearMeDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M16.1,10.44l1.5-4.05l-4.05,1.5L16.1,10.44z M14.57,14.57L9.43,9.43l-2.71,1.01l4.89,1.95l1.95,4.89 L14.57,14.57z" opacity=".3"/><path d="M12,6.34L21,3l-3.34,9l-1.56-1.56l1.5-4.05l-4.05,1.5L12,6.34z M21.19,21.19l-5.07-5.07L14.31,21H12.9l-2.83-7.07L3,11.1 V9.69l4.88-1.81L2.81,2.81l1.41-1.41l18.38,18.38L21.19,21.19z M14.57,14.57L9.43,9.43l-2.71,1.01l4.89,1.95l1.95,4.89L14.57,14.57z"/>
    </Icon>
  );
});

IconMaterialNearMeDisabled.displayName = 'OnesyIconMaterialNearMeDisabled';

export default IconMaterialNearMeDisabled;
