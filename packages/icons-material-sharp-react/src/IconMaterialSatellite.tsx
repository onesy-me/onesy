import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSatellite = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Satellite'

      short_name='Satellite'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280h480L570-480 450-320l-90-120-120 160Zm0-200q100 0 170-70t70-170h-68q0 72-50 122t-122 50v68Zm0-136q43 0 72.5-30.5T342-720H240v104ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialSatellite.displayName = 'OnesyIconMaterialSatellite';

export default IconMaterialSatellite;
