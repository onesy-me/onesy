import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGridOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridOffW100Filled'

      short_name='GridOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m842-78-94-94H601v-147l-28-28v175H387v-186h175l-28-28H387v-147l-28-28v175H172v-188h174l-28-28H172v-146l-72-72q-4-4-4.5-9.5t4.72-10.72Q105-845 110-845q5 0 10 5L862-98q4 4 4.5 9.5T862-77.78Q857-73 852-73t-10-5Zm-610-94q-24.75 0-42.37-17.63Q172-207.25 172-232v-126h187v186H232Zm556-112-74-74h74v74ZM686-386l-85-85v-103h187v188H686ZM573-499l-75-75h75v75ZM470-602l-83-83v-103h186v186H470Zm131 0v-186h127q24.75 0 42.38 17.62Q788-752.75 788-728v126H601ZM359-713l-75-75h75v75Z"/>
    </Icon>
  );
});

IconMaterialGridOffW100Filled.displayName = 'OnesyIconMaterialGridOffW100Filled';

export default IconMaterialGridOffW100Filled;
