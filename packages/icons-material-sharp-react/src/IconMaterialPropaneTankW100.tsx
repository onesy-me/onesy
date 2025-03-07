import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPropaneTankW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PropaneTankW100'

      short_name='PropaneTank'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-132q-44.55 0-76.27-31.73Q212-195.45 212-240v-360q0-45 31.5-76.5T320-708v-120h320v120q45 0 76.5 31.5T748-600v360q0 44.55-31.72 76.27Q684.55-132 640-132H320Zm-80-302h480v-166q0-33-23.5-56.5T640-680H320q-33 0-56.5 23.5T240-600v166Zm80 274h320q33 0 56.5-23.5T720-240v-166H240v166q0 33 23.5 56.5T320-160Zm160-274Zm0 28Zm0-14Zm28-288h104v-92H348v92h104v-28h56v28Z"/>
    </Icon>
  );
});

IconMaterialPropaneTankW100.displayName = 'OnesyIconMaterialPropaneTankW100';

export default IconMaterialPropaneTankW100;
