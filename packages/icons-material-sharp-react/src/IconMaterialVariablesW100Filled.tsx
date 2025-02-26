import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVariablesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariablesW100Filled'

      short_name='Variables'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-332v-296h616v296H172Z"/>
    </Icon>
  );
});

IconMaterialVariablesW100Filled.displayName = 'OnesyIconMaterialVariablesW100Filled';

export default IconMaterialVariablesW100Filled;
