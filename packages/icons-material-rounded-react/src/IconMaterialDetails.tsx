import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetails = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Details'

      short_name='Details'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M148-120q-23 0-34.5-19.5T113-179l332-598q11-20 35-20t35 20l332 598q11 20-.5 39.5T812-120H148Zm68-80h224v-403L216-200Zm304 0h224L520-603v403Z"/>
    </Icon>
  );
});

IconMaterialDetails.displayName = 'OnesyIconMaterialDetails';

export default IconMaterialDetails;
