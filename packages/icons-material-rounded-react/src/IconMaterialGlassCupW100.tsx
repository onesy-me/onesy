import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGlassCupW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlassCupW100'

      short_name='GlassCup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M305-132q-23 0-40.5-15T245-185l-69-610q-2-14 7-23.5t23-9.5h548q14 0 23 9.5t7 23.5l-68 610q-2 23-19.5 38T656-132H305Zm-41-134 9 78q2 12 11 20t21 8h351q12 0 21-8t11-20l9-78H264Zm-3-28h439l56-506H203l58 506Zm3 134h433-433Z"/>
    </Icon>
  );
});

IconMaterialGlassCupW100.displayName = 'OnesyIconMaterialGlassCupW100';

export default IconMaterialGlassCupW100;
