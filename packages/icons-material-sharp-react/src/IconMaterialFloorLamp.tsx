import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFloorLamp = (props: IIcon) => {

  return (
    <Icon
      name='FloorLamp'

      short_name='FloorLamp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-200v-320H186l111-360h366l111 360H520v320h-80ZM294-600h372l-62-200H356l-62 200Zm26 520v-80h320v80H320Zm160-620Z"/>
    </Icon>
  );
};

IconMaterialFloorLamp.displayName = 'OnesyIconMaterialFloorLamp';

export default IconMaterialFloorLamp;
