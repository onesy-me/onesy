import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSoupKitchenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SoupKitchenFilled'

      short_name='SoupKitchen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M390-80q-101 0-177.5-67.5T120-315q-2-18 10-31.5t30-13.5h421l44-414q5-45 38.5-75.5T744-880q50 0 85 35t35 85v10q0 17-11.5 28.5T824-710q-17 0-28.5-11.5T784-750v-10q0-17-11.5-28.5T744-800q-16 0-27 10.5T704-764l-46 435q-11 106-87 177.5T390-80ZM247-420q-17 0-24-9.5t-5-25.5q1-9 1.5-14.5t.5-10.5q0-30-20-76t-20-69q0-9 1-18.5t6-18.5q4-8 11-13t15-5q16 0 24.5 9.5T242-645q-2 9-2 20 0 23 20 69t20 76q0 15-2 25t-5 17q-4 8-11 13t-15 5Zm260 0q-17 0-24-9.5t-5-25.5q1-9 1.5-14.5t.5-10.5q0-30-20-76t-20-69q0-9 1-18.5t6-18.5q4-8 11-13t15-5q16 0 24.5 9.5T502-645q-2 9-2 20 0 23 20 69t20 76q0 15-2 25t-5 17q-4 8-11 13t-15 5Zm-130 0q-17 0-24-9.5t-5-25.5q1-9 1.5-14.5t.5-10.5q0-30-20-76t-20-69q0-9 1-18.5t6-18.5q4-8 11-13t15-5q16 0 24.5 9.5T372-645q-2 9-2 20 0 23 20 69t20 76q0 15-2 25t-5 17q-4 8-11 13t-15 5Z"/>
    </Icon>
  );
});

IconMaterialSoupKitchenFilled.displayName = 'OnesyIconMaterialSoupKitchenFilled';

export default IconMaterialSoupKitchenFilled;
