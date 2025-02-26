import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShuffleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShuffleFilled'

      short_name='Shuffle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-160v-80h104L537-367l57-57 126 126v-102h80v240H560Zm-344 0-56-56 504-504H560v-80h240v240h-80v-104L216-160Zm151-377L160-744l56-56 207 207-56 56Z"/>
    </Icon>
  );
});

IconMaterialShuffleFilled.displayName = 'OnesyIconMaterialShuffleFilled';

export default IconMaterialShuffleFilled;
