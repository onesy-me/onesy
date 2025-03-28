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
      <path d="M152-172q-25 0-42.5-17.5T92-232v-136q0-25 17.5-42.5T152-428h20v-192h-10q-13 0-21.5-8.5T132-650v-54q0-13 8.5-21.5T162-734h196q13 0 21.5 8.5T388-704v54q0 13-8.5 21.5T358-620h-10v192h264v-192h-10q-13 0-21.5-8.5T572-650v-54q0-13 8.5-21.5T602-734h196q13 0 21.5 8.5T828-704v54q0 13-8.5 21.5T798-620h-10v192h20q25 0 42.5 17.5T868-368v136q0 25-17.5 42.5T808-172H152Zm448-476h200v-58H600v58Zm-440 0h200v-58H160v58Zm480 220h120v-192H640v192Zm-440 0h120v-192H200v192Zm-48 228h656q14 0 23-9t9-23v-136q0-14-9-23t-23-9H152q-14 0-23 9t-9 23v136q0 14 9 23t23 9Zm8-448v-58 58Zm440 0v-58 58ZM120-200v-200 200Z"/>
    </Icon>
  );
});

IconMaterialLabPanelW100.displayName = 'OnesyIconMaterialLabPanelW100';

export default IconMaterialLabPanelW100;
