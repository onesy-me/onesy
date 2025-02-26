import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDualScreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DualScreenW100'

      short_name='DualScreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m280-257 240 97v-545l-240-95v543Zm-28 20v-591h30l266 105v605L252-237Zm268-15v-28h160v-520H282v-28h426v576H520Zm-240-5v-543 543Z"/>
    </Icon>
  );
});

IconMaterialDualScreenW100.displayName = 'OnesyIconMaterialDualScreenW100';

export default IconMaterialDualScreenW100;
