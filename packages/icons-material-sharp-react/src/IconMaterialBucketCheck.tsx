import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBucketCheck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BucketCheck'

      short_name='BucketCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m200-120-80-560h120v-160h480v160h120l-80 560H200Zm69-80h422l57-400H212l57 400Zm169-80 198-198-57-56-141 141-57-57-57 57 114 113ZM320-680h320v-80H320v80Zm160 280Z"/>
    </Icon>
  );
});

IconMaterialBucketCheck.displayName = 'OnesyIconMaterialBucketCheck';

export default IconMaterialBucketCheck;
