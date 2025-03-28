import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoneOutline = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneOutline'

      short_name='DoneOutline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m381-240 424-424-57-56-368 367-169-170-57 57 227 226Zm-57 56L98-410q-12-12-17.5-26.5T75-466q0-15 5.5-30T98-523l56-56q12-12 26.5-18t30.5-6q16 0 30.5 6t26.5 18l113 113 310-311q11-12 26-17.5t30-5.5q15 0 30 5.5t27 16.5l57 56q12 12 18 26.5t6 30.5q0 16-5.5 30.5T862-608L438-184q-12 12-27 18t-30 6q-15 0-30-6t-27-18Z"/>
    </Icon>
  );
});

IconMaterialDoneOutline.displayName = 'OnesyIconMaterialDoneOutline';

export default IconMaterialDoneOutline;
