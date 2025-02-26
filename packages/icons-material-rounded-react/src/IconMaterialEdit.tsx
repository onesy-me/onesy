import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEdit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Edit'

      short_name='Edit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200h57l391-391-57-57-391 391v57Zm-40 80q-17 0-28.5-11.5T120-160v-97q0-16 6-30.5t17-25.5l505-504q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L313-143q-11 11-25.5 17t-30.5 6h-97Zm600-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/>
    </Icon>
  );
});

IconMaterialEdit.displayName = 'OnesyIconMaterialEdit';

export default IconMaterialEdit;
