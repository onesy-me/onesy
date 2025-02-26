import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBiotechW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BiotechW100Filled'

      short_name='Biotech'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M246-146v-28h200v-132h-26q-72.21 0-123.1-50.9Q246-407.79 246-480q0-50.67 26.5-93.33Q299-616 346-636q0 8 1.5 14.5T351-608q-36 18-56.5 52.5T274-480q0 60.83 42.58 103.42Q359.17-334 420-334h294v28H474v132h240v28H246Zm342-356-14-38-38 16-21-59q10-12 14.5-26.26Q534-623.52 534-640q0-33-20.5-59T461-732l-21-58 38-14-14-38 38-14 14 38 34-12 96 262-34 14 14 38-38 14Zm-148-72q-27.5 0-46.75-19.25T374-640q0-27.5 19.25-46.75T440-706q27.5 0 46.75 19.25T506-640q0 27.5-19.25 46.75T440-574Z"/>
    </Icon>
  );
});

IconMaterialBiotechW100Filled.displayName = 'OnesyIconMaterialBiotechW100Filled';

export default IconMaterialBiotechW100Filled;
