import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGardenCartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GardenCartFilled'

      short_name='GardenCart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-120q-38 0-65-27.5T200-213v-371l-73-176H80q-17 0-28.5-11.5T40-800q0-17 11.5-28.5T80-840h74q12 0 22 7t15 18l56 135h591q23 0 35 19t1 39L760-399q51 8 85.5 47t34.5 92q0 58-40.5 99T741-120q-59 0-99.5-41T601-260q0-20 5-37t14-33l-131-12-120 180q-13 20-33.5 31T292-120Zm1-81q2 0 9-5l97-144q-49-5-77-23.5T280-412v200q0 5 4 8t9 3Zm447 1q26 0 43-17.5t17-42.5q0-26-17-43t-43-17q-25 0-42.5 17T680-260q0 25 17.5 42.5T740-200Z"/>
    </Icon>
  );
});

IconMaterialGardenCartFilled.displayName = 'OnesyIconMaterialGardenCartFilled';

export default IconMaterialGardenCartFilled;
