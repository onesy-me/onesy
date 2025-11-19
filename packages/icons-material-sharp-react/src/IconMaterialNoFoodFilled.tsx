import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoFoodFilled = (props: IIcon) => {

  return (
    <Icon
      name='NoFoodFilled'

      short_name='NoFood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M819-28 487-360H40q0-121 93.5-180.5T340-600q5 0 11 .5t11 .5v113L27-820l57-57L876-85l-57 57ZM40-200v-80h600v80H40Zm0 160v-80h600v80H40Zm825-170L458-616l-18-144h200v-160h80v160h200l-55 550Z"/>
    </Icon>
  );
};

IconMaterialNoFoodFilled.displayName = 'OnesyIconMaterialNoFoodFilled';

export default IconMaterialNoFoodFilled;
