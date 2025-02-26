import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanToolW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolW100Filled'

      short_name='PanTool'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M447-118q-23.41 0-43.71-10.5Q383-139 369-159L130-509q-2-2-1.5-4.5t2.5-4.5q11-11 26-11.5t28 8.5l147 102v-326q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v239h115v-319q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v319h115v-279q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v279h114v-228q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v482q0 56-39 95t-95 39H447Z"/>
    </Icon>
  );
});

IconMaterialPanToolW100Filled.displayName = 'OnesyIconMaterialPanToolW100Filled';

export default IconMaterialPanToolW100Filled;
