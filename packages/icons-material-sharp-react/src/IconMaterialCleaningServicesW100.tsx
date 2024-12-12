import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCleaningServicesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleaningServicesW100'

      short_name='CleaningServices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-92v-391h225v-385h166v385h225v391H172Zm28-28h119v-161h28v161h119v-161h28v161h119v-161h28v161h119v-335H200v335Zm335-363v-357H425v357h110Zm0 0H425h110Z"/>
    </Icon>
  );
});

IconMaterialCleaningServicesW100.displayName = 'OnesyIconMaterialCleaningServicesW100';

export default IconMaterialCleaningServicesW100;
