import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterBottleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterBottleW100'

      short_name='WaterBottle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M393-160h214l29-317q-15-14-24.5-31.5T600-546H400q-2 20-11.52 37.39Q378.96-491.23 364-477l29 317Zm-11-520-11 44q11 14 19 29.5t10 32.5h200q2-17 9.5-33t19.5-29l-11-44H382Zm-15 548-33-358q17-12 27-30.5t10-39.64q0-19.03-8-35.95Q355-613 341-625l20-83h125v-64h-60v-28h148v28h-60v64h125l19 81q-14 12-22 28.91-8 16.92-8 35.95 0 21.14 9.5 39.64T664-492l-31 360H367Zm133-414Zm0-28Z"/>
    </Icon>
  );
});

IconMaterialWaterBottleW100.displayName = 'OnesyIconMaterialWaterBottleW100';

export default IconMaterialWaterBottleW100;
