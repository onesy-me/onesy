import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoEncryptionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoEncryptionW100Filled'

      short_name='NoEncryption'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M729-299q-8 3-16.5 2t-15.5-8L465-537q-7-7-8-15.5t2-16.5q3-8 10-13.5t17-5.5h114v-80q0-50-36-85t-88-35q-49 0-82 29t-40 79q-1 6-5 10t-10 3q-6-1-10-5t-3-10q5-57 47.5-95.5T476-816q63 0 107.5 43.5T628-668v80h60q26 0 43 17t17 43v202q0 10-5.5 17T729-299ZM272-132q-26 0-43-17t-17-43v-336q0-26 16-40.5t34-17.5L38-810q-4-4-4.5-9.5T38-830q5-5 10-5t10 5L830-58q4 4 4.5 9.5T830-38q-5 5-10 5t-10-5l-98-98q-9 3-19 3.5t-25 .5H272Zm171-271q-8 8-12 18t-4 21q0 23 15.5 38.5T481-310q11 0 21-4t18-12l-77-77Z"/>
    </Icon>
  );
});

IconMaterialNoEncryptionW100Filled.displayName = 'OnesyIconMaterialNoEncryptionW100Filled';

export default IconMaterialNoEncryptionW100Filled;
