import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBottomRightClickFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomRightClickFilled'

      short_name='BottomRightClick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h640v-640h80v720H120Zm480-160q-33 0-56.5-23.5T520-360q0-33 23.5-56.5T600-440q33 0 56.5 23.5T680-360q0 33-23.5 56.5T600-280ZM200-480v-80h144L120-784l56-56 224 224v-144h80v280H200Z"/>
    </Icon>
  );
});

IconMaterialBottomRightClickFilled.displayName = 'OnesyIconMaterialBottomRightClickFilled';

export default IconMaterialBottomRightClickFilled;
