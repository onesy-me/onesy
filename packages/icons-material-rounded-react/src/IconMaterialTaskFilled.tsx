import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTaskFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaskFilled'

      short_name='Task'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80H240Zm280-560q0 17 11.5 28.5T560-600h160L520-800v160Zm-83 285-56-56q-6-6-13-9t-14.5-3q-7.5 0-15 3t-13.5 9q-12 12-12 28.5t12 28.5l85 86q6 6 13 8.5t15 2.5q8 0 15-2.5t13-8.5l169-169q12-12 12-29t-12-29q-12-12-29-12t-29 12L437-355Z"/>
    </Icon>
  );
});

IconMaterialTaskFilled.displayName = 'OnesyIconMaterialTaskFilled';

export default IconMaterialTaskFilled;
