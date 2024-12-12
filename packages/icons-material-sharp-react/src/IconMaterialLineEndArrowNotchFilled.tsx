import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineEndArrowNotchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndArrowNotchFilled'

      short_name='LineEndArrowNotch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m440-200 137-240H80v-80h497L440-760l440 280-440 280Z"/>
    </Icon>
  );
});

IconMaterialLineEndArrowNotchFilled.displayName = 'OnesyIconMaterialLineEndArrowNotchFilled';

export default IconMaterialLineEndArrowNotchFilled;
