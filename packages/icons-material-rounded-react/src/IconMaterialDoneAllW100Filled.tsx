import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoneAllW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneAllW100Filled'

      short_name='DoneAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M88-456q-4-4-4.5-9.5T88-476q5-5 10-5t10 5l160 160 26-26q4-4 9.5-4.5T314-342q5 5 5 10t-5 10l-25 25q-9 9-21 9t-21-9L88-456Zm406 140 358-358q4-4 9.5-4.5T872-674q5 5 5 10t-5 10L515-297q-9 9-21 9t-21-9L314-456q-4-4-4.5-9.5T314-476q5-5 10-5t10 5l160 160Zm152-338L468-476q-4 4-9.5 4.5T448-476q-5-5-5-10t5-10l178-178q4-4 9.5-4.5T646-674q5 5 5 10t-5 10Z"/>
    </Icon>
  );
});

IconMaterialDoneAllW100Filled.displayName = 'OnesyIconMaterialDoneAllW100Filled';

export default IconMaterialDoneAllW100Filled;
