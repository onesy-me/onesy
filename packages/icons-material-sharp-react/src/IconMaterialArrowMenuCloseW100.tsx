import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowMenuCloseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowMenuCloseW100'

      short_name='ArrowMenuClose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-351v-257L299-480l121 129Zm100 179h28v-616h-28v616Z"/>
    </Icon>
  );
});

IconMaterialArrowMenuCloseW100.displayName = 'OnesyIconMaterialArrowMenuCloseW100';

export default IconMaterialArrowMenuCloseW100;
