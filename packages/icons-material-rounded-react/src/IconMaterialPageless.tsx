import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPageless = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pageless'

      short_name='Pageless'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-80H120q-33 0-56.5-23.5T40-160v-200q0-17 11.5-28.5T80-400q17 0 28.5 11.5T120-360v200h240q17 0 28.5 11.5T400-120q0 17-11.5 28.5T360-80Zm240-80h240v-200q0-17 11.5-28.5T880-400q17 0 28.5 11.5T920-360v200q0 33-23.5 56.5T840-80H600q-17 0-28.5-11.5T560-120q0-17 11.5-28.5T600-160ZM40-600v-200q0-33 23.5-56.5T120-880h240q17 0 28.5 11.5T400-840q0 17-11.5 28.5T360-800H120v200q0 17-11.5 28.5T80-560q-17 0-28.5-11.5T40-600Zm800 0v-200H600q-17 0-28.5-11.5T560-840q0-17 11.5-28.5T600-880h240q33 0 56.5 23.5T920-800v200q0 17-11.5 28.5T880-560q-17 0-28.5-11.5T840-600Z"/>
    </Icon>
  );
});

IconMaterialPageless.displayName = 'OnesyIconMaterialPageless';

export default IconMaterialPageless;
