import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettopComponentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettopComponentFilled'

      short_name='SettopComponent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280q-33 0-56.5-23.5T80-360v-240q0-33 23.5-56.5T160-680h640q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H160Zm80-160h160q17 0 28.5-11.5T440-480q0-17-11.5-28.5T400-520H240q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440Zm320 0q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520q-17 0-28.5 11.5T520-480q0 17 11.5 28.5T560-440Zm120 0q17 0 28.5-11.5T720-480q0-17-11.5-28.5T680-520q-17 0-28.5 11.5T640-480q0 17 11.5 28.5T680-440Z"/>
    </Icon>
  );
});

IconMaterialSettopComponentFilled.displayName = 'OnesyIconMaterialSettopComponentFilled';

export default IconMaterialSettopComponentFilled;
