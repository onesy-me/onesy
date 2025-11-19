import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShelfPositionW100 = (props: IIcon) => {

  return (
    <Icon
      name='ShelfPositionW100'

      short_name='ShelfPosition'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm528-174H200v114q0 12 10 22t22 10h496q12 0 22-10t10-22v-114Zm-120-28h120v-354q0-12-10-22t-22-10h-88v386Zm-440 0h120v-386h-88q-12 0-22 10t-10 22v354Zm148 0h264v-386H348v386Z"/>
    </Icon>
  );
};

IconMaterialShelfPositionW100.displayName = 'OnesyIconMaterialShelfPositionW100';

export default IconMaterialShelfPositionW100;
