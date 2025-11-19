import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileCameraRearW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileCameraRearW100'

      short_name='MobileCameraRear'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m420-96-20-20 70-70H252v-28h218l-70-70 20-20 104 104L420-96Zm140-90v-28h148v28H560Zm-80-354ZM252-280v-548h456v190h36v134h-36v224h-28v-520H280v520h-28Zm230.07-384q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q470-720 462-711.93t-8 20q0 11.93 8.07 19.93t20 8Z"/>
    </Icon>
  );
});

IconMaterialMobileCameraRearW100.displayName = 'OnesyIconMaterialMobileCameraRearW100';

export default IconMaterialMobileCameraRearW100;
