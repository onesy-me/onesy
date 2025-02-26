import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatTextOverflowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextOverflowW100'

      short_name='FormatTextOverflow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M225-186v-588h28v588h-28Zm405-189-19-20 71-71H373v-28h309l-71-71 19-20 105 105-105 105ZM485-186v-160h28v160h-28Zm0-428v-160h28v160h-28Z"/>
    </Icon>
  );
});

IconMaterialFormatTextOverflowW100.displayName = 'OnesyIconMaterialFormatTextOverflowW100';

export default IconMaterialFormatTextOverflowW100;
