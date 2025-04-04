import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWbAutoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbAutoW100'

      short_name='WbAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M221-360h30l30-82h112l30 82h32L347-640h-18L221-360Zm70-106 43.64-122H339l44 122h-92Zm46 214q-95.27 0-161.64-66.31Q109-384.62 109-479.81t66.36-161.69Q241.73-708 337-708q80 0 142 49t80 127l-28-108h32l51.84 224H617l58-224h30l58 224h2l52-224h34l-70 280h-30l-60-230h-2l-60 230h-28l-42-172q26 108-42.5 194T337-252Zm0-28q83 0 141.5-58.5T537-480q0-83-58.5-141.5T337-680q-83 0-141.5 58.5T137-480q0 83 58.5 141.5T337-280Zm0-200Z"/>
    </Icon>
  );
});

IconMaterialWbAutoW100.displayName = 'OnesyIconMaterialWbAutoW100';

export default IconMaterialWbAutoW100;
