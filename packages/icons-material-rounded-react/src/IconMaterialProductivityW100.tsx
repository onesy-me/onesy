import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialProductivityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProductivityW100'

      short_name='Productivity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M163-362v-52q0-26 13.5-43.5t36.45-28.59Q262-509 309.5-523.5 357-538 431-538q43 0 76 5.5t62 14.5q-5.29 5.06-9.64 11.03Q555-501 551-496q-26-7-55.5-10.5T431-510q-66 0-114 12.5T227-462q-21 11-28.5 22t-7.5 26v24h318q-1 6.67-1 13.33V-362H163Zm268-28Zm0-252q-44.55 0-76.27-31.72Q323-705.45 323-750t31.73-76.28Q386.45-858 431-858t76.27 31.72Q539-794.55 539-750t-31.73 76.28Q475.55-642 431-642Zm0-28q33 0 56.5-23.5T511-750q0-33-23.5-56.5T431-830q-33 0-56.5 23.5T351-750q0 33 23.5 56.5T431-670Zm0-80Zm258 0q0 44.55-31.72 76.28Q625.55-642 581-642q20-23 29-50.69 9-27.68 9-57.5Q619-780 609-807q-10-27-28-51 44.55 0 76.28 31.72Q689-794.55 689-750Zm49.7 509q-62.54 0-106.62-44.08Q588-329.16 588-391.7q0-63.3 44.08-107.8T738.7-544q63.3 0 107.8 44.5T891-391.7q0 62.54-44.5 106.62Q802-241 738.7-241ZM717-292l103-103-20-19-83 82-42-42-20 20 62 62Z"/>
    </Icon>
  );
});

IconMaterialProductivityW100.displayName = 'OnesyIconMaterialProductivityW100';

export default IconMaterialProductivityW100;
