import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAllMatchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllMatchFilled'

      short_name='AllMatch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m691-235-17-17q-9-9-21.5-9t-21.5 9q-9 9-9 21t9 21l39 39q9 9 21 9t21-9l97-95q9-9 9-21.5t-9-21.5q-9-9-21.5-9t-21.5 9l-75 74Zm29 195q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM193-200q-24 0-35-21t2-41l140-218-140-218q-13-20-2-41t35-21h407q20 0 37.5 9t28.5 25l118 167q11 14 .5 29T755-518q-11-2-20.5-2H714q-59 2-108.5 25T519-434q-39 42-60 95t-19 110q1 12-7 20.5t-19 8.5H193Z"/>
    </Icon>
  );
});

IconMaterialAllMatchFilled.displayName = 'OnesyIconMaterialAllMatchFilled';

export default IconMaterialAllMatchFilled;
