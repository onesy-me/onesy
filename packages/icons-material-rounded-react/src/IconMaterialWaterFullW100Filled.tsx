import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterFullW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterFullW100Filled'

      short_name='WaterFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M227-596q50-29 104.5-43.5T443-654q29 0 58 3.5t57 11.5q54 15 82 20t61 5h35l20-186H203l24 204Zm78 464q-24 0-41-15t-19-38l-69-606q-2-15 8.5-26t25.5-11h540q15 0 25.5 11t8.5 26l-68 606q-2 23-19 38t-41 15H305Z"/>
    </Icon>
  );
});

IconMaterialWaterFullW100Filled.displayName = 'OnesyIconMaterialWaterFullW100Filled';

export default IconMaterialWaterFullW100Filled;
