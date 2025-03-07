import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDialerSip = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DialerSip'

      short_name='DialerSip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M798-120q-125 0-247.5-54T328-328Q228-428 174-550t-54-248v-42h236l37 201-114 115q22 39 49 74t58 65q29 29 63.5 55.5T524-280l116-116 200 41v235h-42ZM241-600l66-66-17-94h-89q5 45 15 84.5t25 75.5Zm358 358q40 17 80.5 27t80.5 13v-88l-94-19-67 67ZM241-600Zm358 358ZM480-640v-40h80v-40h-80v-120h120v40h-80v40h80v120H480Zm160 0v-200h40v200h-40Zm80 0v-200h120v120h-80v80h-40Zm40-120h40v-40h-40v40Z"/>
    </Icon>
  );
});

IconMaterialDialerSip.displayName = 'OnesyIconMaterialDialerSip';

export default IconMaterialDialerSip;
