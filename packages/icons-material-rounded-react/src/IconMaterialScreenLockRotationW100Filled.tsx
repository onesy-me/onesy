import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenLockRotationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockRotationW100Filled'

      short_name='ScreenLockRotation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M669-776h80v-40q0-17-11.5-28.5T709-856q-17 0-28.5 11.5T669-816v40ZM516-86q-88 0-166-33.5t-136.5-92Q155-270 121.5-348T88-514q0-6 4-10t10-4q6 0 10 4t4 10q0 82 31.5 155t86 127.5Q288-177 361-145.5T516-114L378-252q-4-4-4.5-9.5T378-272q5-5 10-5t10 5l156 156q8 8 5 17t-14 11q-8 1-15 1.5t-14 .5Zm81-175q-12 0-23-4.5T554-278L278-554q-8-9-12.5-20t-4.5-23q0-12 4.5-23.5T278-640l113-113q9-9 20-13t22-4q11 0 22 4t20 13l7 7q8 8 13 19.5t5 23.5v67q0 57 39.5 96.5T636-500h67q12 0 23.5 5t19.5 13l7 7q9 9 13 20t4 22q0 11-4 22t-13 20L640-278q-8 8-19.5 12.5T597-261Zm39-339q-14 0-25-11t-11-25v-104q0-14 11-25t25-11h5v-40q0-29 19.5-48.5T709-884q29 0 48.5 19.5T777-816v40h5q14 0 24 11t10 25v104q0 14-11 25t-25 11H636Z"/>
    </Icon>
  );
});

IconMaterialScreenLockRotationW100Filled.displayName = 'OnesyIconMaterialScreenLockRotationW100Filled';

export default IconMaterialScreenLockRotationW100Filled;
