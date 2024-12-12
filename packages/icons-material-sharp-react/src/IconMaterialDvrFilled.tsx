import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDvrFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DvrFilled'

      short_name='Dvr'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-400q17 0 28.5-11.5T320-440q0-17-11.5-28.5T280-480q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400Zm0-160q17 0 28.5-11.5T320-600q0-17-11.5-28.5T280-640q-17 0-28.5 11.5T240-600q0 17 11.5 28.5T280-560Zm80 160h360v-80H360v80Zm0-160h360v-80H360v80Zm-40 440v-80H80v-640h800v640H640v80H320Z"/>
    </Icon>
  );
});

IconMaterialDvrFilled.displayName = 'OnesyIconMaterialDvrFilled';

export default IconMaterialDvrFilled;
