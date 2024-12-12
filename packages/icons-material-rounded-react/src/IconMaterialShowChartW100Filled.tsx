import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShowChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShowChartW100Filled'

      short_name='ShowChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M130-266q-5-5-5-10t5-10l212-212q17-17 42-17t42 17l94 94q10 10 24 9.5t23-11.5l246-284q4-5 9-5t10 4q4 4 4.5 9t-3.5 10L588-387q-17 20-43 21t-45-18l-93-93q-9-9-23-9t-23 9L150-266q-4 4-9.5 4.5T130-266Z"/>
    </Icon>
  );
});

IconMaterialShowChartW100Filled.displayName = 'OnesyIconMaterialShowChartW100Filled';

export default IconMaterialShowChartW100Filled;
