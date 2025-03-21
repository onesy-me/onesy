import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStethoscopeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StethoscopeW100Filled'

      short_name='Stethoscope'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M538.13-132q-86.87 0-148-60.5Q329-253 329-340v-20q-73-5-123.5-59T155-548v-214h120v-40h28v108h-28v-40h-92v186q0 66 47 113t113 47q66 0 113-47t47-113v-186h-92v40h-28v-108h28v40h120v214q0 75-50.5 129T357-360v20q0 75 52.79 127.5T538-160q75 0 127.5-52.5T718-340v-61q-26-5-43-25.5T658-474q0-30.83 21.62-52.42Q701.24-548 732.12-548t52.38 21.58Q806-504.83 806-474q0 27-17 47.5T746-401v61q0 87-60.5 147.5T538.13-132Z"/>
    </Icon>
  );
});

IconMaterialStethoscopeW100Filled.displayName = 'OnesyIconMaterialStethoscopeW100Filled';

export default IconMaterialStethoscopeW100Filled;
