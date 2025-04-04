import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWrongLocationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrongLocationW100'

      short_name='WrongLocation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-828h10.09q4.91 0 9.91.67V-800q-5-.5-10-.75t-10-.25q-106 0-175.5 72.5T235-546q0 75 67 179t178 198q107-92 174-193.5T724-540h29q-3 78-63.5 174T511-159q-6.64 6-15.09 9-8.46 3-16.91 3-8 0-16-2.5t-15-8.5q-36-33-78-78t-78.5-96.5q-36.5-51.5-61-106T206-546q0-120 79-201t195-81Zm0 274Zm234-180 74 74q4 4 9.5 4.5T808-660q5-5 5-10t-5-10l-74-74 74-74q4-4 4.5-9.5T808-848q-5-5-10-5t-10 5l-74 74-74-74q-4-4-9.5-4.5T620-848q-5 5-5 10t5 10l74 74-74 74q-4 4-4.5 9.5T620-660q5 5 10 5t10-5l74-74ZM480.18-494q24.82 0 42.32-17.68 17.5-17.67 17.5-42.5 0-24.82-17.68-42.32-17.67-17.5-42.5-17.5-24.82 0-42.32 17.68-17.5 17.67-17.5 42.5 0 24.82 17.68 42.32 17.67 17.5 42.5 17.5Z"/>
    </Icon>
  );
});

IconMaterialWrongLocationW100.displayName = 'OnesyIconMaterialWrongLocationW100';

export default IconMaterialWrongLocationW100;
