import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOverviewKeyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OverviewKeyW100'

      short_name='OverviewKey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-252v-456h456v456H80Zm28-28h400v-400H108v400Zm572 28v-456h28v456h-28Zm172 0v-456h28v456h-28Zm-744-28v-400 400Z"/>
    </Icon>
  );
});

IconMaterialOverviewKeyW100.displayName = 'OnesyIconMaterialOverviewKeyW100';

export default IconMaterialOverviewKeyW100;
