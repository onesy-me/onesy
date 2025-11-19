import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHexagon = (props: IIcon) => {

  return (
    <Icon
      name='Hexagon'

      short_name='Hexagon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-120 64-480l208-360h416l208 360-208 360H272Zm46-80h324l161-280-161-280H318L156-480l162 280Zm162-280Z"/>
    </Icon>
  );
};

IconMaterialHexagon.displayName = 'OnesyIconMaterialHexagon';

export default IconMaterialHexagon;
