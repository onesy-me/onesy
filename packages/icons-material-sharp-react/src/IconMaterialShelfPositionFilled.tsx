import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShelfPositionFilled = (props: IIcon) => {

  return (
    <Icon
      name='ShelfPositionFilled'

      short_name='ShelfPosition'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-200h720v200H120Zm540-280v-440h180v440H660Zm-540 0v-440h180v440H120Zm260 0v-440h200v440H380Z"/>
    </Icon>
  );
};

IconMaterialShelfPositionFilled.displayName = 'OnesyIconMaterialShelfPositionFilled';

export default IconMaterialShelfPositionFilled;
