import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialConveyorBeltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConveyorBeltW100'

      short_name='ConveyorBelt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-224q-29 0-48.5-19.5T132-292q0-29 19.5-48.5T200-360h560q29 0 48.5 19.5T828-292q0 29-19.5 48.5T760-224H200Zm0-28h560q17 0 28.5-11.5T800-292q0-17-11.5-28.5T760-332H200q-17 0-28.5 11.5T160-292q0 17 11.5 28.5T200-252Zm262-188v-296h296v296H462Zm28-28h240v-240H490v240Zm-358-26v-28h250v28H132Zm398-120h160v-28H530v28Zm-318 0h170v-28H212v28Zm278 146v-240 240Z"/>
    </Icon>
  );
});

IconMaterialConveyorBeltW100.displayName = 'OnesyIconMaterialConveyorBeltW100';

export default IconMaterialConveyorBeltW100;
