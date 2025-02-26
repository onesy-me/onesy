import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLinkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkW100Filled'

      short_name='Link'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-328H284q-63.08 0-107.54-44.44Q132-416.89 132-479.94q0-63.06 44.46-107.56T284-632h136v28H284q-51 0-87.5 36.5T160-480q0 51 36.5 87.5T284-356h136v28Zm-74-138v-28h268v28H346Zm194 138v-28h136q51 0 87.5-36.5T800-480q0-51-36.5-87.5T676-604H540v-28h136q63.08 0 107.54 44.44Q828-543.11 828-480.06q0 63.06-44.46 107.56T676-328H540Z"/>
    </Icon>
  );
});

IconMaterialLinkW100Filled.displayName = 'OnesyIconMaterialLinkW100Filled';

export default IconMaterialLinkW100Filled;
