import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabsFilled'

      short_name='Tabs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h560v-280H200v280Zm280-440h240v-80H480v80Z"/>
    </Icon>
  );
});

IconMaterialTabsFilled.displayName = 'OnesyIconMaterialTabsFilled';

export default IconMaterialTabsFilled;
