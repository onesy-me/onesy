import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowShapeUpStackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowShapeUpStackW100Filled'

      short_name='ArrowShapeUpStack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M384-212v-119H212l268-282 268 282H576v119H384ZM212-518l268-282 268 282h-39L480-759 251-518h-39Z"/>
    </Icon>
  );
});

IconMaterialArrowShapeUpStackW100Filled.displayName = 'OnesyIconMaterialArrowShapeUpStackW100Filled';

export default IconMaterialArrowShapeUpStackW100Filled;
