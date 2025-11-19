import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAwardStarFilled = (props: IIcon) => {

  return (
    <Icon
      name='AwardStarFilled'

      short_name='AwardStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m363-310 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133ZM480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Z"/>
    </Icon>
  );
};

IconMaterialAwardStarFilled.displayName = 'OnesyIconMaterialAwardStarFilled';

export default IconMaterialAwardStarFilled;
