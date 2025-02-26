import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineEndArrowNotch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndArrowNotch'

      short_name='LineEndArrowNotch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m440-200 137-240H80v-80h497L440-760l440 280-440 280Z"/>
    </Icon>
  );
});

IconMaterialLineEndArrowNotch.displayName = 'OnesyIconMaterialLineEndArrowNotch';

export default IconMaterialLineEndArrowNotch;
