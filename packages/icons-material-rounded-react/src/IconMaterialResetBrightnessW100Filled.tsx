import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialResetBrightnessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetBrightnessW100Filled'

      short_name='ResetBrightness'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M611.93-172h-64.48q-6.45 0-10.95-4.5Q532-181 532-187v-64.85l-37.15-37.29Q490-294 490-300.18q0-6.18 5-10.82l37-37.07v-64.48q0-6.45 4.5-10.95Q541-428 547-428h64.85l37.29-37.15Q654-470 660.18-470q6.18 0 10.82 5l37.07 37h64.48q6.45 0 10.95 4.5Q788-419 788-413v64.85l37.15 37.29Q830-306 830-299.82q0 6.18-5 10.82l-37 37.07v64.48q0 6.45-4.5 10.95Q779-172 773-172h-64.85l-37.29 37.15Q666-130 659.82-130q-6.18 0-10.82-5l-37.07-37ZM660-204q40 0 68-28t28-68q0-40-28-68t-68-28v192ZM480-760q-117 0-198.5 81.5T200-480q0 88 48 157.5T372-221v-125q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v144q0 12.75-8.62 21.37Q382.75-172 370-172H226q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h130q-81-37-132.5-111.5T172-480q0-64.08 24-120.04Q220-656 262-698q42-42 98-66t120.43-24q97.08 0 174.82 55.5Q733-677 767-590q2 5 .09 10.36-1.91 5.35-7 7.5-5.09 2.14-10.59-.36T742-580q-30-79-100.72-129.5T480-760Z"/>
    </Icon>
  );
});

IconMaterialResetBrightnessW100Filled.displayName = 'OnesyIconMaterialResetBrightnessW100Filled';

export default IconMaterialResetBrightnessW100Filled;
