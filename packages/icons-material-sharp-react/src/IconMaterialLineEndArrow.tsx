import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineEndArrow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndArrow'

      short_name='LineEndArrow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-200v-240H80v-80h360v-240l440 280-440 280Zm80-146 211-134-211-134v268Zm0-134Z"/>
    </Icon>
  );
});

IconMaterialLineEndArrow.displayName = 'OnesyIconMaterialLineEndArrow';

export default IconMaterialLineEndArrow;
