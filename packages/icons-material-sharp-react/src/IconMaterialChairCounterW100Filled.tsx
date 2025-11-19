import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChairCounterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairCounterW100Filled'

      short_name='ChairCounter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M321-132v-17q32-23 69-34.5t76-13.5v-120H357v-28h109v-272h-94l-18-35H212v-51q0-52 36-88.5t87-36.5h291q51 0 86.5 37t35.5 88v51H607l-18 35h-95v272h109v28H494v120q39 2 76.5 13.5T640-149v17H321Z"/>
    </Icon>
  );
});

IconMaterialChairCounterW100Filled.displayName = 'OnesyIconMaterialChairCounterW100Filled';

export default IconMaterialChairCounterW100Filled;
