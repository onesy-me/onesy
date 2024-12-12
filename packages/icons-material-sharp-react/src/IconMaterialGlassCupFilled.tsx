import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGlassCupFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlassCupFilled'

      short_name='GlassCup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m208-80-88-800h720L752-80H208Zm55-240h435l52-480H210l53 480Z"/>
    </Icon>
  );
});

IconMaterialGlassCupFilled.displayName = 'OnesyIconMaterialGlassCupFilled';

export default IconMaterialGlassCupFilled;
