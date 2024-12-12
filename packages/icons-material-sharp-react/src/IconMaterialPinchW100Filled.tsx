import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinchW100Filled'

      short_name='Pinch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-688v-120L152-540h120v28H104v-168h28v120l268-268H280v-28h168v168h-28Zm95 584L292-326l29-27 145 35v-348h28v308h83v-174h28v174h84v-134h28v134h83v-54h28v308H515Z"/>
    </Icon>
  );
});

IconMaterialPinchW100Filled.displayName = 'OnesyIconMaterialPinchW100Filled';

export default IconMaterialPinchW100Filled;
