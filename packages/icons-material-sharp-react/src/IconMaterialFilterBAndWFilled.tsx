import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterBAndWFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterBAndWFilled'

      short_name='FilterBAndW'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-120H120v-720h720v720Zm-640-80h280v-320l280 320v-560H480v240L200-200Z"/>
    </Icon>
  );
});

IconMaterialFilterBAndWFilled.displayName = 'OnesyIconMaterialFilterBAndWFilled';

export default IconMaterialFilterBAndWFilled;
