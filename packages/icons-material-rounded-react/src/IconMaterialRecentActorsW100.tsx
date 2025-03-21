import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRecentActorsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecentActorsW100'

      short_name='RecentActors'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M170-252q-41 0-65.5-24.5T80-342v-276q0-41 24.5-65.5T170-708h276q41 0 65.5 24.5T536-618v276q0 41-24.5 65.5T446-252H170Zm-62-90q44-29 94-45.5T308-404q56 0 106 16.5t94 45.5v-276q0-26-18-44t-44-18H170q-26 0-44 18t-18 44v276Zm200-34q-48 0-97 15.5T117-313q3 16 19.5 24.5T170-280h276q18 0 33.5-8.5T504-313q-44-29-94.5-46T308-376Zm0-70q-39 0-66.5-27.5T214-540q0-39 27.5-66.5T308-634q39 0 66.5 27.5T402-540q0 39-27.5 66.5T308-446Zm0-28q27.5 0 46.75-19.25T374-540q0-27.5-19.25-46.75T308-606q-27.5 0-46.75 19.25T242-540q0 27.5 19.25 46.75T308-474Zm385.96 222q-5.96 0-9.96-4.02-4-4.03-4-9.98v-428q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v428q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm172 0q-5.96 0-9.96-4.02-4-4.03-4-9.98v-428q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v428q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM308-540Zm3 260Z"/>
    </Icon>
  );
});

IconMaterialRecentActorsW100.displayName = 'OnesyIconMaterialRecentActorsW100';

export default IconMaterialRecentActorsW100;
