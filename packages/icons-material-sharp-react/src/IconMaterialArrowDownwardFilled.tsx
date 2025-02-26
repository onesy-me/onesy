import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowDownwardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDownwardFilled'

      short_name='ArrowDownward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/>
    </Icon>
  );
});

IconMaterialArrowDownwardFilled.displayName = 'OnesyIconMaterialArrowDownwardFilled';

export default IconMaterialArrowDownwardFilled;
