import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBucketCheckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BucketCheckW100Filled'

      short_name='BucketCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m239-172-67-488h108v-128h400v128h108l-68 488H239Zm201-156 152-150-20-19-131 129-53-52-20 20 72 72ZM308-660h344v-100H308v100Z"/>
    </Icon>
  );
});

IconMaterialBucketCheckW100Filled.displayName = 'OnesyIconMaterialBucketCheckW100Filled';

export default IconMaterialBucketCheckW100Filled;
