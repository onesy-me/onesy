import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoutineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoutineW100Filled'

      short_name='Routine'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M481-226q-51 0-97-19.5T302-301q-36-36-55.5-82T227-480q0-37 10.5-72.5T268-619q8-12 23-9.5t21 16.5q22 51 52.5 95.5T434-433q39 39 83.5 69.5T613-311q14 6 16.5 21t-9.5 23q-31 20-66.5 30.5T481-226Zm220-159q-6-2-8.5-7.5T692-404q22-62 9-125t-61-111q-46-46-110-60.5T405-694q-5 2-10.5-.5T387-702q-2-5 .5-10t7.5-7q69-25 141-9.5T661-660q53 53 68 124.5T720-395q-2 6-7.5 9t-11.5 1ZM480-826q-6 0-10-4t-4-10v-60q0-6 4-10t10-4q6 0 10 4t4 10v60q0 6-4 10t-10 4Zm0 780q-6 0-10-4t-4-10v-60q0-6 4-10t10-4q6 0 10 4t4 10v60q0 6-4 10t-10 4Zm245-679q-5-5-5-10t5-10l40-40q4-4 9.5-4.5T785-785q5 5 5 10t-5 10l-40 40q-4 4-9.5 4.5T725-725ZM175-175q-5-5-5-10t5-10l40-40q4-4 9.5-4.5T235-235q5 5 5 10t-5 10l-40 40q-4 4-9.5 4.5T175-175Zm665-291q-6 0-10-4t-4-10q0-6 4-10t10-4h60q6 0 10 4t4 10q0 6-4 10t-10 4h-60Zm-780 0q-6 0-10-4t-4-10q0-6 4-10t10-4h60q6 0 10 4t4 10q0 6-4 10t-10 4H60Zm725 291q-5 5-10 5t-10-5l-40-40q-4-4-4.5-9.5T725-235q5-5 10-5t10 5l40 40q4 4 4.5 9.5T785-175ZM235-725q-5 5-10 5t-10-5l-40-40q-4-4-4.5-9.5T175-785q5-5 10-5t10 5l40 40q4 4 4.5 9.5T235-725Z"/>
    </Icon>
  );
});

IconMaterialRoutineW100Filled.displayName = 'OnesyIconMaterialRoutineW100Filled';

export default IconMaterialRoutineW100Filled;
