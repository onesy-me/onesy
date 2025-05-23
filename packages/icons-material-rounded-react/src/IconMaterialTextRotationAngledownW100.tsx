import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextRotationAngledownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationAngledownW100'

      short_name='TextRotationAngledown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M526-174 138-562q-4-4-4.5-9.5T138-582q5-5 10-5t10 5l388 388v-82q0-6 4-10t10-4q6 0 10 4t4 10v100q0 13-8.5 21.5T544-146H444q-6 0-10-4t-4-10q0-6 4-10t10-4h82Zm-41-474-101 47q-4 2-8.5 1t-7.5-4q-5-5-3.5-12.5T373-627l367-164q4-2 7.5-1.5t6.5 3.5l7 7q3 3 4 6.5t-1 7.5L597-402q-3 7-10.5 8t-12.5-4q-3-3-4-7t1-9l47-101-133-133Zm26-12 119 119 99-212-3-3-215 96Z"/>
    </Icon>
  );
});

IconMaterialTextRotationAngledownW100.displayName = 'OnesyIconMaterialTextRotationAngledownW100';

export default IconMaterialTextRotationAngledownW100;
