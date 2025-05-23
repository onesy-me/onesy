import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterBottle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterBottle'

      short_name='WaterBottle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M393-160h214l29-317q-10-9-17.5-20T606-520H394q-5 12-12 23t-18 20l29 317Zm-11-520-11 44q7 8 12.5 17t9.5 19h214q4-10 9-19t13-17l-11-44H382ZM320-80l-40-440 19-10q8-5 14-12t6-17q0-9-4-17t-12-12l-23-12 40-160h140v-40h-60v-80h200v80h-60v40h140l39 158-23 12q-8 4-12 12t-4 17q0 10 6 17.5t14 12.5l19 9-39 442H320Zm180-440Zm0-80Z"/>
    </Icon>
  );
});

IconMaterialWaterBottle.displayName = 'OnesyIconMaterialWaterBottle';

export default IconMaterialWaterBottle;
