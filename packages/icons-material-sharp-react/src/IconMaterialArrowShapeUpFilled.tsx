import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowShapeUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowShapeUpFilled'

      short_name='ArrowShapeUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-120v-240H120l360-440 360 440H640v240H320Z"/>
    </Icon>
  );
});

IconMaterialArrowShapeUpFilled.displayName = 'OnesyIconMaterialArrowShapeUpFilled';

export default IconMaterialArrowShapeUpFilled;
