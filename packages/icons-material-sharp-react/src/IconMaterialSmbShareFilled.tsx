import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmbShareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmbShareFilled'

      short_name='SmbShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M485-440h163q26 0 44-18t18-44q0-26-18-44.5T648-565h-2q-5-32-29-53.5T560-640q-26 0-47 13.5T481-590q-30 2-50.5 23.5T410-515q0 30 21.5 52.5T485-440ZM40-120v-600h80v520h680v80H40Zm160-160v-600h280l80 80h360v520H200Z"/>
    </Icon>
  );
});

IconMaterialSmbShareFilled.displayName = 'OnesyIconMaterialSmbShareFilled';

export default IconMaterialSmbShareFilled;
