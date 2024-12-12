import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSelectAllFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectAllFilled'

      short_name='SelectAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280v-400h400v400H280Zm80-80h240v-240H360v240Zm-80 240v-80h80v80h-80ZM120-760v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0 640v-80h80v80h-80Zm160-640v-80h80v80h-80ZM120-120v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm640 480v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialSelectAllFilled.displayName = 'OnesyIconMaterialSelectAllFilled';

export default IconMaterialSelectAllFilled;
