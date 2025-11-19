import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileLayout = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileLayout'

      short_name='MobileLayout'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-120v-240h400v240H40Zm480 0v-720h400v720H520Zm-400-80h240v-80H120v80Zm480 0h240v-560H600v560Zm120-40q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240ZM40-440v-400h400v400H40Zm240-200q17 0 28.5-11.5T320-680q0-17-11.5-28.5T280-720q-17 0-28.5 11.5T240-680q0 17 11.5 28.5T280-640ZM120-533l80-107 90 120h70v-240H120v227Zm120 293Zm480-240ZM240-640Z"/>
    </Icon>
  );
});

IconMaterialMobileLayout.displayName = 'OnesyIconMaterialMobileLayout';

export default IconMaterialMobileLayout;
