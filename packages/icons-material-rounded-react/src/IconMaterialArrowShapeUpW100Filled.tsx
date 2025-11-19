import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowShapeUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowShapeUpW100Filled'

      short_name='ArrowShapeUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M348-202v-200H222q-14 0-20.5-13t3.5-24l253-284q9-10 22-10t22 10l253 284q10 11 3.5 24T738-402H612v200q0 13-8.5 21.5T582-172H378q-13 0-21.5-8.5T348-202Z"/>
    </Icon>
  );
});

IconMaterialArrowShapeUpW100Filled.displayName = 'OnesyIconMaterialArrowShapeUpW100Filled';

export default IconMaterialArrowShapeUpW100Filled;
