import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReceiptLongW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReceiptLongW100'

      short_name='ReceiptLong'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-132q-29 0-48.5-19.5T172-200v-38q0-13 8.5-21.5T202-268h90v-527q0-5 3.5-6.5t7.5.5l30 17q4 2 7 2t7-2l36-20q4-2 7-2t7 2l36 20q4 2 7 2t7-2l36-20q4-2 7-2t7 2l36 20q4 2 7 2t7-2l36-20q4-2 7-2t7 2l36 20q4 2 7 2t7-2l36-20q4-2 7-2t7 2l36 20q4 2 7 2t7-2l30-17q4-2 7.5-.5t3.5 6.5v595q0 29-19.5 48.5T720-132H240Zm480-28q17 0 28.5-11.5T760-200v-560H320v492h330q13 0 21.5 8.5T680-238v38q0 17 11.5 28.5T720-160ZM394-654h178q6 0 10 4t4 10q0 6-4 10t-10 4H394q-6 0-10-4t-4-10q0-6 4-10t10-4Zm0 120h178q6 0 10 4t4 10q0 6-4 10t-10 4H394q-6 0-10-4t-4-10q0-6 4-10t10-4Zm280-78q-11 0-19.5-8.5T646-640q0-11 8.5-19.5T674-668q11 0 19.5 8.5T702-640q0 11-8.5 19.5T674-612Zm0 120q-11 0-19.5-8.5T646-520q0-11 8.5-19.5T674-548q11 0 19.5 8.5T702-520q0 11-8.5 19.5T674-492ZM240-160h412v-80H200v40q0 17 11.5 28.5T240-160Zm-40 0v-80 80Z"/>
    </Icon>
  );
});

IconMaterialReceiptLongW100.displayName = 'OnesyIconMaterialReceiptLongW100';

export default IconMaterialReceiptLongW100;
