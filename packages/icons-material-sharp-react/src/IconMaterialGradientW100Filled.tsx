import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGradientW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradientW100Filled'

      short_name='Gradient'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm268-348v80h80v-80h-80Zm-160 0v80h80v-80h-80Zm80 80v80h80v-80h-80Zm160 0v80h80v-80h-80Zm-320 0v80h80v-80h-80Zm400-80v80h80v80h80v-80h-80v-80h-80ZM280-360v80h-80v80h80v-80h80v80h80v-80h80v80h80v-80h80v80h80v-80h-80v-80h-80v80h-80v-80h-80v80h-80v-80h-80Zm480-160v80-80Zm0 160v80-80Z"/>
    </Icon>
  );
});

IconMaterialGradientW100Filled.displayName = 'OnesyIconMaterialGradientW100Filled';

export default IconMaterialGradientW100Filled;
