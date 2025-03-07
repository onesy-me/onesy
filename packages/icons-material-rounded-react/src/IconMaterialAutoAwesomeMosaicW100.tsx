import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoAwesomeMosaicW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMosaicW100'

      short_name='AutoAwesomeMosaic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-172H232q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h208v616Zm-28-28v-560H232q-14 0-23 9t-9 23v496q0 14 9 23t23 9h180Zm108-320v-268h208q26 0 43 17t17 43v208H520Zm28-28h212v-180q0-14-9-23t-23-9H548v212Zm-28 376v-268h268v208q0 26-17 43t-43 17H520Zm28-28h180q14 0 23-9t9-23v-180H548v212ZM412-480Zm136-68Zm0 136Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMosaicW100.displayName = 'OnesyIconMaterialAutoAwesomeMosaicW100';

export default IconMaterialAutoAwesomeMosaicW100;
