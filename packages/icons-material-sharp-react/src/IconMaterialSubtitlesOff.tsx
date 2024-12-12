import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubtitlesOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesOff'

      short_name='SubtitlesOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h80l80 80h-80v480h446l-80-80H240v-80h206L26-822l56-56L878-82l-56 56-136-134H80Zm720-114v-446H354l-80-80h606v606l-80-80ZM594-480l-80-80h206v80H594Zm-354 0v-80h80v80h-80Zm337-17Zm-194 34Z"/>
    </Icon>
  );
});

IconMaterialSubtitlesOff.displayName = 'OnesyIconMaterialSubtitlesOff';

export default IconMaterialSubtitlesOff;
