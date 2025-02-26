import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDvrW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DvrW100'

      short_name='Dvr'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-420q8.5 0 14.25-5.75T300-440q0-8.5-5.75-14.25T280-460q-8.5 0-14.25 5.75T260-440q0 8.5 5.75 14.25T280-420Zm0-160q8.5 0 14.25-5.75T300-600q0-8.5-5.75-14.25T280-620q-8.5 0-14.25 5.75T260-600q0 8.5 5.75 14.25T280-580Zm86 154h328v-28H366v28Zm0-160h328v-28H366v28Zm6 414v-80H132v-536h696v536H588v80H372ZM160-280h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialDvrW100.displayName = 'OnesyIconMaterialDvrW100';

export default IconMaterialDvrW100;
