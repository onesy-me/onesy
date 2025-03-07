import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTheaters = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Theaters'

      short_name='Theaters'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-200v40q0 17-11.5 28.5T200-120q-17 0-28.5-11.5T160-160v-640q0-17 11.5-28.5T200-840q17 0 28.5 11.5T240-800v40h80v-40q0-17 11.5-28.5T360-840h240q17 0 28.5 11.5T640-800v40h80v-40q0-17 11.5-28.5T760-840q17 0 28.5 11.5T800-800v640q0 17-11.5 28.5T760-120q-17 0-28.5-11.5T720-160v-40h-80v40q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160v-40h-80Zm0-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm400 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80ZM400-200h160v-560H400v560Zm0-560h160-160Z"/>
    </Icon>
  );
});

IconMaterialTheaters.displayName = 'OnesyIconMaterialTheaters';

export default IconMaterialTheaters;
