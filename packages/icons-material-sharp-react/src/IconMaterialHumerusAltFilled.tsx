import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHumerusAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumerusAltFilled'

      short_name='HumerusAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m80-449 220-351q75 37 139 101.5T535-564q36-38 79.5-61T736-668q46-13 79.5-25t64.5-27v386L580-145q-19 12-40.5 18.5T494-120q-30 0-58-11.5T385-164L80-449Zm320 129q17 0 28.5-11.5T440-360v-4q0-2-1-4 17 0 29-11.5t12-28.5q0-17-11.5-28.5T440-448q-8 0-15.5 3.5T412-436L309-552q5-5 8-12.5t3-15.5q0-17-11.5-28.5T280-620q-17 0-28.5 11.5T240-580v4q0 2 1 4-17 0-29 11.5T200-532q0 17 11.5 28.5T240-492q9 0 16.5-3.5T269-505l103 116q-6 5-9 13t-3 16q0 17 11.5 28.5T400-320Z"/>
    </Icon>
  );
});

IconMaterialHumerusAltFilled.displayName = 'OnesyIconMaterialHumerusAltFilled';

export default IconMaterialHumerusAltFilled;
