import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVignette2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Vignette2Filled'

      short_name='Vignette2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm360-120q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Z"/>
    </Icon>
  );
});

IconMaterialVignette2Filled.displayName = 'OnesyIconMaterialVignette2Filled';

export default IconMaterialVignette2Filled;
