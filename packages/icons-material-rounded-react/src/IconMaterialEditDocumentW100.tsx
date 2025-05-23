import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditDocumentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditDocumentW100'

      short_name='EditDocument'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M542-162v-36q0-6 2-11t7-10l202-201q5-4 10-6t10-2q5 0 10.5 2t9.5 6l37 38q4 5 6 10t2 10q0 5-2 10t-6 10L629-141q-5 5-10 7t-11 2h-36q-13 0-21.5-8.5T542-162Zm268-200-37-38 37 38ZM570-160h38l144-144-37-39-145 145v38Zm-298 28q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h289q12 0 23.5 5t19.5 13l126 126q8 8 13 19.5t5 23.5v70q0 6-4 10t-10 4q-6 0-10-4t-4-10v-81H602q-13 0-21.5-8.5T572-682v-118H272q-12 0-22 10t-10 22v576q0 12 10 22t22 10h156q6 0 10 4t4 10q0 6-4 10t-10 4H272Zm-32-28v-640 640Zm494-164-19-19 37 39-18-20Z"/>
    </Icon>
  );
});

IconMaterialEditDocumentW100.displayName = 'OnesyIconMaterialEditDocumentW100';

export default IconMaterialEditDocumentW100;
