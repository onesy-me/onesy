import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalShades = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalShades'

      short_name='VerticalShades'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200h40v-560q0-33 23.5-56.5T240-840h480q33 0 56.5 23.5T800-760v560h40q17 0 28.5 11.5T880-160q0 17-11.5 28.5T840-120H120Zm120-80h80v-560h-80v560Zm160 0h160v-560H400v560Zm240 0h80v-560h-80v560Zm-400 0v-560 560Zm480 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialVerticalShades.displayName = 'OnesyIconMaterialVerticalShades';

export default IconMaterialVerticalShades;
