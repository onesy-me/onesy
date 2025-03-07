import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRadioW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadioW100'

      short_name='Radio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-532l452-184 10 26-380 154h614v536H132Zm28-28h640v-304H160v304Zm152-72q33 0 56.5-23.5T392-312q0-33-23.5-56.5T312-392q-33 0-56.5 23.5T232-312q0 33 23.5 56.5T312-232ZM160-492h506v-72h28v72h106v-148H160v148Zm0 332v-304 304Z"/>
    </Icon>
  );
});

IconMaterialRadioW100.displayName = 'OnesyIconMaterialRadioW100';

export default IconMaterialRadioW100;
