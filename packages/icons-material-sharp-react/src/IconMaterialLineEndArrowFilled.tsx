import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineEndArrowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndArrowFilled'

      short_name='LineEndArrow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-200v-240H80v-80h360v-240l440 280-440 280Z"/>
    </Icon>
  );
});

IconMaterialLineEndArrowFilled.displayName = 'OnesyIconMaterialLineEndArrowFilled';

export default IconMaterialLineEndArrowFilled;
