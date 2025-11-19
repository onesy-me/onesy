import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEarbudRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarbudRight'

      short_name='EarbudRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80v-400h-80v-80h160v400h80v-400h120v-160H400v-80h440v320H720v400H480ZM360-400q-100 0-170-70t-70-170q0-100 70-170t170-70h40v480h-40Zm-40-85v-310q-54 14-87 57t-33 98q0 55 33 98t87 57Zm280-155Zm-280 0Z"/>
    </Icon>
  );
});

IconMaterialEarbudRight.displayName = 'OnesyIconMaterialEarbudRight';

export default IconMaterialEarbudRight;
