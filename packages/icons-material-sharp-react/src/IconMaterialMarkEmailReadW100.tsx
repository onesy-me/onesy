import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkEmailReadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailReadW100'

      short_name='MarkEmailRead'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M614-118 480-252l20-20 114 114 228-228 20 20-248 248ZM480-520l304-200H176l304 200Zm0 34L160-698v426q0 14 9 23t23 9h187l28 28H132v-536h696v264l-28 28v-242L480-486Zm0 17Zm0-51Zm0 34Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailReadW100.displayName = 'OnesyIconMaterialMarkEmailReadW100';

export default IconMaterialMarkEmailReadW100;
