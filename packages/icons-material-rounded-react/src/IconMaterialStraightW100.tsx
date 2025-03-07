import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStraightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightW100'

      short_name='Straight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m466-736-82 82q-3.5 4-8.75 4t-9.42-4q-3.83-3.67-3.83-9.33 0-5.67 4-9.67l93-94q9-9 21-9t21 9l94 94q4 4 4 9t-4 9.17q-3.67 3.83-9.33 3.83-5.67 0-9.67-4l-82-81v550q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-550Z"/>
    </Icon>
  );
});

IconMaterialStraightW100.displayName = 'OnesyIconMaterialStraightW100';

export default IconMaterialStraightW100;
