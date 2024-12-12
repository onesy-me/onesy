import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmojiFlagsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFlagsFilled'

      short_name='EmojiFlags'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Z"/>
    </Icon>
  );
});

IconMaterialEmojiFlagsFilled.displayName = 'OnesyIconMaterialEmojiFlagsFilled';

export default IconMaterialEmojiFlagsFilled;
