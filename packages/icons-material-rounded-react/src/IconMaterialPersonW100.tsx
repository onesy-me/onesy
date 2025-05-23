import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonW100'

      short_name='Person'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-512q-44.55 0-76.27-31.72Q372-575.45 372-620t31.73-76.28Q435.45-728 480-728t76.28 31.72Q588-664.55 588-620t-31.72 76.28Q524.55-512 480-512ZM212-262v-22q0-22 13.5-41.5T262-356q55-26 109.5-39T480-408q54 0 108.5 13T698-356q23 11 36.5 30.5T748-284v22q0 13-8.5 21.5T718-232H242q-13 0-21.5-8.5T212-262Zm28 2h480v-24q0-14-9.5-26.5T684-332q-48-23-99.69-35.5Q532.63-380 480-380t-104.31 12.5Q324-355 276-332q-17 9-26.5 21.5T240-284v24Zm240-280q33 0 56.5-23.5T560-620q0-33-23.5-56.5T480-700q-33 0-56.5 23.5T400-620q0 33 23.5 56.5T480-540Zm0-80Zm0 360Z"/>
    </Icon>
  );
});

IconMaterialPersonW100.displayName = 'OnesyIconMaterialPersonW100';

export default IconMaterialPersonW100;
