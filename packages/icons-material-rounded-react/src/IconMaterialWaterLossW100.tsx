import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterLossW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterLossW100'

      short_name='WaterLoss'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M442-346q-49 0-95 10.5T259-304l14 116q2 12 10.5 20t21.5 8h351q13 0 21.5-8t10.5-20l13-118q-35 0-66-5.5T551-332q-26-8-53.5-11t-55.5-3Zm-186 14q45-21 91.5-31.5T443-374q29 0 58 3.5t57 11.5q54 15 82 20t61 5h3l52-466H203l53 468Zm49 200q-24 0-41-15t-19-38l-69-606q-2-15 8.5-26t25.5-11h540q15 0 25.5 11t8.5 26l-68 606q-2 23-19 38t-41 15H305Zm137-28h246-415 169Z"/>
    </Icon>
  );
});

IconMaterialWaterLossW100.displayName = 'OnesyIconMaterialWaterLossW100';

export default IconMaterialWaterLossW100;
