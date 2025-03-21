import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEventRepeatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventRepeatW100Filled'

      short_name='EventRepeat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-132q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h80v-76q0-6.8 4.64-11.4 4.64-4.6 11.5-4.6t11.36 4.6q4.5 4.6 4.5 11.4v76h276v-78q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v78h80q26 0 43 17t17 43v210q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-50H200v336q0 12 10 22t22 10h249q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H232ZM760-16q-56.63 0-101.32-31.5Q614-79 592-127q-3-6-.5-11.5t8.96-5.5q7.54 0 13.04 4 5.5 4 8.5 11 19 38 55.5 61.5T760-44q64.63 0 110.31-45.69Q916-135.37 916-200t-45.69-110.31Q824.63-356 760-356q-39 0-75 20t-62 52h67q6.07 0 10.03 3.95 3.97 3.96 3.97 10 0 6.05-3.97 10.05-3.96 4-10.03 4h-84q-12.75 0-21.37-8.63Q576-273.25 576-286v-84q0-6.07 3.95-10.03 3.96-3.97 10-3.97 6.05 0 10.05 3.97 4 3.96 4 10.03v65q29-35 70-57t86-22q76.36 0 130.18 53.82Q944-276.36 944-200q0 76.36-53.82 130.18Q836.36-16 760-16Z"/>
    </Icon>
  );
});

IconMaterialEventRepeatW100Filled.displayName = 'OnesyIconMaterialEventRepeatW100Filled';

export default IconMaterialEventRepeatW100Filled;
