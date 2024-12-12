import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoAwesomeMotionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMotionW100Filled'

      short_name='AutoAwesomeMotion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M452-132v-376h376v376H452ZM292-280v-388h388v28H320v360h-28ZM132-440v-388h388v28H160v360h-28Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMotionW100Filled.displayName = 'OnesyIconMaterialAutoAwesomeMotionW100Filled';

export default IconMaterialAutoAwesomeMotionW100Filled;
