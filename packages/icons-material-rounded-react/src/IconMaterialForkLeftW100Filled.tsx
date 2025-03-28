import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForkLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForkLeftW100Filled'

      short_name='ForkLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m546-733-80 80q-4 4-9.5 4.5T446-653q-5-5-5-10t5-10l93-93q9-9 21-9t21 9l93 93q4 4 4.5 9.5T674-653q-5 5-10 5t-10-5l-80-80v547q0 6-4 10t-10 4q-6 0-10-4t-4-10v-122q-20-76-70-113.5T367-459q-25 0-51 2.5t-50 6.5l80 80q4 4 4.5 9.5T346-350q-5 5-10 5t-10-5l-93-93q-9-9-9-21t9-21l93-93q4-4 9.5-4.5T346-578q5 5 5 10t-5 10l-80 80q24-4 49-6t52-2q58 0 103.5 27t75.5 81v-355Z"/>
    </Icon>
  );
});

IconMaterialForkLeftW100Filled.displayName = 'OnesyIconMaterialForkLeftW100Filled';

export default IconMaterialForkLeftW100Filled;
