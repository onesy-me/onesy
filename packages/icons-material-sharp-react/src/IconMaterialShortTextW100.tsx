import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShortTextW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShortTextW100'

      short_name='ShortText'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-386v-28h296v28H212Zm0-160v-28h536v28H212Z"/>
    </Icon>
  );
});

IconMaterialShortTextW100.displayName = 'OnesyIconMaterialShortTextW100';

export default IconMaterialShortTextW100;
