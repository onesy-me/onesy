import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCastleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastleFilled'

      short_name='Castle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-120v-480h80v80h80v-320h80v80h80v-80h80v80h80v-80h80v80h80v-80h80v320h80v-80h80v480H560v-200H400v200H40Zm320-360h80v-120h-80v120Zm160 0h80v-120h-80v120Z"/>
    </Icon>
  );
});

IconMaterialCastleFilled.displayName = 'OnesyIconMaterialCastleFilled';

export default IconMaterialCastleFilled;
