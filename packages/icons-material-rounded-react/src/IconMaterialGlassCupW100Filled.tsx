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
      <path d="M305-132q-23 0-40.5-15T245-185l-69-606q-2-15 8.5-26t25.5-11h540q15 0 25.5 11t8.5 26l-68 606q-2 23-19.5 38T656-132H305Zm-44-162h439l56-506H203l58 506Z"/>
    </Icon>
  );
});

IconMaterialGlassCupW100Filled.displayName = 'OnesyIconMaterialGlassCupW100Filled';

export default IconMaterialGlassCupW100Filled;
