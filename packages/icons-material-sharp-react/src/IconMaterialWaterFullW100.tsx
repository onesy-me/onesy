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
      <path d="M442-626q-57 0-110.5 15T230-567l46 407h409l48-426h-31q-36 0-67-5.5T551-612q-26-8-53.5-11t-55.5-3Zm-215 30q50-29 104.5-43.5T443-654q29 0 58 3.5t57 11.5q54 15 82 20t61 5h35l20-186H203l24 204Zm24 464-79-696h616l-78 696H251Zm191-28h243-409 166Z"/>
    </Icon>
  );
});

IconMaterialWaterFullW100.displayName = 'OnesyIconMaterialWaterFullW100';

export default IconMaterialWaterFullW100;
