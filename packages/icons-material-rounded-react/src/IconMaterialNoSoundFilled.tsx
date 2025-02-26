import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoSoundFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSoundFilled'

      short_name='NoSound'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m720-424-76 76q-11 11-28 11t-28-11q-11-11-11-28t11-28l76-76-76-76q-11-11-11-28t11-28q11-11 28-11t28 11l76 76 76-76q11-11 28-11t28 11q11 11 11 28t-11 28l-76 76 76 76q11 11 11 28t-11 28q-11 11-28 11t-28-11l-76-76Zm-440 64H160q-17 0-28.5-11.5T120-400v-160q0-17 11.5-28.5T160-600h120l132-132q19-19 43.5-8.5T480-703v446q0 27-24.5 37.5T412-228L280-360Z"/>
    </Icon>
  );
});

IconMaterialNoSoundFilled.displayName = 'OnesyIconMaterialNoSoundFilled';

export default IconMaterialNoSoundFilled;
