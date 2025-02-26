import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWysiwyg = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wysiwyg'

      short_name='Wysiwyg'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-480H200v480Zm120-280q-17 0-28.5-11.5T280-520q0-17 11.5-28.5T320-560h320q17 0 28.5 11.5T680-520q0 17-11.5 28.5T640-480H320Zm0 160q-17 0-28.5-11.5T280-360q0-17 11.5-28.5T320-400h160q17 0 28.5 11.5T520-360q0 17-11.5 28.5T480-320H320Z"/>
    </Icon>
  );
});

IconMaterialWysiwyg.displayName = 'OnesyIconMaterialWysiwyg';

export default IconMaterialWysiwyg;
