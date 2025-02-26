import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMergeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MergeW100Filled'

      short_name='Merge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m256-172-19-19 229-229v-316l-91 91-19-19 124-124 124 124-19 19-91-91v316l229 229-19 19-224-224-224 224Z"/>
    </Icon>
  );
});

IconMaterialMergeW100Filled.displayName = 'OnesyIconMaterialMergeW100Filled';

export default IconMaterialMergeW100Filled;
