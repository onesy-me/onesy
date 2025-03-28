import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddLinkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLinkW100'

      short_name='AddLink'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M684-212v-116H568v-28h116v-116h28v116h116v28H712v116h-28ZM420-328H284q-63.08 0-107.54-44.44Q132-416.89 132-479.94q0-63.06 44.46-107.56T284-632h136v28H284q-51 0-87.5 36.5T160-480q0 51 36.5 87.5T284-356h136v28Zm-74-138v-28h268v28H346Zm482-14h-28q0-51-36.5-87.5T676-604H540v-28h136q63.08 0 107.54 44.46Q828-543.08 828-480Z"/>
    </Icon>
  );
});

IconMaterialAddLinkW100.displayName = 'OnesyIconMaterialAddLinkW100';

export default IconMaterialAddLinkW100;
