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
      <path d="M852-68 748-172H601v-147l-28-28v175H387v-186h175l-28-28H387v-147l-28-28v175H172v-188h174l-28-28H172v-146l-82-82 20-20L872-88l-20 20ZM172-172v-186h187v186H172Zm616-112-74-74h74v74ZM686-386l-85-85v-103h187v188H686ZM573-499l-75-75h75v75ZM470-602l-83-83v-103h186v186H470Zm131 0v-186h187v186H601ZM359-713l-75-75h75v75Z"/>
    </Icon>
  );
});

IconMaterialGridOffW100Filled.displayName = 'OnesyIconMaterialGridOffW100Filled';

export default IconMaterialGridOffW100Filled;
