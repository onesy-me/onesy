import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPivotTableChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PivotTableChartW100Filled'

      short_name='PivotTableChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-660v-128h308q26 0 43 17t17 43v68H420ZM232-172q-26 0-43-17t-17-43v-308h128v368h-68Zm-60-488v-68q0-26 17-43t43-17h68v128H172Zm252 418 80 80q4 4 4.5 9.5T504-142q-5 5-10 5t-10-5l-93-93q-9-9-9-21t9-21l93-93q4-4 9.5-4.5T504-370q5 5 5 10t-5 10l-80 80h160q44 0 75-31t31-75v-160l-80 80q-4 4-9.5 4.5T590-456q-5-5-5-10t5-10l93-93q9-9 21-9t21 9l93 93q4 4 4.5 9.5T818-456q-5 5-10 5t-10-5l-80-80v160q0 56-39 95t-95 39H424Z"/>
    </Icon>
  );
});

IconMaterialPivotTableChartW100Filled.displayName = 'OnesyIconMaterialPivotTableChartW100Filled';

export default IconMaterialPivotTableChartW100Filled;
