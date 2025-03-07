import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiOffW100'

      short_name='WifiOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M798-120 480-440q-65 0-125 25t-101 69l-28-28q41-41 97.5-70T442-478L278-642q-47 17-100 51t-94 75l-26-28q42-42 92.5-77t95.5-53l-94-94 20-20 648 648-22 20Zm-82-238-13.5-13.5L689-385l-65-65q20 8 50.5 26.5T734-376l-18 18Zm160-158q-77-77-178.5-120.5T480-680q-21 0-42 1.5t-38 4.5l-36-36q21-5 49-7.5t67-2.5q125 0 233 46.5T904-544l-28 28ZM480-120l-85-85q17-17 39-26t46-9q24 0 46 9t39 26l-85 85Z"/>
    </Icon>
  );
});

IconMaterialWifiOffW100.displayName = 'OnesyIconMaterialWifiOffW100';

export default IconMaterialWifiOffW100;
