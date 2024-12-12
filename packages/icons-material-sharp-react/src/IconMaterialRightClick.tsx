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
      <path d="m492-240 25-84q54-13 88.5-56T640-480q0-66-47-113t-113-47q-57 0-100 34.5T324-517l-84 25q5-96 74-162t166-66q100 0 170 70t70 170q0 97-66 166t-162 74ZM139-60l-79-79 171-171-151-50 400-120L360-80l-50-151L139-60Z"/>
    </Icon>
  );
});

IconMaterialRightClick.displayName = 'OnesyIconMaterialRightClick';

export default IconMaterialRightClick;
