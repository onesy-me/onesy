import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenLockRotationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockRotationW100'

      short_name='ScreenLockRotation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M636-600q-14 0-25-11t-11-25v-104q0-14 11-25t25-11h5v-40q0-29 19.5-48.5T709-884q29 0 48.5 19.5T777-816v40h5q14 0 24 11t10 25v104q0 14-11 25t-25 11H636Zm33-176h80v-40q0-17-11.5-28.5T709-856q-17 0-28.5 11.5T669-816v40ZM516-114 378-252q-4-4-4.5-9.5T378-272q5-5 10-5t10 5l156 156q8 8 4.85 17.14Q555.7-89.71 545-88q-8 1-14.91 1.5-6.92.5-14.09.5-88.16 0-166.08-33.5Q272-153 213.5-211.5q-58.5-58.5-92-136.42Q88-425.84 88-514q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97 0 82 31.5 155t86 127.5Q288-177 361-145.5T516-114Zm80.54-147Q585-261 574-265.5T554-278L278-554q-8-9-12.5-20t-4.5-22.54q0-12.37 4.5-23.92Q270-632 278-640l112-112q9-9 20-13t22.54-4q12.37 0 23.92 4Q468-761 476-752l34 34q4 4 4.5 9.5T510-698q-5 5-10 5t-10-5l-34-34q-9-9-23-9t-23 9L298-620q-9 9-9 23t9 23l276 276q9 9 23 9t23-9l112-112q9-9 9-23t-9-23l-30-30q-4-4-4.5-9.5T702-506q5-5 10-5t10 5l30 30q9 8 13 19.54 4 11.55 4 23.92 0 11.54-4 22.54t-13 20L640-278q-8 8-19.54 12.5-11.55 4.5-23.92 4.5ZM515-515Z"/>
    </Icon>
  );
});

IconMaterialScreenLockRotationW100.displayName = 'OnesyIconMaterialScreenLockRotationW100';

export default IconMaterialScreenLockRotationW100;
