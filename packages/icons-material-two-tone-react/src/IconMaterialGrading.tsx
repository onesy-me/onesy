import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGrading = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grading'

      short_name='Grading'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M4,7h16v2H4V7z M4,13h16v-2H4V13z M4,17h7v-2H4V17z M4,21h7v-2H4V21z M15.41,18.17L14,16.75l-1.41,1.41L15.41,21L20,16.42 L18.58,15L15.41,18.17z M4,3v2h16V3H4z"/></g>
    </Icon>
  );
});

IconMaterialGrading.displayName = 'OnesyIconMaterialGrading';

export default IconMaterialGrading;
