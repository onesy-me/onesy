import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExperimentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExperimentW100'

      short_name='Experiment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-172q-17.9 0-25.45-16-7.55-16 3.45-30l234-284v-258h-60q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h256q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-60v258l234 284q11 14 3.45 30T760-172H200Zm80-68h400L544-400H416L280-240Zm-80 40h560L520-492v-268h-80v268L200-200Zm280-280Z"/>
    </Icon>
  );
});

IconMaterialExperimentW100.displayName = 'OnesyIconMaterialExperimentW100';

export default IconMaterialExperimentW100;
