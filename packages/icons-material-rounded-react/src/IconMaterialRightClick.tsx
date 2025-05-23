import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRightClick = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RightClick'

      short_name='RightClick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M179-100q-17 17-39.5 17T100-100q-17-17-17-39t17-39l132-132-91-30q-14-5-13.5-19t14.5-19l303-91q11-4 20 5t5 20l-91 303q-5 14-19 14.5T341-140l-30-91-132 131Zm542-380q0 75-42 136.5T568-256q-16 6-31 0t-21-22q-6-16 .5-31t22.5-21q45-17 73.5-58t28.5-92q0-66-47-113t-113-47q-51 0-92 28.5T331-538q-6 16-20.5 22.5t-30.5.5q-16-6-22.5-21t-.5-31q26-68 86.5-110.5T481-720q100 0 170 70t70 170Z"/>
    </Icon>
  );
});

IconMaterialRightClick.displayName = 'OnesyIconMaterialRightClick';

export default IconMaterialRightClick;
