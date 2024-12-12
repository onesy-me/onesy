import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGridOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridOnFilled'

      short_name='GridOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120h187v-187H120v187Zm267 0h186v-187H387v187Zm266 0h187v-187H653v187ZM120-387h187v-186H120v186Zm267 0h186v-186H387v186Zm266 0h187v-186H653v186ZM120-653h187v-187H120v187Zm267 0h186v-187H387v187Zm266 0h187v-187H653v187Z"/>
    </Icon>
  );
});

IconMaterialGridOnFilled.displayName = 'OnesyIconMaterialGridOnFilled';

export default IconMaterialGridOnFilled;
