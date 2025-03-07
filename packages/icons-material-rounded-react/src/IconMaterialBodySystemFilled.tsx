import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBodySystemFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BodySystemFilled'

      short_name='BodySystem'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m442-434-35 162q-1 7-5 13t-9 10q-5 4-11.5 6.5T367-240q-20 0-32.5-15t-8.5-35l66-314-72 28v56q0 17-11.5 28.5T280-480q-17 0-28.5-11.5T240-520v-108l202-85q14-6 29.5-7.5T501-717q14 5 26.5 14t20.5 23l40 64q23 37 57 60.5t76 31.5q17 3 28 15t11 29q0 17-12 28t-29 9q-56-8-101-34t-78-63l-24 60 84 80v120q0 17-11.5 28.5T560-240q-17 0-28.5-11.5T520-280v-82l-78-72Zm98-306q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-108 51.5-196.5T268-819q14-8 29-3.5t23 19.5q8 14 3.5 30T305-748q-66 43-105.5 113T160-480q0 134 93 227t227 93q125 0 214.5-81T798-443q2-16 14-26.5t28-10.5q17 0 28.5 11t9.5 28q-15 153-127.5 257T480-80Z"/>
    </Icon>
  );
});

IconMaterialBodySystemFilled.displayName = 'OnesyIconMaterialBodySystemFilled';

export default IconMaterialBodySystemFilled;
