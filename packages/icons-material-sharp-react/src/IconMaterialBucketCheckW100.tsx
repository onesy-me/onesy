import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBucketCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BucketCheckW100'

      short_name='BucketCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m239-172-67-488h108v-128h400v128h108l-68 488H239Zm25-28h432l59-432H204l60 432Zm176-128 152-150-20-19-131 129-53-52-20 20 72 72ZM308-660h344v-100H308v100Zm172 244Z"/>
    </Icon>
  );
});

IconMaterialBucketCheckW100.displayName = 'OnesyIconMaterialBucketCheckW100';

export default IconMaterialBucketCheckW100;
