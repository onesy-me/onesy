import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPerson2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person2Filled'

      short_name='Person2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M391-480q-36 0-60-27t-19-63l13-98q8-57 52-94.5T480-800q59 0 103 37.5t52 94.5l13 98q5 36-19 63t-60 27H391ZM160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v32q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Z"/>
    </Icon>
  );
});

IconMaterialPerson2Filled.displayName = 'OnesyIconMaterialPerson2Filled';

export default IconMaterialPerson2Filled;
