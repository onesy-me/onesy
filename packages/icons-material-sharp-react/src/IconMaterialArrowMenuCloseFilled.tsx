import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowMenuCloseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowMenuCloseFilled'

      short_name='ArrowMenuClose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-280v-400L240-480l200 200Zm80 160h80v-720h-80v720Z"/>
    </Icon>
  );
});

IconMaterialArrowMenuCloseFilled.displayName = 'OnesyIconMaterialArrowMenuCloseFilled';

export default IconMaterialArrowMenuCloseFilled;
