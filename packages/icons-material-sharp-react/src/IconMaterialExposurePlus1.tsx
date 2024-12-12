import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExposurePlus1 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposurePlus1'

      short_name='ExposurePlus1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280v-120H120v-80h120v-120h80v120h120v80H320v120h-80Zm390 80v-438l-92 66-46-70 164-118h64v560h-90Z"/>
    </Icon>
  );
});

IconMaterialExposurePlus1.displayName = 'OnesyIconMaterialExposurePlus1';

export default IconMaterialExposurePlus1;
