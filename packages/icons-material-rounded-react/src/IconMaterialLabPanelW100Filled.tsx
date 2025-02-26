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
      <path d="M152-172q-25 0-42.5-17.5T92-232v-136q0-25 17.5-42.5T152-428h20v-192h-10q-13 0-21.5-8.5T132-650v-54q0-13 8.5-21.5T162-734h196q13 0 21.5 8.5T388-704v54q0 13-8.5 21.5T358-620h-10v192h264v-192h-10q-13 0-21.5-8.5T572-650v-54q0-13 8.5-21.5T602-734h196q13 0 21.5 8.5T828-704v54q0 13-8.5 21.5T798-620h-10v192h20q25 0 42.5 17.5T868-368v136q0 25-17.5 42.5T808-172H152Zm488-256h120v-192H640v192Zm-440 0h120v-192H200v192Z"/>
    </Icon>
  );
});

IconMaterialLabPanelW100Filled.displayName = 'OnesyIconMaterialLabPanelW100Filled';

export default IconMaterialLabPanelW100Filled;
