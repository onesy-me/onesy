import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsW100Filled'

      short_name='Sports'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M389-258q-75 0-128.5-53.5T207-440q0-14.67 2.5-29.33Q212-484 215-492q-4 2-8 2h-7.51q-29.49 0-48.99-19.72Q131-529.44 131-558q0-28.56 18.99-48.28Q168.99-626 198-626q26 0 45 15.5t22 38.5q23-24 57-37t67-13h440v56H571v126q0 75.83-53.08 128.92Q464.83-258 389-258ZM199-518q17 0 28.5-11.5T239-558q0-17-11.5-28.5T199-598q-17 0-28.5 11.5T159-558q0 17 11.5 28.5T199-518Zm190.18 138q24.82 0 42.32-17.68 17.5-17.67 17.5-42.5 0-24.82-17.68-42.32-17.67-17.5-42.5-17.5-24.82 0-42.32 17.68-17.5 17.67-17.5 42.5 0 24.82 17.68 42.32 17.67 17.5 42.5 17.5Z"/>
    </Icon>
  );
});

IconMaterialSportsW100Filled.displayName = 'OnesyIconMaterialSportsW100Filled';

export default IconMaterialSportsW100Filled;
