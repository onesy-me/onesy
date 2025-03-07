import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoFood = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFood'

      short_name='NoFood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m916-716-43 422q-2 25-26 33.5t-42-9.5q-6-6-9-14.5t-2-17.5l38-378H488q-17 0-28.5-11.5T448-720q0-17 11.5-28.5T488-760h152v-120q0-17 11.5-28.5T680-920q17 0 28.5 11.5T720-880v120h156q18 0 30 13t10 31ZM625-449ZM791-57 55-792q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57ZM80-200q-17 0-28.5-11.5T40-240q0-17 11.5-28.5T80-280h520q17 0 28.5 11.5T640-240q0 17-11.5 28.5T600-200H80Zm0 160q-17 0-28.5-11.5T40-80q0-17 11.5-28.5T80-120h520q17 0 28.5 11.5T640-80q0 17-11.5 28.5T600-40H80Zm282-559v80q-5 0-11-.5t-11-.5q-59 0-111.5 20T147-440h374l80 80H89q-19 0-31.5-14.5T49-408q10-51 39-87.5t69-60q40-23.5 87.5-34T340-600q5 0 11 .5t11 .5Zm-22 159Z"/>
    </Icon>
  );
});

IconMaterialNoFood.displayName = 'OnesyIconMaterialNoFood';

export default IconMaterialNoFood;
