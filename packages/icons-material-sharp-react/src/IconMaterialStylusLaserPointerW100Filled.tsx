import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStylusLaserPointerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylusLaserPointerW100Filled'

      short_name='StylusLaserPointer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360.12-131q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.38-66.62 27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5ZM528-270q-8-29-25-54t-41-42l137-135H262q-22 0-36-15.81-14-15.82-14-38.82 0-14.37 7-25.37 7-11 18-19l426-269q9-5 19-2.5t15 11q5 8.5 3 18.5t-10 15L311-574h387q21.05 0 35.53 14.47Q748-545.05 748-524q0 13.25-2.5 26.12Q743-485 734-476L528-270Z"/>
    </Icon>
  );
});

IconMaterialStylusLaserPointerW100Filled.displayName = 'OnesyIconMaterialStylusLaserPointerW100Filled';

export default IconMaterialStylusLaserPointerW100Filled;
