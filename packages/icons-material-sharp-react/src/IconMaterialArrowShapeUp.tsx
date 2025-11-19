import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowShapeUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowShapeUp'

      short_name='ArrowShapeUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-120v-240H120l360-440 360 440H640v240H320Zm80-80h160v-240h111L480-674 289-440h111v240Zm80-240Z"/>
    </Icon>
  );
});

IconMaterialArrowShapeUp.displayName = 'OnesyIconMaterialArrowShapeUp';

export default IconMaterialArrowShapeUp;
