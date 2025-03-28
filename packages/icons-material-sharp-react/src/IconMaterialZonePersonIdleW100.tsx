import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialZonePersonIdleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZonePersonIdleW100'

      short_name='ZonePersonIdle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M852-118 517-453l-25 129H384l42-216-132 55v127h-28v-146l142-58L90-880l20-20 762 762-20 20Zm-720-66v-148h28v120h120v28H132Zm668-548v-120H680v-28h148v148h-28Zm-668 0v-118h28v118h-28Zm548 548v-28h118v28H680ZM270-852l-28-28h38v28h-10Zm558 558-28-28v-10h28v38ZM540-648q-27 0-45.5-18.5T476-712q0-27 18.5-45.5T540-776q27 0 45.5 18.5T604-712q0 27-18.5 45.5T540-648Z"/>
    </Icon>
  );
});

IconMaterialZonePersonIdleW100.displayName = 'OnesyIconMaterialZonePersonIdleW100';

export default IconMaterialZonePersonIdleW100;
