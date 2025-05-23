import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileOpenW100'

      short_name='FileOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h289q12 0 23.5 5t19.5 13l126 126q8 8 13 19.5t5 23.5v253q0 6-4 10t-10 4q-6 0-10-4t-4-10v-264H602q-13 0-21.5-8.5T572-682v-118H272q-12 0-22 10t-10 22v576q0 12 10 22t22 10h340q6 0 10 4t4 10q0 6-4 10t-10 4H272Zm462-114v113q0 6-4 10t-10 4q-6 0-10-4t-4-10v-131q0-13 8.5-21.5T736-294h131q6 0 10 4t4 10q0 6-4 10t-10 4H753l135 135q4 4 4 9.5t-4 9.5q-4 5-10 4.5t-10-4.5L734-246Zm-494 86v-640 640Z"/>
    </Icon>
  );
});

IconMaterialFileOpenW100.displayName = 'OnesyIconMaterialFileOpenW100';

export default IconMaterialFileOpenW100;
