import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVr180Create2dFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Vr180Create2dFilled'

      short_name='Vr180Create2d'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-33 0-56.5-23.5T400-160v-320q0-33 23.5-56.5T480-560h320q33 0 56.5 23.5T880-480v320q0 33-23.5 56.5T800-80H480Zm60-120h199q13 0 18.5-11t-2.5-21l-51-67q-6-8-16-8t-16 8l-52 69-32-44q-6-8-16-8t-16 8l-32 42q-8 10-2 21t18 11Zm-220-50q-107-27-173.5-113.5T80-560q0-134 93-227t227-93q110 0 196.5 66.5T710-640H480q-66 0-113 47t-47 113v230Z"/>
    </Icon>
  );
});

IconMaterialVr180Create2dFilled.displayName = 'OnesyIconMaterialVr180Create2dFilled';

export default IconMaterialVr180Create2dFilled;
