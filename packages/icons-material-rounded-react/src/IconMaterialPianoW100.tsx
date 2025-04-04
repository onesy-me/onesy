import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPianoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PianoW100'

      short_name='Piano'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h119v-196h-18q-14 0-23-9t-9-23v-332h-69q-14 0-23 9t-9 23v496q0 14 9 23t23 9Zm377 0h119q14 0 23-9t9-23v-496q0-14-9-23t-23-9h-69v332q0 14-9 23t-23 9h-18v196Zm-230 0h202v-196h-18q-14 0-23-9t-9-23v-332H429v332q0 14-9 23t-23 9h-18v196Z"/>
    </Icon>
  );
});

IconMaterialPianoW100.displayName = 'OnesyIconMaterialPianoW100';

export default IconMaterialPianoW100;
