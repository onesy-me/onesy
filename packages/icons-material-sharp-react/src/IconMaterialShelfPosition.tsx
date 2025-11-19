import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShelfPosition = (props: IIcon) => {

  return (
    <Icon
      name='ShelfPosition'

      short_name='ShelfPosition'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h560v-120H200v120Zm460-200h100v-360H660v360Zm-460 0h100v-360H200v360Zm180 0h200v-360H380v360Z"/>
    </Icon>
  );
};

IconMaterialShelfPosition.displayName = 'OnesyIconMaterialShelfPosition';

export default IconMaterialShelfPosition;
