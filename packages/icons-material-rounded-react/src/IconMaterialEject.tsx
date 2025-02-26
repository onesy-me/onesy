import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEject = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Eject'

      short_name='Eject'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280h480q17 0 28.5 11.5T760-240q0 17-11.5 28.5T720-200H240q-17 0-28.5-11.5T200-240q0-17 11.5-28.5T240-280Zm15-142 192-288q6-9 14.5-13.5T480-728q10 0 18.5 4.5T513-710l192 288q14 20 2 41t-36 21H289q-24 0-36-21t2-41Zm225-18Zm-118 0h236L480-616 362-440Z"/>
    </Icon>
  );
});

IconMaterialEject.displayName = 'OnesyIconMaterialEject';

export default IconMaterialEject;
