import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowDropUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropUpFilled'

      short_name='ArrowDropUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M328-400q-9 0-14.5-6t-5.5-14q0-2 6-14l145-145q5-5 10-7t11-2q6 0 11 2t10 7l145 145q3 3 4.5 6.5t1.5 7.5q0 8-5.5 14t-14.5 6H328Z"/>
    </Icon>
  );
});

IconMaterialArrowDropUpFilled.displayName = 'OnesyIconMaterialArrowDropUpFilled';

export default IconMaterialArrowDropUpFilled;
