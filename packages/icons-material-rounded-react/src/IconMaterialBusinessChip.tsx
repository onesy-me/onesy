import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBusinessChip = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessChip'

      short_name='BusinessChip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-320h240q17 0 28.5-11.5T640-360v-160q0-17-11.5-28.5T600-560h-40v-40q0-17-11.5-28.5T520-640h-80q-17 0-28.5 11.5T400-600v40h-40q-17 0-28.5 11.5T320-520v160q0 17 11.5 28.5T360-320Zm80-240v-40h80v40h-80ZM320-200q-117 0-198.5-81.5T40-480q0-117 81.5-198.5T320-760h320q117 0 198.5 81.5T920-480q0 117-81.5 198.5T640-200H320Zm0-80h320q83 0 141.5-58.5T840-480q0-83-58.5-141.5T640-680H320q-83 0-141.5 58.5T120-480q0 83 58.5 141.5T320-280Zm160-200Z"/>
    </Icon>
  );
});

IconMaterialBusinessChip.displayName = 'OnesyIconMaterialBusinessChip';

export default IconMaterialBusinessChip;
