import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrendingDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingDownW100Filled'

      short_name='TrendingDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M782-315 554-540q-10-9-23-9t-22 9l-95 95q-18 18-43 18t-42-18L142-633q-4-4-4.5-9.5T142-653q5-5 10-5t10 5l186 186q9 9 23 9t23-9l95-95q17-17 42-17t42 17l227 227v-126q0-6 4-10t10-4q6 0 10 4t4 10v144q0 13-8.5 21.5T798-287H654q-6 0-10-4t-4-10q0-6 4-10t10-4h128Z"/>
    </Icon>
  );
});

IconMaterialTrendingDownW100Filled.displayName = 'OnesyIconMaterialTrendingDownW100Filled';

export default IconMaterialTrendingDownW100Filled;
