import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsKabaddi = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsKabaddi'

      short_name='SportsKabaddi'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M57-80 1-136l146-146-61-165 169-169q12-12 26-18t31-6q17 0 31 6t26 18l80 78q27 27 66 42.5t84 15.5v80q-60 0-112-19t-90-57l-28-28-94 94 84 86v244h-80v-210l-52-48v88L57-80Zm542 0v-280l84-80-24-140q-15 18-33 32t-39 26q-33-2-62.5-14T475-568q45-8 79.5-30.5T611-656l40-64q17-27 47-36.5t59 2.5l202 86v188h-80v-136l-72-28L919-80h-84l-72-300-84 80v220h-80ZM459-620q-33 0-56.5-23.5T379-700q0-33 23.5-56.5T459-780q33 0 56.5 23.5T539-700q0 33-23.5 56.5T459-620Zm200-160q-33 0-56.5-23.5T579-860q0-33 23.5-56.5T659-940q33 0 56.5 23.5T739-860q0 33-23.5 56.5T659-780Z"/>
    </Icon>
  );
});

IconMaterialSportsKabaddi.displayName = 'OnesyIconMaterialSportsKabaddi';

export default IconMaterialSportsKabaddi;
