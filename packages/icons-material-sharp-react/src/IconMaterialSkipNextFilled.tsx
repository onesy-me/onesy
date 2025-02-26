import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSkipNextFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipNextFilled'

      short_name='SkipNext'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Z"/>
    </Icon>
  );
});

IconMaterialSkipNextFilled.displayName = 'OnesyIconMaterialSkipNextFilled';

export default IconMaterialSkipNextFilled;
