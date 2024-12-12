import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGlassCupFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlassCupFilled'

      short_name='GlassCup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M279-80q-31 0-53.5-20T200-151l-69-630q-5-40 22-69.5t67-29.5h520q40 0 67 29.5t22 69.5l-69 630q-3 31-25.5 51T681-80H279Zm-16-240h435l52-480H210l53 480Z"/>
    </Icon>
  );
});

IconMaterialGlassCupFilled.displayName = 'OnesyIconMaterialGlassCupFilled';

export default IconMaterialGlassCupFilled;
