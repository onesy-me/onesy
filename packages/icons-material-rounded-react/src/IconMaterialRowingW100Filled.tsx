import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRowingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RowingW100Filled'

      short_name='Rowing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m703-61-64-64q-5-5-7-10t-2-11v-48L330-494q-9 2-15 3t-17 3v-28q47-6 109-39.5t89-62.5l52-54q8-11 20-16.5t26-5.5q23 0 39.5 16.5T650-638v238q0 29-13 50.5T605-316l-75-75v-221q-41 41-84.5 67.5T360-504l290 290h48q6 0 11 2t10 7l64 64q9 9 9 21t-9 21l-38 38q-9 9-21 9t-21-9ZM350-306 230-186q-5 5-12 5t-12-5q-5-5-5-12t5-12l175-175 79 79H350Zm250-440q-23 0-38.5-15.5T546-800q0-23 15.5-38.5T600-854q23 0 38.5 15.5T654-800q0 23-15.5 38.5T600-746ZM298-488q-6 0-10-4t-4-10q0-6 4-10t10-4q6 0 10 4t4 10q0 6-4 10t-10 4Z"/>
    </Icon>
  );
});

IconMaterialRowingW100Filled.displayName = 'OnesyIconMaterialRowingW100Filled';

export default IconMaterialRowingW100Filled;
