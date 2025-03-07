import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterDropFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDropFilled'

      short_name='WaterDrop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-137 0-228.5-94T160-408q0-62 28-124t70-119q42-57 91-107t91-87q8-8 18.5-11.5T480-860q11 0 21.5 3.5T520-845q42 37 91 87t91 107q42 57 70 119t28 124q0 140-91.5 234T480-80Zm11-120q12-1 20.5-9.5T520-230q0-14-9-22.5t-23-7.5q-41 3-87-22.5T343-375q-2-11-10.5-18t-19.5-7q-14 0-23 10.5t-6 24.5q17 91 80 130t127 35Z"/>
    </Icon>
  );
});

IconMaterialWaterDropFilled.displayName = 'OnesyIconMaterialWaterDropFilled';

export default IconMaterialWaterDropFilled;
