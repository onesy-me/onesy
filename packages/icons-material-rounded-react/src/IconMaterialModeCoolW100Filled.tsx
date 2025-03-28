import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeCoolW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeCoolW100Filled'

      short_name='ModeCool'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-308 319-163q-4 4-9.5 4t-9.5-5q-5-4-5-9.5t5-10.5l166-166v-116H350L183-299q-4 4-9.5 4t-10.5-5q-4-4-4-9.5t4-9.5l145-147H119q-5 0-9-4t-4-10q0-5 4-9.5t10-4.5h188L163-640q-4-4-4-9.5t5-10.5q4-4 9.5-4t10.5 4l166 166h116v-116L299-776q-4-4-4-9.5t5-10.5q4-4 9.5-4t9.5 4l147 144v-188q0-5 4-9.5t10-4.5q5 0 9.5 4.5t4.5 9.5v188l146-144q4-4 9.5-4t10.5 4q4 5 4 10.5t-4 9.5L494-610v116h116l166-166q4-4 9.5-4t10.5 5q4 4 4 9.5t-4 9.5L652-494h188q5 0 9.5 4.5t4.5 9.5q0 6-4.5 10t-9.5 4H652l144 147q4 4 4 9.5t-4 9.5q-5 5-10.5 5t-9.5-5L610-466H494v116l166 167q4 4 4 9.5t-5 10.5q-4 4-9.5 4t-9.5-4L494-308v189q0 5-4.5 9t-9.5 4q-6 0-10-4t-4-10v-188Z"/>
    </Icon>
  );
});

IconMaterialModeCoolW100Filled.displayName = 'OnesyIconMaterialModeCoolW100Filled';

export default IconMaterialModeCoolW100Filled;
