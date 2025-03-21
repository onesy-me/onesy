import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabPanelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabPanelW100'

      short_name='LabPanel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-172v-256h80v-192h-40v-114h256v114h-40v192h264v-192h-40v-114h256v114h-40v192h80v256H92Zm508-476h200v-58H600v58Zm-440 0h200v-58H160v58Zm480 220h120v-192H640v192Zm-440 0h120v-192H200v192Zm-48 228h656q14 0 23-9t9-23v-136q0-14-9-23t-23-9H152q-14 0-23 9t-9 23v136q0 14 9 23t23 9Zm8-448v-58 58Zm440 0v-58 58ZM120-200v-200 200Z"/>
    </Icon>
  );
});

IconMaterialLabPanelW100.displayName = 'OnesyIconMaterialLabPanelW100';

export default IconMaterialLabPanelW100;
