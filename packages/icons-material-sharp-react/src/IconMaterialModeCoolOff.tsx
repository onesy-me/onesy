import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeCoolOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeCoolOff'

      short_name='ModeCoolOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M767 0 520-247v167h-80v-166L310-118l-56-56 170-170-80-80-170 170-56-56 128-130H80v-80h167L31-736l57-57L824-57 767 0Zm19-254L600-440h-45L440-555v-45L254-786l56-56 130 128v-166h80v166l130-128 56 56-186 186v80h80l186-186 56 56-128 130h166v80H714l128 130-56 56Z"/>
    </Icon>
  );
});

IconMaterialModeCoolOff.displayName = 'OnesyIconMaterialModeCoolOff';

export default IconMaterialModeCoolOff;
