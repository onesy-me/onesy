import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWbAutoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbAutoW100'

      short_name='WbAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M281-442h112l27 72q2 5 5 7.5t8 2.5q8 0 12.5-6t1.5-14l-98-255q-1-2-3.5-3.5T341-640h-6q-2 0-4.5 1.5T327-635l-99 256q-2 7 1.5 13t11.5 6q5 0 8-2t5-7l27-73Zm10-24 44-122h4l44 122h-92Zm46 214q-95 0-161.5-66.5T109-480q0-95 66.5-161.5T337-708q80 0 142 49t80 127l-22-89q-2-8 2.5-13.5T552-640q6 0 9 3.5t5 8.5l49 212h2l55-213q2-5 5.5-8t8.5-3h8q5 0 8.5 3t5.5 8l55 213h2l49-212q2-5 6-8.5t10-3.5q8 0 13 6t3 14l-62 249q-2 5-5.5 8t-8.5 3h-8q-5 0-8.5-3t-5.5-8l-57-219h-2l-57 220q-2 5-5 7.5t-8 2.5h-7q-5 0-9-2.5t-5-7.5l-39-162q26 108-42.5 194T337-252Zm0-28q83 0 141.5-58.5T537-480q0-83-58.5-141.5T337-680q-83 0-141.5 58.5T137-480q0 83 58.5 141.5T337-280Zm0-200Z"/>
    </Icon>
  );
});

IconMaterialWbAutoW100.displayName = 'OnesyIconMaterialWbAutoW100';

export default IconMaterialWbAutoW100;
