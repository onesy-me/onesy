import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowRightAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightAltFilled'

      short_name='ArrowRightAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/>
    </Icon>
  );
});

IconMaterialArrowRightAltFilled.displayName = 'OnesyIconMaterialArrowRightAltFilled';

export default IconMaterialArrowRightAltFilled;
