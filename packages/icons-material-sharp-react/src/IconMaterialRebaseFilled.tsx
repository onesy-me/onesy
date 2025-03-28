import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRebaseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RebaseFilled'

      short_name='Rebase'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m430-30-56-57 73-73H313q-13 35-43.5 57.5T200-80q-50 0-85-35t-35-85q0-39 22.5-69.5T160-313v-334q-35-13-57.5-43.5T80-760q0-50 35-85t85-35q39 0 69.5 22.5T313-800h134l-73-73 56-57 170 170-170 170-56-57 73-73H313q-9 26-28 45t-45 28v334q26 9 45 28t28 45h134l-73-73 56-57 170 170L430-30Zm330-50q-50 0-85-35t-35-85q0-40 22.5-70.5T720-313v-334q-35-12-57.5-42.5T640-760q0-50 35-85t85-35q50 0 85 35t35 85q0 40-22.5 70.5T800-647v334q35 13 57.5 43.5T880-200q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialRebaseFilled.displayName = 'OnesyIconMaterialRebaseFilled';

export default IconMaterialRebaseFilled;
