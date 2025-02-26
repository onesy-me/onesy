import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFirstPageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FirstPageW100'

      short_name='FirstPage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-266v-428h28v428h-28Zm414-10L476-480l204-204 20 20-184 184 184 184-20 20Z"/>
    </Icon>
  );
});

IconMaterialFirstPageW100.displayName = 'OnesyIconMaterialFirstPageW100';

export default IconMaterialFirstPageW100;
