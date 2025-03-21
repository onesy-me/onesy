import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVisibilityOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VisibilityOffW100Filled'

      short_name='VisibilityOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M778-142 636-284q-36 18-75.5 25t-80.5 7q-114 0-209.5-59.5T116-468q-5-8-7-16t-2-16q0-8 2.5-16.5T117-532q27-41 57-78.5t70-65.5L142-778q-4-4-4.5-9.5T142-798q5-5 10-5t10 5l636 636q4 4 4.5 9.5T798-142q-5 5-10 5t-10-5ZM480-364q17 0 32.5-2.5T542-378L358-562q-8 14-11 29.5t-3 32.5q0 57 39.5 96.5T480-364Zm0-384q115 0 211.5 59.5T846-530q4 7 6.5 14.5T855-500q0 8-2.5 15.5T846-470q-17 31-38 58t-47 51q-10 10-24 9t-24-11l-90-89q-5-5-7-11t-1-13q1-6 1-12v-12q0-57-39.5-96.5T480-636q-6 0-11.5.5T458-634q-7 2-14 0t-12-7l-44-44q-14-14-9.5-33t24.5-24q19-4 38-5t39-1Zm75 170q14 14 22.5 32.5T588-507q1 6-4.5 8.5T573-501l-92-91q-5-5-2.5-10.5t8.5-5.5q20 1 37 8.5t31 21.5Z"/>
    </Icon>
  );
});

IconMaterialVisibilityOffW100Filled.displayName = 'OnesyIconMaterialVisibilityOffW100Filled';

export default IconMaterialVisibilityOffW100Filled;
