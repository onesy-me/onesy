import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotAccessibleForward = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotAccessibleForward'

      short_name='NotAccessibleForward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m763-84-60-59h23q0 10-6.5 16.5T703-120q-10 0-16.5-6.5T680-143v-23L526-320h-86q-44 0-68-37.5t-6-78.5l14-30L83-763q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84Zm-3-230L654-420h26q33 0 56.5 23.5T760-340v26ZM593-481 394-680h164q45 0 68.5 36.5T632-566l-39 85ZM320-80q-83 0-141.5-58.5T120-280q0-83 58.5-141.5T320-480v80q-50 0-85 35t-35 85q0 50 35 85t85 35q50 0 85-35t35-85h80q0 83-58.5 141.5T320-80Zm320-620q-33 0-56.5-23.5T560-780q0-33 23.5-56.5T640-860q33 0 56.5 23.5T720-780q0 33-23.5 56.5T640-700Z"/>
    </Icon>
  );
});

IconMaterialNotAccessibleForward.displayName = 'OnesyIconMaterialNotAccessibleForward';

export default IconMaterialNotAccessibleForward;
