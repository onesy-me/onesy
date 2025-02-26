import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsInputHdmiW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputHdmiW100'

      short_name='SettingsInputHdmi'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372-132v-86L252-460v-209h40v-159h376v159h40v209L588-218v86H372Zm-52-537h86v-87h28v87h92v-87h28v87h86v-131H320v131Zm80 509h160v-66l120-242v-173H280v173l120 242v66Zm80-308Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputHdmiW100.displayName = 'OnesyIconMaterialSettingsInputHdmiW100';

export default IconMaterialSettingsInputHdmiW100;
