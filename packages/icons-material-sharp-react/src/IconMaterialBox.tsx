import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBox = (props: IIcon) => {

  return (
    <Icon
      name='Box'

      short_name='Box'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-640v440h560v-440H640v320l-160-80-160 80v-320H200Zm-80 520v-608l92-112h536l92 112v608H120Zm96-600h528l-34-40H250l-34 40Zm184 80v190l80-40 80 40v-190H400Zm-200 0h560-560Z"/>
    </Icon>
  );
};

IconMaterialBox.displayName = 'OnesyIconMaterialBox';

export default IconMaterialBox;
