import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyVerticalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyVerticalW100'

      short_name='KeyVertical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M460-680q0-16.5 11.75-28.25T500-720q16.5 0 28.25 11.75T540-680q0 16.5-11.75 28.25T500-640q-16.5 0-28.25-11.75T460-680Zm-148 0q0-78.33 54.76-133.17 54.77-54.83 133-54.83Q578-868 633-813.17q55 54.84 55 133.17 0 60-33.5 108T568-504v361q0 5.57-2 10.78-2 5.22-7 10.22l-38 38q-5 5-10.13 7-5.14 2-11 2Q494-75 489-77q-5-2-10-7l-71-72q-4.09-3.68-6.55-8.84Q399-170 399-175t1.5-10q1.5-5 4.5-10l34-45-39-54q-3-4-4-8t-1-9q0-5 1.5-9t3.5-8l32-49v-127q-52-20-86-68t-34-108Zm28 0q0 60 36 101.5t84 52.5v158l-38 57v-.5.5l51 72-47 63h.5-.5l74 74 40-40v-384q48-11 84-52.5T660-680q0-66-47-113t-113-47q-66 0-113 47t-47 113Z"/>
    </Icon>
  );
});

IconMaterialKeyVerticalW100.displayName = 'OnesyIconMaterialKeyVerticalW100';

export default IconMaterialKeyVerticalW100;
