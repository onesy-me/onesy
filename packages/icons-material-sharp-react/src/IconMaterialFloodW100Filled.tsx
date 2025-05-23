import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFloodW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloodW100Filled'

      short_name='Flood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M106-159v-29q32-8 47.5-22.5T214-225q50 0 70 20t63 20q43 0 63-20t70-20q49 0 70.5 20t63.5 20q43 0 63-20t70-20q45 0 60 14.5t47 22.5v29q-32-6-51-22t-56-16q-42 0-63 20t-70 20q-49 0-70.5-20T480-197q-43 0-63 20t-70 20q-50 0-70-20t-63-20q-37 0-56 16t-52 22Zm0-129v-29q32-8 47.5-22.5T214-354q21 0 39 5.5t50 24.5l-64-242-63 78-22-17 253-313 376 144-10 26-93-36 88 331q23 1 43 15.5t43 20.5v28q-32-6-51-21.5T747-326q-43 0-63 20t-70 20q-49 0-70.5-20T480-326q-43 0-63 20t-70 20q-48 0-69.5-20T214-326q-35 0-55.5 16T106-288Zm519-27-63-238-155 41 44 161q7-2 14-2.5t15-.5q51 0 76 22t69 17Z"/>
    </Icon>
  );
});

IconMaterialFloodW100Filled.displayName = 'OnesyIconMaterialFloodW100Filled';

export default IconMaterialFloodW100Filled;
