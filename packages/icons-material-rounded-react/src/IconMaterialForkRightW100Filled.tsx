import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForkRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForkRightW100Filled'

      short_name='ForkRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-172q-6 0-10-4t-4-10v-547l-80 80q-5 5-10 5t-10-5q-5-5-4.5-10.5t4.5-9.5l93-93q9-9 21-9t21 9l93 93q5 5 5 10t-5 10q-5 5-10.5 4.5T494-653l-80-80v355q30-54 75.5-81T593-486q27 0 52 2t49 6l-80-80q-5-5-5-10t5-10q5-5 10.5-4.5t9.5 4.5l93 93q9 9 9 21t-9 21l-93 93q-5 5-10 5t-10-5q-5-5-4.5-10.5t4.5-9.5l80-80q-24-4-50-6.5t-51-2.5q-59 0-109 37.5T414-308v122q0 6-4 10t-10 4Z"/>
    </Icon>
  );
});

IconMaterialForkRightW100Filled.displayName = 'OnesyIconMaterialForkRightW100Filled';

export default IconMaterialForkRightW100Filled;
