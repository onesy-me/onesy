import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEntW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EntW100'

      short_name='Ent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M395-132h28l22-214h129v-28H448l18-172h192v-28H441l-46 442Zm-103 0v-144q-57-52-88.5-115.5T172-520.72q0-128.04 89.83-217.66Q351.67-828 480-828q103 0 187.5 63.5T777-601l47 189H708v200H548v80h-28v-108h160v-200h108l-38-155q-23-92-99-148.5T480-800q-116 0-198 81.29T200-521q0 59.74 24.5 113.51T294-311.9l26 23.9v156h-28Zm202-334Z"/>
    </Icon>
  );
});

IconMaterialEntW100.displayName = 'OnesyIconMaterialEntW100';

export default IconMaterialEntW100;
