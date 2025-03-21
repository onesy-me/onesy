import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlowsheetW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlowsheetW100'

      short_name='Flowsheet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-464v224-480 256Zm430 304q23 0 39.5-16.5T646-216q0-23-16.5-39.5T590-272q-23 0-39.5 16.5T534-216q0 23 16.5 39.5T590-160Zm210-308q23 0 39.5-16.5T856-524q0-23-16.5-39.5T800-580q-23 0-39.5 16.5T744-524q0 23 16.5 39.5T800-468Zm-534-78h214v-28H266v28Zm0 160h214v-28H266v28ZM132-212v-536h696v60h-28v-32H160v480h266v28H132Zm458 80q-35 0-59.5-24.5T506-216q0-32 20-55t50-28v-85h210v-57q-30-5-50-28t-20-55q0-35 24.5-59.5T800-608q35 0 59.5 24.5T884-524q0 32-20 55t-50 28v85H604v57q30 5 50 28t20 55q0 35-24.5 59.5T590-132Z"/>
    </Icon>
  );
});

IconMaterialFlowsheetW100.displayName = 'OnesyIconMaterialFlowsheetW100';

export default IconMaterialFlowsheetW100;
