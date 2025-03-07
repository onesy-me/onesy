import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRamenDiningW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RamenDiningW100'

      short_name='RamenDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M366-186q-79-25-140.5-79T141-398q-3-11 3.5-20.5T162-428h50v-306q0-11 7.5-19.5T238-763l574-63q7-1 11.5 3.5T828-811q0 5-4 9t-9 5l-399 43v89h398q6 0 10 4t4 10q0 6-4 10t-10 4H416v209h382q11 0 18 9.5t4 20.5q-23 80-85 134.5T592-186v24q0 13-8.5 21.5T562-132H396q-13 0-21.5-8.5T366-162v-24Zm-38-479h60v-86l-60 7v79Zm-88 0h60v-76l-60 6v70Zm88 237h60v-209h-60v209Zm-88 0h60v-209h-60v209Zm154 268h170v-46l14-4q73-20 130-69t82-121H170q24 72 81 121t129 69l14 4v46Zm86-240Z"/>
    </Icon>
  );
});

IconMaterialRamenDiningW100.displayName = 'OnesyIconMaterialRamenDiningW100';

export default IconMaterialRamenDiningW100;
