import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmojiFlagsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFlagsW100Filled'

      short_name='EmojiFlags'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-146v-602h266l16 80h214v296H562l-16-80H280v306h-28Z"/>
    </Icon>
  );
});

IconMaterialEmojiFlagsW100Filled.displayName = 'OnesyIconMaterialEmojiFlagsW100Filled';

export default IconMaterialEmojiFlagsW100Filled;
