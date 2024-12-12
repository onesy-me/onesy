import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackpackFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackpackFilled'

      short_name='Backpack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-560q0-56 34-98t86-56v-86h120v80h160v-80h120v86q52 14 86 56t34 98v560H160Zm420-240h80v-160H300v80h280v80Z"/>
    </Icon>
  );
});

IconMaterialBackpackFilled.displayName = 'OnesyIconMaterialBackpackFilled';

export default IconMaterialBackpackFilled;
