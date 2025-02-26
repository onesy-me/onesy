import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignVerticalTopW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalTopW100Filled'

      short_name='AlignVerticalTop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M316-158v-507h70v507h-70Zm258-240v-267h70v267h-70ZM132-775v-28h696v28H132Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalTopW100Filled.displayName = 'OnesyIconMaterialAlignVerticalTopW100Filled';

export default IconMaterialAlignVerticalTopW100Filled;
