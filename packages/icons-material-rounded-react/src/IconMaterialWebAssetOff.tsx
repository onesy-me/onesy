import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWebAssetOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebAssetOff'

      short_name='WebAssetOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800v114L54-792q-12-12-12-28.5T54-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T790-57L686-160H160Zm0-80h446L206-640h-46v400Zm720-480v440q0 20-12.5 30T840-240q-15 0-27.5-10.5T800-281v-359H467q-16 0-30.5-6T411-663l-69-69q-9-10-11-21t3-22q5-11 14-18t23-7h429q33 0 56.5 23.5T880-720Z"/>
    </Icon>
  );
});

IconMaterialWebAssetOff.displayName = 'OnesyIconMaterialWebAssetOff';

export default IconMaterialWebAssetOff;
