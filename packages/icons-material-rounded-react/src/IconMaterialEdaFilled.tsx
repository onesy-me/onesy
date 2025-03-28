import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEdaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdaFilled'

      short_name='Eda'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-40q-66 0-113-47t-47-113v-120h218l81 107q22 29 58 32t62-23l182-182 49-30q20-13 44-11t44 16q25 19 27 50t-20 53L632-75q-17 17-39 26t-46 9H280ZM120-400v-360q0-17 11.5-28.5T160-800q17 0 28.5 11.5T200-760v280h80v-360q0-17 11.5-28.5T320-880q17 0 28.5 11.5T360-840v360h80v-400q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v400h80v-320q0-17 11.5-28.5T640-840q17 0 28.5 11.5T680-800v343L482-261l-80-107q-11-15-28-23.5t-36-8.5H120Z"/>
    </Icon>
  );
});

IconMaterialEdaFilled.displayName = 'OnesyIconMaterialEdaFilled';

export default IconMaterialEdaFilled;
