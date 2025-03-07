import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHumerusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumerusW100Filled'

      short_name='Humerus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M362-132q-29 0-49-20.5T292-202q1-14 6-26t15-22l100-99v-181q-1-26-17.5-46T357-612q-37-28-51-53.5T292-719q0-47 32.5-78t80.5-31q26 0 48 6.5t42 20.5q6 4 12 7t12 3q16 0 35-18 15-10 28-14.5t25-4.5q26 0 43.5 17.5T668-767q0 15-6 28.5T645-713l-96 99v264l99 100q10 10 15.5 22.5T669-201q0 29-20 48.5T600-133q-14 0-26-5t-22-15q-14-14-32.5-21.5T481-182q-20 0-38.5 7.5T410-153q-10 10-22 15.5t-26 5.5Z"/>
    </Icon>
  );
});

IconMaterialHumerusW100Filled.displayName = 'OnesyIconMaterialHumerusW100Filled';

export default IconMaterialHumerusW100Filled;
