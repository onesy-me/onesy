import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartArrowNotchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartArrowNotchW100Filled'

      short_name='LineStartArrowNotch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m374-466 56 102q5 11-3 18.5t-18 1.5L235-455q-14-9-14-25t14-25l174-111q10-6 18 1.5t3 18.5l-56 102h466q6 0 10 4t4 10q0 6-4 10t-10 4H374Z"/>
    </Icon>
  );
});

IconMaterialLineStartArrowNotchW100Filled.displayName = 'OnesyIconMaterialLineStartArrowNotchW100Filled';

export default IconMaterialLineStartArrowNotchW100Filled;
