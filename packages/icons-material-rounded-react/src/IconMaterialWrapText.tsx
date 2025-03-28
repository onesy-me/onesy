import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWrapText = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrapText'

      short_name='WrapText'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-460q-17 0-28.5-11.5T160-500q0-17 11.5-28.5T200-540h490q63 0 106.5 43.5T840-390q0 63-43.5 106.5T690-240h-96l22 22q12 12 11.5 28T616-162q-12 12-28.5 12.5T559-161l-91-91q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l91-91q12-12 28.5-12t28.5 12q11 12 11.5 28.5T616-342l-22 22h96q29 0 49.5-20.5T760-390q0-29-20.5-49.5T690-460H200Zm0 220q-17 0-28.5-11.5T160-280q0-17 11.5-28.5T200-320h120q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240H200Zm0-440q-17 0-28.5-11.5T160-720q0-17 11.5-28.5T200-760h560q17 0 28.5 11.5T800-720q0 17-11.5 28.5T760-680H200Z"/>
    </Icon>
  );
});

IconMaterialWrapText.displayName = 'OnesyIconMaterialWrapText';

export default IconMaterialWrapText;
