import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalPostOfficeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPostOfficeFilled'

      short_name='LocalPostOffice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-400h160v-160q0-100 70-170t170-70h160q100 0 170 70t70 170v560h-80v-120H640v120H80Zm280-206L160-400v70l200 114 200-114v-70L360-286Zm280 6h160v-360q0-66-47-113t-113-47H480q-66 0-113 47t-47 113v160h320v200ZM400-560v-80h320v80H400Z"/>
    </Icon>
  );
});

IconMaterialLocalPostOfficeFilled.displayName = 'OnesyIconMaterialLocalPostOfficeFilled';

export default IconMaterialLocalPostOfficeFilled;
