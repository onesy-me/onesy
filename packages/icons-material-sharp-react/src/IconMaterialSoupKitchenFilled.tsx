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
      <path d="M204-420q8-10 12-24.5t4-35.5q0-30-20-76t-20-69q0-12 2.5-25t13.5-30h60q-11 17-13.5 30t-2.5 25q0 23 20 69t20 76q0 21-4 34.5T264-420h-60Zm260 0q8-10 12-24.5t4-35.5q0-30-20-76t-20-69q0-12 2.5-25t13.5-30h60q-11 17-13.5 30t-2.5 25q0 23 20 69t20 76q0 21-4 34.5T524-420h-60Zm-130 0q8-10 12-24.5t4-35.5q0-30-20-76t-20-69q0-12 2.5-25t13.5-30h60q-11 17-13.5 30t-2.5 25q0 23 20 69t20 76q0 21-4 34.5T394-420h-60Zm56 340q-101 0-177.5-67.5T120-315q-2-18 10-31.5t30-13.5h421l44-414q5-45 38.5-75.5T744-880q50 0 85 35t35 85q0 14-2.5 37l-2.5 23-79-10 2-20.5q2-20.5 2-29.5 0-17-11.5-28.5T744-800q-16 0-27 10.5T704-764l-46 435q-11 106-87 177.5T390-80Z"/>
    </Icon>
  );
});

IconMaterialSoupKitchenFilled.displayName = 'OnesyIconMaterialSoupKitchenFilled';

export default IconMaterialSoupKitchenFilled;
