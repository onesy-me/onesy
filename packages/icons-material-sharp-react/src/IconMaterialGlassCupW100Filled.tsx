import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGlassCupW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlassCupW100Filled'

      short_name='GlassCup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m251-132-79-696h616l-78 696H251Zm10-162h439l56-506H203l58 506Z"/>
    </Icon>
  );
});

IconMaterialGlassCupW100Filled.displayName = 'OnesyIconMaterialGlassCupW100Filled';

export default IconMaterialGlassCupW100Filled;
