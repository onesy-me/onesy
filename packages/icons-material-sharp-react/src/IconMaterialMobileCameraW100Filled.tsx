import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileCameraW100Filled'

      short_name='MobileCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-92v-776h460v158H609l-34 33H436v427h276v158H252Zm284-258v-227h81l33-33h64l32.57 33H828v227H536Zm146-57q23 0 40-17t17-40.14q0-23.14-17-39.5T682-520q-23 0-40 16.36t-17 39.5Q625-441 642-424t40 17ZM482.07-704q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q470-760 462-751.93t-8 20q0 11.93 8.07 19.93t20 8Z"/>
    </Icon>
  );
});

IconMaterialMobileCameraW100Filled.displayName = 'OnesyIconMaterialMobileCameraW100Filled';

export default IconMaterialMobileCameraW100Filled;
