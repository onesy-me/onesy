import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialProcedureW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProcedureW100'

      short_name='Procedure'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M722-534q-27 0-60-17.5T599-600q-30-31-47.5-64T534-725q0-7 1-11.5t3-6.5q20-20 84.5-33.5T762-790q8 0 13 1.5t8 4.5q3 3 4.5 8t1.5 13q0 76-12.5 139.5T744-540q-3 3-8.5 4.5T722-534Zm16-61q11-30 16.5-71.5T762-762q-45-1-86.5 5T600-739q24 13 44 27t37 30q20 19 34.5 41t22.5 46Zm-16 33q-7-25-22.5-51T661-662q-23-23-48-38t-50-22q2 23 17 51.5t38 51.5q24 24 52 39.5t52 17.5Zm-47 136H300q-12 0-23.5-5T257-444L98-602q-4-4-4-10t4-10q4-4 10-4t10 4l167 168h375q12 0 23.5 5t19.5 13l159 158q4 4 4 10t-4 10q-4 4-10 4t-10-4L675-426ZM376-133q-13 0-21.5-8.5T346-163v-98q0-25 17.5-42.5T406-321h148q25 0 42.5 17.5T614-261v98q0 13-8.5 21.5T584-133H376Zm-2-28h212v-100q0-14-9-23t-23-9H406q-14 0-23 9t-9 23v100Zm0 0v-132 132Z"/>
    </Icon>
  );
});

IconMaterialProcedureW100.displayName = 'OnesyIconMaterialProcedureW100';

export default IconMaterialProcedureW100;
