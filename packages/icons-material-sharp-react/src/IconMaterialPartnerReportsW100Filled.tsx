import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPartnerReportsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PartnerReportsW100Filled'

      short_name='PartnerReports'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-448v-340h28v340h-28ZM172-172v-150h28v122h560v-122h28v150H172Zm284-128v-48h48v48h-48Z"/>
    </Icon>
  );
});

IconMaterialPartnerReportsW100Filled.displayName = 'OnesyIconMaterialPartnerReportsW100Filled';

export default IconMaterialPartnerReportsW100Filled;
