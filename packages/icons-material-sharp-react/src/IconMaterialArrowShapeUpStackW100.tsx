import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowShapeUpStackW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowShapeUpStackW100'

      short_name='ArrowShapeUpStack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M384-212v-119H212l268-282 268 282H576v119H384Zm28-27h136v-120h133L480-571 279-359h133v120ZM212-518l268-282 268 282h-39L480-759 251-518h-39Zm268 159Z"/>
    </Icon>
  );
});

IconMaterialArrowShapeUpStackW100.displayName = 'OnesyIconMaterialArrowShapeUpStackW100';

export default IconMaterialArrowShapeUpStackW100;
