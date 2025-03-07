import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialProductivityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProductivityW100Filled'

      short_name='Productivity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M431-642q-44.55 0-76.27-31.72Q323-705.45 323-750t31.73-76.28Q386.45-858 431-858t76.27 31.72Q539-794.55 539-750t-31.73 76.28Q475.55-642 431-642Zm150 0q20-23 29-50.5t9-57.5q0-30-10-57t-28-51q45 0 76.5 31.5T689-750q0 45-31.5 76.5T581-642Zm157.7 401q-62.54 0-106.62-44.08Q588-329.16 588-391.7q0-63.3 44.08-107.8T738.7-544q63.3 0 107.8 44.5T891-391.7q0 62.54-44.5 106.62Q802-241 738.7-241ZM717-292l103-103-20-19-83 82-42-42-20 20 62 62Zm-554-70v-52q0-26 13.5-43.5t36.45-28.59Q262-509 309.5-523.5 357-538 431-538q43 0 76 5.5t62 14.5q-31 31-46 71.5T508-362H163Z"/>
    </Icon>
  );
});

IconMaterialProductivityW100Filled.displayName = 'OnesyIconMaterialProductivityW100Filled';

export default IconMaterialProductivityW100Filled;
