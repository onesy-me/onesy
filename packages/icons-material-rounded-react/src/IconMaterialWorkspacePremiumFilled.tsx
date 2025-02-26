import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWorkspacePremiumFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkspacePremiumFilled'

      short_name='WorkspacePremium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-483-68 52q-6 5-12 .5t-4-11.5l26-84-70-56q-5-5-3-11.5t9-6.5h86l26-82q2-7 10-7t10 7l26 82h85q7 0 9.5 6.5T608-582l-71 56 26 84q2 7-4 11.5t-12-.5l-67-52Zm0 363L293-58q-20 7-36.5-5T240-95v-254q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v254q0 20-16.5 32T667-58l-187-62Zm0-200q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Z"/>
    </Icon>
  );
});

IconMaterialWorkspacePremiumFilled.displayName = 'OnesyIconMaterialWorkspacePremiumFilled';

export default IconMaterialWorkspacePremiumFilled;
