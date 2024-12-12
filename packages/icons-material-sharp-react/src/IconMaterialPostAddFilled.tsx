import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPostAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PostAddFilled'

      short_name='PostAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-520v-80h320v80H320Zm0 120v-80h320v80H320Zm0 120v-80h320v80H320Zm360-320v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM120-120v-720h440v80H200v560h560v-360h80v440H120Z"/>
    </Icon>
  );
});

IconMaterialPostAddFilled.displayName = 'OnesyIconMaterialPostAddFilled';

export default IconMaterialPostAddFilled;
