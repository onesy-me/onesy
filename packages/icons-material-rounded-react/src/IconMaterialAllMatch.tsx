import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAllMatch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllMatch'

      short_name='AllMatch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M490-480ZM193-200q-24 0-35-21t2-41l140-218-140-218q-13-20-2-41t35-21h407q20 0 37.5 9t28.5 25l104 147q11 17 7 31.5T761-524q-12 9-28 8.5T705-533L600-680H266l102 156q13 20 13 44t-13 44L266-280h137q17 0 28.5 11.5T443-240q0 17-11.5 28.5T403-200H193Zm498-35-17-17q-9-9-21.5-9t-21.5 9q-9 9-9 21t9 21l39 39q9 9 21 9t21-9l97-95q9-9 9-21.5t-9-21.5q-9-9-21.5-9t-21.5 9l-75 74Zm29 195q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Z"/>
    </Icon>
  );
});

IconMaterialAllMatch.displayName = 'OnesyIconMaterialAllMatch';

export default IconMaterialAllMatch;
