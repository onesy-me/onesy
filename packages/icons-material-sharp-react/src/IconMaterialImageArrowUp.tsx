import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImageArrowUp = (props: IIcon) => {

  return (
    <Icon
      name='ImageArrowUp'

      short_name='ImageArrowUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480ZM120-120v-720h400v80H200v560h560v-280h80v360H120Zm120-160h480L570-480 450-320l-90-120-120 160Zm480-280v-167l-64 63-56-56 160-160 160 160-56 56-64-63v167h-80Z"/>
    </Icon>
  );
};

IconMaterialImageArrowUp.displayName = 'OnesyIconMaterialImageArrowUp';

export default IconMaterialImageArrowUp;
