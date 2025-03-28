import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatColorFillW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorFillW100'

      short_name='FormatColorFill'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m269-843 19-21 363 363-231 234-231-235 212-209-132-132Zm152 152L228-500h384L421-691Zm317 447q-23 0-38.5-15.5T684-298q0-17 8.5-32.5T710-360q7-10 14-19t14-19q7 10 14 19t14 19q9 14 17.5 29.5T792-298q0 23-15.5 38.5T738-244ZM80 0v-56h800V0H80Z"/>
    </Icon>
  );
});

IconMaterialFormatColorFillW100.displayName = 'OnesyIconMaterialFormatColorFillW100';

export default IconMaterialFormatColorFillW100;
