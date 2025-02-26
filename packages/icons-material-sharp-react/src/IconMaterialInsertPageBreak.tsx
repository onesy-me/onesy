import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInsertPageBreak = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertPageBreak'

      short_name='InsertPageBreak'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-200h80v120h480v-120h80v200H160Zm0-440v-360h400l240 240v120h-80v-80H520v-200H240v280h-80Zm200 160v-80h240v80H360Zm320 0v-80h240v80H680Zm-640 0v-80h240v80H40Zm440-160Zm0 240Z"/>
    </Icon>
  );
});

IconMaterialInsertPageBreak.displayName = 'OnesyIconMaterialInsertPageBreak';

export default IconMaterialInsertPageBreak;
