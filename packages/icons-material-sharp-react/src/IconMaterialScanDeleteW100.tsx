import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScanDeleteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScanDeleteW100'

      short_name='ScanDelete'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-800v148-148 640-640Zm-28 668v-696h374l162 162v198q-6.65-1-13.65-1.5T720-470v-182H572v-148H240v640h259q2 7.67 5 14.33 3 6.67 7 13.67H212Zm424-1-19-19 84-84-84-84 19-19 84 84 84-84 19 19-83 84 83 84-19 19-84-83-84 83Z"/>
    </Icon>
  );
});

IconMaterialScanDeleteW100.displayName = 'OnesyIconMaterialScanDeleteW100';

export default IconMaterialScanDeleteW100;
