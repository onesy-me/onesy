import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSailingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SailingW100Filled'

      short_name='Sailing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m170-446 244-351v351H170Zm366 0q10-30 20-91.5T566-660q0-69-10-127.5T537-883q56 30 104 75t84 101.5Q761-650 784-584t29 138H536ZM360-194q-30 0-61-10t-59-36q-8 8-18 16.5T203-211q-31-24-53-55.5T114-334h732q-14 36-36 67.5T757-211q-9-4-19-12.5T720-240q-28 26-59 36t-61 10q-30 0-61.5-10T480-241q-27 27-58.5 37T360-194ZM106-66v-28h14q32 0 62-10t58-27q29 17 58.5 27T360-94q32 0 61.5-10t58.5-27q29 17 58.5 27T600-94q32 0 62-10t58-27q29 17 58.5 27T840-94h14v28h-14q-28 0-58-8t-62-25q-32 17-62 25t-58 8q-28 0-58-8t-62-25q-32 17-62 25t-58 8q-28 0-58-8t-62-25q-32 17-62 25t-58 8h-14Z"/>
    </Icon>
  );
});

IconMaterialSailingW100Filled.displayName = 'OnesyIconMaterialSailingW100Filled';

export default IconMaterialSailingW100Filled;
