import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHexagonFilled = (props: IIcon) => {

  return (
    <Icon
      name='HexagonFilled'

      short_name='Hexagon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-120 64-480l208-360h416l208 360-208 360H272Z"/>
    </Icon>
  );
};

IconMaterialHexagonFilled.displayName = 'OnesyIconMaterialHexagonFilled';

export default IconMaterialHexagonFilled;
