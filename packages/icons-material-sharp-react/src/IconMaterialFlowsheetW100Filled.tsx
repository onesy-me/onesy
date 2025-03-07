import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlowsheetW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlowsheetW100Filled'

      short_name='Flowsheet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-546h214v-28H266v28ZM132-212v-536h695v62q-7-1-13.61-1.5-6.61-.5-13.39-.5-69 0-116.5 47.5T636-524q0 16.32 3 31.16t8 28.84H496v50H266v28h230v36q-34 24-52 60t-18 78H132Zm458 52q23 0 39.5-16.5T646-216q0-23-16.5-39.5T590-272q-23 0-39.5 16.5T534-216q0 23 16.5 39.5T590-160Zm210-308q23 0 39.5-16.5T856-524q0-23-16.5-39.5T800-580q-23 0-39.5 16.5T744-524q0 23 16.5 39.5T800-468ZM590-132q-35 0-59.5-24.5T506-216q0-32 20-55t50-28v-85h210v-57q-30-5-50-28t-20-55q0-35 24.5-59.5T800-608q35 0 59.5 24.5T884-524q0 32-20 55t-50 28v85H604v57q30 5 50 28t20 55q0 35-24.5 59.5T590-132Z"/>
    </Icon>
  );
});

IconMaterialFlowsheetW100Filled.displayName = 'OnesyIconMaterialFlowsheetW100Filled';

export default IconMaterialFlowsheetW100Filled;
