import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonPinCircleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPinCircleW100'

      short_name='PersonPinCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-386q42 0 77.5-18.5T617-454q-30-20-64.5-30T480-494q-38 0-72.5 10T343-454q24 31 59.5 49.5T480-386Zm0-200q23 0 38.5-15.5T534-640q0-23-15.5-38.5T480-694q-23 0-38.5 15.5T426-640q0 23 15.5 38.5T480-586Zm0 417q110-94 177.5-198.5T725-547q0-110-69.5-182T480-801q-106 0-175.5 72T235-547q0 75 67.5 179.5T480-169Zm0 38Q345-252 276-357t-69-190q0-120 78.5-200.5T480-828q116 0 194.5 80.5T753-547q0 85-69 190T480-131Zm0-423Z"/>
    </Icon>
  );
});

IconMaterialPersonPinCircleW100.displayName = 'OnesyIconMaterialPersonPinCircleW100';

export default IconMaterialPersonPinCircleW100;
