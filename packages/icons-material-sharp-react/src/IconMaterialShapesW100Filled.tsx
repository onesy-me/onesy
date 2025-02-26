import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShapesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShapesW100Filled'

      short_name='Shapes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372.19-360Q277-360 210.5-426.31T144-587.81q0-95.19 66.31-161.69t161.5-66.5q95.19 0 161.69 66.31t66.5 161.5q0 95.19-66.31 161.69T372.19-360ZM360-144v-96h12q145 0 246.5-101.5T720-588v-12h96v456H360Z"/>
    </Icon>
  );
});

IconMaterialShapesW100Filled.displayName = 'OnesyIconMaterialShapesW100Filled';

export default IconMaterialShapesW100Filled;
