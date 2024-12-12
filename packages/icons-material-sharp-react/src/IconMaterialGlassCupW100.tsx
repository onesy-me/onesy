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
      <path d="m251-132-79-696h616l-78 696H251Zm13-134 12 106h409l12-106H264Zm-3-28h439l56-506H203l58 506Zm3 134h433-433Z"/>
    </Icon>
  );
});

IconMaterialGlassCupW100.displayName = 'OnesyIconMaterialGlassCupW100';

export default IconMaterialGlassCupW100;
