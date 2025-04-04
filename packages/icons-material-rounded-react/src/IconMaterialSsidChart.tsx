import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSsidChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SsidChart'

      short_name='SsidChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-358q0-10 4.5-18.5T137-390l49-35q23-17 52-14.5t50 22.5l197 191 145-116q11-8 23.5-13t26.5-5h120q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280H680L535-164q-23 19-53.5 17.5T429-169L232-360l-49 35q-20 14-41.5 3T120-358Zm0-241q0-10 4-18t12-14l122-89q24-17 53-15t50 23l127 127 289-209q20-14 41.5-3t21.5 36q0 10-4.5 18T823-729L535-520q-24 17-53 15t-50-23L305-655l-122 89q-20 14-41.5 3T120-599Z"/>
    </Icon>
  );
});

IconMaterialSsidChart.displayName = 'OnesyIconMaterialSsidChart';

export default IconMaterialSsidChart;
