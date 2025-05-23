import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoAdultContentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoAdultContentW100Filled'

      short_name='NoAdultContent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-73 0-136.5-27T233-233q-47-47-74-110.5T132-480q0-73 27-136.5T233-727q47-47 110.5-74T480-828q73 0 136.5 27T727-727q47 47 74 110.5T828-480q0 73-27 136.5T727-233q-47 47-110.5 74T480-132Zm0-28q63 0 118-22.5t98-61.5L580-360h40l96 96q39-43 61.5-98T800-480q0-133-93.5-226.5T480-800q-63 0-118 22.5T264-715l115 115h-39l-96-96q-39 43-61.5 98T160-480q0 133 93.5 226.5T480-160ZM220-410l53-70-53-70h35l35 47 35-47h35l-52 70 52 70h-35l-35-47-35 47h-35Zm190 0 53-70-53-70h35l35 47 35-47h35l-52 70 52 70h-35l-35-47-35 47h-35Zm190 0 53-70-53-70h35l35 47 35-47h35l-52 70 52 70h-35l-35-47-35 47h-35Z"/>
    </Icon>
  );
});

IconMaterialNoAdultContentW100Filled.displayName = 'OnesyIconMaterialNoAdultContentW100Filled';

export default IconMaterialNoAdultContentW100Filled;
