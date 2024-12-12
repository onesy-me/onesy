import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackpack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Backpack'

      short_name='Backpack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-560q0-56 34-98t86-56v-86h120v80h160v-80h120v86q52 14 86 56t34 98v560H160Zm80-80h480v-480q0-33-23.5-56.5T640-720H320q-33 0-56.5 23.5T240-640v480Zm340-160h80v-160H300v80h280v80ZM480-440Z"/>
    </Icon>
  );
});

IconMaterialBackpack.displayName = 'OnesyIconMaterialBackpack';

export default IconMaterialBackpack;
