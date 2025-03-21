import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGroupAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupAddFilled'

      short_name='GroupAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-482q29-32 44.5-73t15.5-85q0-44-15.5-85T500-798q60 8 100 53t40 105q0 60-40 105t-100 53Zm220 322v-120q0-36-16-68.5T662-406q51 18 94.5 46.5T800-280v120h-80Zm80-280v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Zm-480-40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM0-160v-112q0-34 17.5-62.5T64-378q62-31 126-46.5T320-440q66 0 130 15.5T576-378q29 15 46.5 43.5T640-272v112H0Z"/>
    </Icon>
  );
});

IconMaterialGroupAddFilled.displayName = 'OnesyIconMaterialGroupAddFilled';

export default IconMaterialGroupAddFilled;
