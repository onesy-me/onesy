import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGeneralDevice = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GeneralDevice'

      short_name='GeneralDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-240q-17 0-28.5-11.5T320-280v-480q0-33 23.5-56.5T400-840h160q33 0 56.5 23.5T640-760v480q0 17-11.5 28.5T600-240H360Zm40-80h160v-440H400v440Zm-40 120h240q17 0 28.5 11.5T640-160q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160q0-17 11.5-28.5T360-200Zm40-120h160-160Z"/>
    </Icon>
  );
});

IconMaterialGeneralDevice.displayName = 'OnesyIconMaterialGeneralDevice';

export default IconMaterialGeneralDevice;
