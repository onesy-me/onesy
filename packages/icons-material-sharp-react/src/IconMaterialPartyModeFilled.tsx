import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPartyModeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PartyModeFilled'

      short_name='PartyMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-640h206l74-80h240l74 80h206v640H80Zm400-140q75 0 127.5-52.5T660-440q0-5-.5-10t-1.5-10h-80q2 5 2 10v10q0 42-29 71t-71 29H330q24 36 63.5 58t86.5 22ZM302-420h80q-2-5-2-10v-10q0-42 29-71t71-29h150q-24-36-63.5-58T480-620q-75 0-127.5 52.5T300-440q0 5 .5 10t1.5 10Z"/>
    </Icon>
  );
});

IconMaterialPartyModeFilled.displayName = 'OnesyIconMaterialPartyModeFilled';

export default IconMaterialPartyModeFilled;
