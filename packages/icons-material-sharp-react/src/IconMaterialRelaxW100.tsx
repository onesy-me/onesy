import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRelaxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RelaxW100'

      short_name='Relax'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479-156 231-406h39l210 210 254-254q32-32 49.5-71t16.5-79q-1-69-43-116.5T655-764q-33 0-64.5 13.5T536-711l-56 61-57-61q-23-26-54.5-39.5T304-764q-52 0-91 37t-50 93h-28q11-68 58-113t111-45q39 0 75.5 16t65.5 47l35 37 33-35q30-32 67-48.5t75-16.5q72 0 122.5 56T828-600q0 46-19 89.5T755-432L479-156Zm-3-350H135v-28h500q27 0 46.5-19.5T701-600q0-27-19.5-46.5T635-666q-15 0-28.5 6.5T583-641l-29-8q14-21 35-33t46-12q39 0 66.5 27.5T729-600q0 39-27.5 66.5T635-506h-93q13 13 20 29.5t7 36.5q0 39-27.5 66.5T475-346q-25 0-46-12t-35-33l29-8q10 12 23.5 18.5T475-374q27 0 46.5-19.5T541-440q0-27-19-46.5T476-506Zm5 26Z"/>
    </Icon>
  );
});

IconMaterialRelaxW100.displayName = 'OnesyIconMaterialRelaxW100';

export default IconMaterialRelaxW100;
