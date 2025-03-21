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
      <path d="M320-132q-44.55 0-76.27-31.73Q212-195.45 212-240v-360q0-45 31.5-76.5T320-708v-60q0-24.75 17.63-42.38Q355.25-828 380-828h200q24.75 0 42.38 17.62Q640-792.75 640-768v60q45 0 76.5 31.5T748-600v360q0 44.55-31.72 76.27Q684.55-132 640-132H320Zm-80-302h480v-166q0-33-23.5-56.5T640-680H320q-33 0-56.5 23.5T240-600v166Zm80 274h320q33 0 56.5-23.5T720-240v-166H240v166q0 33 23.5 56.5T320-160Zm160-274Zm0 28Zm0-14Zm28-288h104v-60q0-14-9-23t-23-9H380q-14 0-23 9t-9 23v60h104q0-11 8.5-19.5T480-736q11 0 19.5 8.5T508-708Z"/>
    </Icon>
  );
});

IconMaterialPropaneTankW100.displayName = 'OnesyIconMaterialPropaneTankW100';

export default IconMaterialPropaneTankW100;
