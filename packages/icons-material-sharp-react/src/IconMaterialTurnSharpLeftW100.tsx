import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTurnSharpLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSharpLeftW100'

      short_name='TurnSharpLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M666-172v-234H266v-328l-90 90-20-20 124-124 124 124-20 20-90-90v300h400v262h-28Z"/>
    </Icon>
  );
});

IconMaterialTurnSharpLeftW100.displayName = 'OnesyIconMaterialTurnSharpLeftW100';

export default IconMaterialTurnSharpLeftW100;
