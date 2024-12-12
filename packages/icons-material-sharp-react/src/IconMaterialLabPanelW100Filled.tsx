import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabPanelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabPanelW100Filled'

      short_name='LabPanel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-172v-256h80v-192h-40v-114h256v114h-40v192h264v-192h-40v-114h256v114h-40v192h80v256H92Zm548-256h120v-192H640v192Zm-440 0h120v-192H200v192Z"/>
    </Icon>
  );
});

IconMaterialLabPanelW100Filled.displayName = 'OnesyIconMaterialLabPanelW100Filled';

export default IconMaterialLabPanelW100Filled;
