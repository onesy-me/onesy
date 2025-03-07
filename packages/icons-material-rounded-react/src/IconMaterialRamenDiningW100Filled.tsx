import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRamenDiningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RamenDiningW100Filled'

      short_name='RamenDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M366-186q-79-25-140.5-79T141-398q-3-11 3.5-20.5T162-428h50v-306q0-11.35 7.5-19.68Q227-762 238-763l574-63q7-1 11.5 3.4 4.5 4.39 4.5 11.23 0 5.37-4 9.37-4 4-9 5l-399 43v89h398q6.07 0 10.03 3.95 3.97 3.96 3.97 10 0 6.05-3.97 10.05-3.96 4-10.03 4H416v209h382q10.63 0 17.81 9.5Q823-409 820-398q-23 80-85 134.5T592-186v23.62q0 13.38-8.62 21.88-8.63 8.5-21.38 8.5H396q-12.75 0-21.37-8.63Q366-149.25 366-162v-24Zm-38-479h60v-86l-60 7v79Zm-88 0h60v-76l-60 6.08V-665Zm88 237h60v-209h-60v209Zm-88 0h60v-209h-60v209Z"/>
    </Icon>
  );
});

IconMaterialRamenDiningW100Filled.displayName = 'OnesyIconMaterialRamenDiningW100Filled';

export default IconMaterialRamenDiningW100Filled;
