import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialConveyorBelt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConveyorBelt'

      short_name='ConveyorBelt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-50 0-85-35t-35-85q0-50 35-85t85-35h560q50 0 85 35t35 85q0 50-35 85t-85 35H200Zm0-80h560q17 0 28.5-11.5T800-240q0-17-11.5-28.5T760-280H200q-17 0-28.5 11.5T160-240q0 17 11.5 28.5T200-200Zm200-240q-17 0-28.5-11.5T360-480v-320q0-17 11.5-28.5T400-840h320q17 0 28.5 11.5T760-800v320q0 17-11.5 28.5T720-440H400Zm40-80h240v-240H440v240Zm-322-2q-16 0-27-11.5T80-561q0-16 11.5-27t27.5-11h120q16 0 27 11t11 27q0 16-11 27.5T239-522H118Zm402-118h81q17 0 28-11.5t11-28.5q0-17-11-28t-28-11h-82q-17 0-28 11t-11 28q0 17 11.5 28.5T520-640Zm-321 0q-17 0-28-11.5T160-680q0-17 11.5-28t28.5-11h38q17 0 28 11t11 28q0 17-11 28.5T238-640h-39Zm241 120v-240 240Z"/>
    </Icon>
  );
});

IconMaterialConveyorBelt.displayName = 'OnesyIconMaterialConveyorBelt';

export default IconMaterialConveyorBelt;
