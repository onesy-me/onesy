import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowDropUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropUp'

      short_name='ArrowDropUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m280-400 200-200 200 200H280Z"/>
    </Icon>
  );
});

IconMaterialArrowDropUp.displayName = 'OnesyIconMaterialArrowDropUp';

export default IconMaterialArrowDropUp;
