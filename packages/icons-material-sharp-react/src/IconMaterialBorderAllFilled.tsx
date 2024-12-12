import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderAllFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderAllFilled'

      short_name='BorderAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-120v-320h320v320H520Zm0-400v-320h320v320H520Zm-400 0v-320h320v320H120Zm0 400v-320h320v320H120Z"/>
    </Icon>
  );
});

IconMaterialBorderAllFilled.displayName = 'OnesyIconMaterialBorderAllFilled';

export default IconMaterialBorderAllFilled;
