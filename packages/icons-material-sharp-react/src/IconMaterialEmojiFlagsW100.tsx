import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmojiFlagsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFlagsW100'

      short_name='EmojiFlags'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-146v-602h266l16 80h214v296H562l-16-80H280v306h-28Zm248-414Zm86 160h134v-240H510l-16-80H280v240h290l16 80Z"/>
    </Icon>
  );
});

IconMaterialEmojiFlagsW100.displayName = 'OnesyIconMaterialEmojiFlagsW100';

export default IconMaterialEmojiFlagsW100;
