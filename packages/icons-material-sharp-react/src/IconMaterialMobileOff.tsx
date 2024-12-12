import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileOff'

      short_name='MobileOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M820-28 28-820l56-56L876-84l-56 56ZM200-703l80 80v383h384l96 96v104H200v-663Zm80 543v40h400v-40H280Zm73-560-79-80h406v-40H234l-28-28v-52h554v606l-80-80v-326H353Zm127 560Zm-23-640Z"/>
    </Icon>
  );
});

IconMaterialMobileOff.displayName = 'OnesyIconMaterialMobileOff';

export default IconMaterialMobileOff;
