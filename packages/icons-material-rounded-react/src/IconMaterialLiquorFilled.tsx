import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLiquorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiquorFilled'

      short_name='Liquor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160v-128q-35-12-57.5-42.5T120-400v-280q0-17 11.5-28.5T160-720h160q17 0 28.5 11.5T360-680v280q0 39-22.5 69.5T280-288v128h40q17 0 28.5 11.5T360-120q0 17-11.5 28.5T320-80H160q-17 0-28.5-11.5T120-120q0-17 11.5-28.5T160-160h40Zm0-360h80v-120h-80v120ZM520-80q-33 0-56.5-23.5T440-160v-382q0-26 15-46.5t39-29.5l38-14q14-5 21-14.5t7-23.5v-170q0-17 11.5-28.5T600-880h120q17 0 28.5 11.5T760-840v170q0 14 7 23.5t21 14.5l38 14q24 9 39 29.5t15 46.5v382q0 33-23.5 56.5T800-80H520Zm120-680h40v-40h-40v40ZM520-480h280v-62l-38-14q-38-14-60-44t-22-68v-12h-40v12q0 38-22 68t-60 44l-38 14v62Zm0 320h280v-80H520v80Z"/>
    </Icon>
  );
});

IconMaterialLiquorFilled.displayName = 'OnesyIconMaterialLiquorFilled';

export default IconMaterialLiquorFilled;
