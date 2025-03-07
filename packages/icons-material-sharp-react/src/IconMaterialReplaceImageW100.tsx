import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReplaceImageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplaceImageW100'

      short_name='ReplaceImage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M384-220h192l-63-83-47 55-31-41-51 69Zm-92 88v-376h376v376H292Zm28-28h320v-320H320v320ZM183-600q27-101 109.5-164.5T480-828q91 0 166.5 49T760-648v-128h28v176H612v-28h126q-32-78-102.5-125T480-800q-94 0-168 55T212-600h-29Zm137 440v-320 320Z"/>
    </Icon>
  );
});

IconMaterialReplaceImageW100.displayName = 'OnesyIconMaterialReplaceImageW100';

export default IconMaterialReplaceImageW100;
