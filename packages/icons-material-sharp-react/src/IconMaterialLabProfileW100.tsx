import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabProfileW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabProfileW100'

      short_name='LabProfile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-506v-28h268v28H346Zm0-160v-28h268v28H346ZM240-374h346l134 174v-600H240v426Zm0 214h475L573-346H240v186Zm508 28H212v-696h536v696Zm-508-28v-640 640Zm0-186v-28 28Z"/>
    </Icon>
  );
});

IconMaterialLabProfileW100.displayName = 'OnesyIconMaterialLabProfileW100';

export default IconMaterialLabProfileW100;
