import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFortW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FortW100Filled'

      short_name='Fort'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M66-146v-123l80-80v-262l-80-80v-123h28v80h132v-80h28v80h132v-80h28v123l-80 80v77h292v-77l-80-80v-123h28v80h132v-80h28v80h132v-80h28v123l-80 80v262l80 80v123H586v-200H374v200H66Z"/>
    </Icon>
  );
});

IconMaterialFortW100Filled.displayName = 'OnesyIconMaterialFortW100Filled';

export default IconMaterialFortW100Filled;
