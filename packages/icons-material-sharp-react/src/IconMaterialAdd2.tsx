import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdd2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Add2'

      short_name='Add2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-120v-320H120v-80h320v-320h80v320h320v80H520v320h-80Z"/>
    </Icon>
  );
});

IconMaterialAdd2.displayName = 'OnesyIconMaterialAdd2';

export default IconMaterialAdd2;
