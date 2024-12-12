import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableChartViewFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChartViewFilled'

      short_name='TableChartView'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m296-80-56-56 276-277 140 140 207-207 57 57-264 263-140-140L296-80Zm-136-40H80v-720h720v280H160v440Z"/>
    </Icon>
  );
});

IconMaterialTableChartViewFilled.displayName = 'OnesyIconMaterialTableChartViewFilled';

export default IconMaterialTableChartViewFilled;
