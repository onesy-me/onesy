import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterFullW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterFullW100'

      short_name='WaterFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M442-626q-57 0-110.5 15T230-567l43 379q2 12 10.5 20t21.5 8h351q13 0 21.5-8t10.5-20l45-398h-31q-36 0-67-5.5T551-612q-26-8-53.5-11t-55.5-3Zm-215 30q50-29 104.5-43.5T443-654q29 0 58 3.5t57 11.5q54 15 82 20t61 5h35l20-186H203l24 204Zm78 464q-24 0-41-15t-19-38l-69-606q-2-15 8.5-26t25.5-11h540q15 0 25.5 11t8.5 26l-68 606q-2 23-19 38t-41 15H305Zm137-28h246-415 169Z"/>
    </Icon>
  );
});

IconMaterialWaterFullW100.displayName = 'OnesyIconMaterialWaterFullW100';

export default IconMaterialWaterFullW100;
