import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContrastSquareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContrastSquareFilled'

      short_name='ContrastSquare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560L200-200Zm100-400v50q0 13 8.5 21.5T330-520q13 0 21.5-8.5T360-550v-50h50q13 0 21.5-8.5T440-630q0-13-8.5-21.5T410-660h-50v-50q0-13-8.5-21.5T330-740q-13 0-21.5 8.5T300-710v50h-50q-13 0-21.5 8.5T220-630q0 13 8.5 21.5T250-600h50Zm351 280H511q-13 0-21.5-8.5T481-350q0-13 8.5-21.5T511-380h140q13 0 21.5 8.5T681-350q0 13-8.5 21.5T651-320Z"/>
    </Icon>
  );
});

IconMaterialContrastSquareFilled.displayName = 'OnesyIconMaterialContrastSquareFilled';

export default IconMaterialContrastSquareFilled;
