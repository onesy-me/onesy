import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMergeType = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MergeType'

      short_name='MergeType'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M664-160 440-384v-301L336-581l-57-57 201-201 200 200-57 57-103-103v269l200 200-56 56Zm-368 1-56-56 127-128 57 57-128 127Z"/>
    </Icon>
  );
});

IconMaterialMergeType.displayName = 'OnesyIconMaterialMergeType';

export default IconMaterialMergeType;
