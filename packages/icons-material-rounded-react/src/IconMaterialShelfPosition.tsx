import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShelfPosition = (props: IIcon) => {

  return (
    <Icon
      name='ShelfPosition'

      short_name='ShelfPosition'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm560-200H200v120h560v-120Zm-100-80h100v-360H660v360Zm-460 0h100v-360H200v360Zm180 0h200v-360H380v360Z"/>
    </Icon>
  );
};

IconMaterialShelfPosition.displayName = 'OnesyIconMaterialShelfPosition';

export default IconMaterialShelfPosition;
