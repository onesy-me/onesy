import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBoxEditW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxEditW100Filled'

      short_name='BoxEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-25 0-42.5-17.5T172-232v-417q0-11 3.5-20.5T186-687l66-79q8-11 20-16.5t26-5.5h362q14 0 26.5 5.5T707-766l67 81q7 8 10.5 18t3.5 21v60q0 8-5.5 14t-13.5 8q-16 5-30 13t-27 20L588-407v-243H372v208q0 17 14 26t29 1l65-32 99 49-89 89q-8 8-13 19t-5 23v65q0 13-8.5 21.5T442-172H232Zm340-30v-36q0-6 2-11t7-10l202-201q5-4 10-6t10-2q5 0 10.5 2t9.5 6l37 38q4 5 6 10t2 10q0 5-1.5 10t-6.5 10L659-181q-5 5-10 7t-11 2h-36q-13 0-21.5-8.5T572-202Zm231-162 37-38-37-38-38 38 38 38ZM215-678h529l-59-71q-5-5-11.5-8t-13.5-3H299q-7 0-13.5 3t-11.5 8l-59 71Z"/>
    </Icon>
  );
});

IconMaterialBoxEditW100Filled.displayName = 'OnesyIconMaterialBoxEditW100Filled';

export default IconMaterialBoxEditW100Filled;
