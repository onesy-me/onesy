import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEda = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Eda'

      short_name='Eda'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-880q17 0 28.5 11.5T360-840v320q0 17-11.5 28.5T320-480q-17 0-28.5-11.5T280-520v-320q0-17 11.5-28.5T320-880Zm160-40q17 0 28.5 11.5T520-880v360q0 17-11.5 28.5T480-480q-17 0-28.5-11.5T440-520v-360q0-17 11.5-28.5T480-920Zm120 603v-483q0-17 11.5-28.5T640-840q17 0 28.5 11.5T680-800v436l-80 47Zm-400-3v120q0 33 23.5 56.5T280-120h267q8 0 15-3.5t13-8.5l182-182-226 131q-26 15-56 9t-48-30l-87-116H200Zm80 280q-66 0-113-47t-47-113v-200h220q19 0 36 8.5t28 23.5l86 115 190-111 90-52q21-12 44.5-10.5T858-411q25 19 27 50t-20 53L632-75q-17 17-39 26t-46 9H280Zm-80-360h-80v-360q0-17 11.5-28.5T160-800q17 0 28.5 11.5T200-760v360Zm0-80h400-400Zm80 360h295-295Z"/>
    </Icon>
  );
});

IconMaterialEda.displayName = 'OnesyIconMaterialEda';

export default IconMaterialEda;
