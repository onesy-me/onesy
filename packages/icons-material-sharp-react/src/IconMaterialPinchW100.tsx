import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinchW100'

      short_name='Pinch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-688v-120L152-540h120v28H104v-168h28v120l268-268H280v-28h168v168h-28Zm95 584L292-326l29-27 145 35v-348h28v386l-160-43 192 191h274v-280h28v308H515Zm62-254v-174h28v174h-28Zm112 0v-134h28v134h-28Zm-44 113Z"/>
    </Icon>
  );
});

IconMaterialPinchW100.displayName = 'OnesyIconMaterialPinchW100';

export default IconMaterialPinchW100;
