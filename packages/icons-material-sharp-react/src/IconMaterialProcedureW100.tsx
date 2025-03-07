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
      <path d="M722-534q-27 0-60-17.5T599-600q-30-31-47.5-64T534-725q0-7 1-11.5t3-6.5q20-20 84.5-33.5T762-790q8 0 13 1.5t8 4.5q3 3 4.5 8t1.5 13q0 76-12.5 139.5T744-540q-3 3-8.5 4.5T722-534Zm16-61q11-30 16.5-71.5T762-762q-45-1-86.5 5T600-739q24 13 44 27t37 30q20 19 34.5 41t22.5 46Zm-16 33q-7-25-22.5-51T661-662q-23-23-48-38t-50-22q2 23 17 51.5t38 51.5q24 24 52 39.5t52 17.5Zm130 313L675-426H275L89-612l19-19 177 177h400l186 186-19 19ZM346-133v-128q0-25 17.5-42.5T406-321h148q25 0 42.5 17.5T614-261v128H346Zm28-28h212v-100q0-14-9-23t-23-9H406q-14 0-23 9t-9 23v100Zm0 0v-132 132Z"/>
    </Icon>
  );
});

IconMaterialProcedureW100.displayName = 'OnesyIconMaterialProcedureW100';

export default IconMaterialProcedureW100;
