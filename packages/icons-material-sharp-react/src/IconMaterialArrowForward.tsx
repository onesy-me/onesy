import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowForward = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForward'

      short_name='ArrowForward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
    </Icon>
  );
});

IconMaterialArrowForward.displayName = 'OnesyIconMaterialArrowForward';

export default IconMaterialArrowForward;
