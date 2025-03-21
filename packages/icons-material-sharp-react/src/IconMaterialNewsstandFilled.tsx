import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNewsstandFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewsstandFilled'

      short_name='Newsstand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-80h800v80H80Zm80-160v-320h80v320h-80Zm160 0v-480h80v480h-80Zm160 0v-480h80v480h-80Zm280 0L600-600l70-40 160 280-70 40Z"/>
    </Icon>
  );
});

IconMaterialNewsstandFilled.displayName = 'OnesyIconMaterialNewsstandFilled';

export default IconMaterialNewsstandFilled;
