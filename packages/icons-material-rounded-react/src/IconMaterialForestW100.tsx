import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForestW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForestW100'

      short_name='Forest'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-158v-134H154q-18 0-26.5-16t1.5-31l129-193h-20q-18 0-27-16t2-31l122-176q9-13 25-13t25 13l95 137 95-137q9-13 25-13t25 13l122 176q11 15 2 31t-27 16h-20l129 193q10 15 1.5 31T806-292H628v130q0 13-8.5 21.5T598-132q-11 0-18.5-7.5T572-158v-134H388v130q0 13-8.5 21.5T358-132q-11 0-18.5-7.5T332-158Zm271-162h207L650-560h76L600-740 498-594l10 15q10 15 1.5 31T483-532h-21l141 212Zm-453 0h420L410-560h76L360-740 234-560h76L150-320Zm0 0h160-76 252-76 160-420Zm453 0H462h78-42 228-76 160-207Zm-31 28h56-56Zm50 0Z"/>
    </Icon>
  );
});

IconMaterialForestW100.displayName = 'OnesyIconMaterialForestW100';

export default IconMaterialForestW100;
