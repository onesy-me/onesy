import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnknown5 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Unknown5'

      short_name='Unknown5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-480q-17 0-28.5-11.5T160-520q0-17 11.5-28.5T200-560h240q17 0 28.5 11.5T480-520q0 17-11.5 28.5T440-480H200Zm280-320q-17 0-28.5-11.5T440-840q0-17 11.5-28.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80q-80 0-153.5-29.5T196-196q-5-5-8.5-12.5T184-224q0-17 11.5-28.5T224-264q8 0 15.5 3.5T252-252q47 44 106 68t122 24q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800Z"/>
    </Icon>
  );
});

IconMaterialUnknown5.displayName = 'OnesyIconMaterialUnknown5';

export default IconMaterialUnknown5;
